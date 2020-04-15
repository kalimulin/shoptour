<template>
    <Modal
        class="set-category-percent"
        :title="(category || {}).categoryId ? 'Изменить процент' : 'Добавить категорию'"
        @submit="addCategory"
        @close="$emit('close')"
    >
        <div slot="body">
            <template v-if="!((category || {}).CategoryId) && !(filteredCategoriesOptions.length)">
                <div class="mt-2">
                    Нет категорий для добавления
                </div>
            </template>
            <template v-else>
                <div class="mt-2">
                    <Label>
                        <template slot="label">
                            Категория
                        </template>
                        <template slot="popoverText">
                            <pre>{{ $t('help.chooseCategory') }}</pre>
                        </template>
                    </Label>
                    <Select
                        v-model="category.category"
                        :options="filteredCategoriesOptions"
                        label="label"
                        placeholder="Выберите категорию"
                        :disabled="!!((category || {}).CategoryId)"
                    />
                </div>
                <div class="mt-2">
                    <Label>
                        <template slot="label">
                            Процент
                        </template>
                        <template slot="popoverText">
                            <pre>{{ $t('help.percent') }}</pre>
                        </template>
                    </Label>
                    <input
                        v-model="newPercent"
                        type="number"
                        pattern="[0-9]*"
                        min="0"
                        max="100"
                        placeholder="Процент"
                    >
                </div>
            </template>
        </div>
    </Modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Modal from '@/components/common/Modal.vue'
import Select from '@/components/common/Select'
import Label from '@/components/common/LabelWithPopover.vue'

export default {
    name: 'SetPercentInStorePopup',
    components: {
        Modal,
        Select,
        Label
    },
    props: {
        category: {
            type: Object,
            default: () => ({})
        },
        tourAgencyPercents: {
            type: Array,
            default: () => ([])
        }
    },
    data() {
        return {
            newPercent: 0
        }
    },
    computed: {
        ...mapGetters({
            goodCategories: 'goods/categoriesList'
        }),
        goodCategoriesSelectOptions() {
            return this.goodCategories.map(item => ({...item, label: item.name.RU || item.id})) || []
        },
        filteredCategoriesOptions() {
            return this.goodCategoriesSelectOptions.filter(item => !(this.tourAgencyPercents.find(per => per.categoryId === item.id)))
        }
    },
    created() {
        if (this.category.categoryId) {
            this.newPercent = this.category.percent
            this.category.category = this.goodCategoriesSelectOptions.find(cat => cat.id === this.category.categoryId)
        }
    },
    methods: {
        ...mapActions('tourAgency', ['callGetTourAgency', 'callAddPercentCategory']),
        ...mapActions('goods', ['callGetCategories']),
        addCategory() {
            if (((this.category || {}).category || {}).id) {
                this.callAddPercentCategory({
                    tourAgencyId: this.$route.params.id,
                    categoryId: this.category.category.id,
                    percent: this.newPercent
                }).then(data => {
                    // console.log(data)
                    if (data.Id) {
                        this.callGetCategories()
                        this.$snotify.success('Категория сохранена')
                        this.callGetTourAgency({agencyId: this.$route.params.id})
                        this.$emit('close')
                    } else {
                        this.$snotify.success(this.$t('messages.addCategoryFail'))
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            } else {
                this.$snotify.warning('Выберите категорию')
            }
        },
    }
}
</script>

<style lang="stylus">
    .set-category-percent
        input[type=text], input[type=number]
            border 1px solid #d8d8d8
            font-size 14px
            width 100%
            height 48px
        .dropdown-toggle
            height 44px
</style>
