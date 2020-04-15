<template>
    <Modal
        class="add-purchase"
        title="Добавить покупку"
        @close="$emit('close')"
        @submit="addNewPurchase"
    >
        <div slot="body">
            <div class="row gutter-4">
                <div class="col w-70">
                    <Label>
                        <template slot="label">
                            Товар
                        </template>
                        <template slot="popoverText">
                            <pre>{{ $t('help.good') }}</pre>
                        </template>
                    </Label>
                    <div class="d-flex justify-content-between">
                        <div class="add-purchase__search-input">
                            <input
                                v-model="goodsFilter"
                                type="text"
                                placeholder="Укажите товар"
                                @focus="showGoodsList = true"
                                @blur="showGoodsList = false"
                            >
                            <img
                                src="@/assets/images/icons/iconfinder_search_298865.svg"
                                alt=""
                            >
                            <transition name="fade">
                                <div
                                    v-if="showGoodsList"
                                    class="add-purchase__autocomplete"
                                >
                                    <div
                                        v-for="good in goodsSelectOptions"
                                        :key="good.id"
                                        class="add-purchase__autocomplete__item"
                                        @click="selectGoodHandler(good)"
                                    >
                                        {{ good.name.RU }} <span>{{ (((good || {}).category || {}).name || {}).RU || '' }}</span>
                                    </div>
                                    <div v-if="!goodsSelectOptions.length">
                                        <div class="add-purchase__autocomplete__item">
                                            Нет товаров для данного запроса
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <div class="add-purchase__clipboard-button">
                            <img
                                class="m-auto"
                                src="@/assets/images/icons/clipboard-white.svg"
                                alt=""
                            >
                        </div>
                    </div>
                </div>
                <div class="col w-30">
                    <Label>
                        <template slot="label">
                            Дата покупки
                        </template>
                        <template slot="popoverText">
                            <pre>{{ $t('help.date') }}</pre>
                        </template>
                    </Label>
                    <datetime
                        v-model="purchase.date"
                        type="date"
                        format="yyyy-MM-dd"
                    />
                </div>
            </div>

            <div class="add-purchase__sums">
                <div class="row gutter-4">
                    <div class="col add-purchase__sum">
                        <div class="add-purchase__sum__title">
                            Наличные
                        </div>
                        <Cost
                            v-model="purchase.cash"
                        />
                    </div>
                    <div class="col add-purchase__sum">
                        <div class="add-purchase__sum__title">
                            Карта
                        </div>
                        <Cost
                            v-model="purchase.card"
                        />
                    </div>
                    <div class="col add-purchase__sum">
                        <div class="add-purchase__sum__title">
                            Доставка
                        </div>
                        <Cost
                            v-model="purchase.delivery"
                        />
                    </div>
                </div>
            </div>
            <div class="add-purchase__comments">
                <label>Комментарий</label>
                <textarea
                    id="comments"
                    v-model="purchase.comment.RU"
                    name="comments"
                    rows="3"
                />
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import Modal from '@/components/common/Modal.vue'
import Cost from '@/components/common/Cost.vue'
import Label from '@/components/common/LabelWithPopover.vue'

export default {
    name: 'AddPurchasePopup',
    components: {
        Modal,
        Cost,
        Label
    },
    props: {
        client: {
            type: Object,
            default: () => ({})
        },
        store: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            goodsFilter: '',
            showGoodsList: false,
            purchase: {
                cash: {},
                card: {},
                delivery: {},
                date: this.$moment().utc().format(),
                comment: {
                    RU: '',
                    EN: '',
                    TR: ''
                }
            }
        }
    },
    computed: {
        ...mapGetters({
            goodsList: 'goods/goodsList',
            categoriesList: 'goods/categoriesList'
        }),
        filteredGoodsList() {
            return this.goodsList.filter(good => this.store.goodIds.indexOf(good.id) > -1)
        },
        filteredCategoriesList() {
            return this.categoriesList
        },
        goodsSelectOptions() {
            return this.filteredGoodsList.map(good => ({...good, category: this.filteredCategoriesList.find(cat => cat.id === good.categoryId)}))
                .filter(good => ((((good || {}).name || {}).RU || '').toLowerCase().indexOf(this.goodsFilter.toLowerCase()) > -1)).slice(0,8)
        },
    },
    methods: {
        ...mapActions('client', ['callAddPurchase', 'callGetPurchasesByClientId']),
        ...mapActions('visit', ['callVisitsByClient']),
        selectGoodHandler(good) {
            this.goodsFilter = ((good || {}).name || {}).RU || ''
            this.purchase.good = good
        },
        addNewPurchase() {
            this.purchase.storeId = this.store.id
            this.purchase.clientId = this.client.Id
            if (!this.purchase.good) {
                this.$snotify.warning('Выберите товар')
            } else if (!this.purchase.card.amount && !this.purchase.cash.amount && !this.purchase.delivery.amount) {
                this.$snotify.warning('Выберите хотя бы один способ оплаты')
            } else if (['cash', 'card', 'delivery'].some(item => {
                if(this.purchase[item] && this.purchase[item].amount) {
                    return !this.purchase[item].currency.value
                }
                if(this.purchase[item] && (this.purchase[item].currency || {}).value) {
                    return !this.purchase[item].amount
                }
                return false
            })) {
                this.$snotify.warning('Полностью заполните выбранные способы оплаты')
            } else if (!this.purchase.date) {
                this.$snotify.warning('Выберите дату покупки')
            } else {
                this.callVisitsByClient(this.client.Id).then(visits => {
                    const visit = visits.find(item => item.visitStatus === 'in-process') || {}
                    this.purchase.visitId = (visit || {}).id || ''
                    this.purchase.tourAgencyId = ((visit || {}).referer || {}).TourAgencyId || ''
                    this.purchase.employeeId = ((visit || {}).referer || {}).EmployeeId || ''
                    this.addPurchaseCall()
                }).catch(err => {
                    console.log(err)
                    this.purchase.visitId = ''
                    this.addPurchaseCall()
                })
            }
        },
        addPurchaseCall() {
            this.callAddPurchase(this.purchase).then(data => {
                if (data && data.Id) {
                    this.$emit('close')
                    this.$snotify.success('Покупка добавлена')
                    this.callGetPurchasesByClientId(this.client.Id)
                } else {
                    this.$snotify.error('Ошибка добавления покупки')
                }
            }).catch(error => {
                console.log(error)
                if (error && error.code == 13) {
                    this.$snotify.error('Невозможно определить выезд для покупки')
                } else {
                    this.$snotify.error('Ошибка выполнения запроса')
                }
            })
        }
    },
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"

    .add-purchase {

        .vdatetime {
            height auto
            input[type=text] {
                height 30px
            }
        }
        .modal__form-wrapper {
            width 800px
        }
        .add-purchase__clipboard-button {
            display flex
            width 32px
            height 32px
            background-color color-blue
            cursor pointer
            img {
                margin auto
            }
        }
        .add-purchase__search-input {
            height 32px
            position relative
            flex-grow 1
            input {
                color color-gray
                width 100%
                height 100%
                border 1px solid #D8D8D8
                border-right-width 0
            }
            img {
                position absolute
                right indent(1)
                height 16px
                top calc(50% - 8px)
                cursor pointer
            }
        }
        .add-purchase__autocomplete {
            position absolute
            width 100%
            top 100%
            border 1px solid rgba(155, 166, 175, 0.4)
            background-color white
            z-index 2
            .add-purchase__autocomplete__item {
                height 32px
                padding-left indent(1)
                padding-right indent(1)
                line-height 32px
                cursor pointer
                border-bottom 1px solid rgba(155, 166, 175, 0.4)
                span {
                    color color-gray
                }
                &:last-child {
                    border-bottom 0
                }
                &:hover {
                    background-color: rgba(74, 144, 226, 0.1);
                }
            }
        }
        .add-purchase__sums {
            margin-top indent(3)
            font-size 14px
            line-height 21px
            color color-gray

            .dropdown-toggle {
                .vs__selected-options {
                    flex-wrap nowrap
                    .selected-tag {
                        white-space nowrap
                    }
                }
            }
        }
        .add-purchase__sum {
            width 210px
        }
        .add-purchase__sum__title {
            margin-bottom indent(3)
            padding-left indent(2)
            padding-right indent(2)
        }
        .add-purchase__sum__input {
            display flex
            input[type=number] {
                width calc(100% - 57px)
                height 48px
                border: 1px solid #d8d8d8
            }
            .btn-group {
                min-width auto
                width auto
                .dropdown-toggle {
                    padding-right 0
                    min-width 86px
                    width 86px
                }
            }
        }
        .add-purchase__comments {
            margin-top indent(3)
            textarea {
                width 100%
                border 1px solid #d8d8d8
                color color-gray
                padding indent(1)
                font-size 14px
                line-height 21px
            }
        }
    }
</style>
