<template>
    <Modal
        class="add-good"
        :title="good && good.id ? 'Изменить товар' : 'Добавить товар'"
        @close="$emit('close')"
        @submit="onSubmit"
    >
        <div slot="body">
            <Label>
                <template slot="label">
                    Название товара
                </template>
                <template slot="popoverText">
                    <pre>{{ $t('help.goodName') }}</pre>
                </template>
            </Label>
            <input
                v-if="newGood && newGood.id"
                v-model="newGood.name.RU"
                type="text"
                placeholder="Название товара (RU)"
            >
            <input
                v-else
                v-model="newGoodName.RU"
                type="text"
                placeholder="Название товара (RU)"
            >
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
                    v-if="newGood && newGood.id"
                    v-model="newGood.category"
                    :options="categoriesSelectOptions"
                    label="label"
                    placeholder="Выберите категорию"
                />
                <Select
                    v-else
                    v-model="newGoodCategory"
                    :options="categoriesSelectOptions"
                    label="label"
                    placeholder="Выберите категорию"
                />
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Select from '@/components/common/Select'
import Modal from '@/components/common/Modal.vue'
import Label from '@/components/common/LabelWithPopover.vue'

export default {
    name: "GoodAddModal",
    components: {
        Modal,
        Select,
        Label,
    },
    props: {
        good: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            newGood: {},
            newGoodName: {},
            newGoodCategory: {},
        }
    },
    computed: {
        ...mapGetters('goods', ['categoriesList']),
        categoriesSelectOptions() {
            return [
                ...this.categoriesList.map(cat => ({...cat, label: cat.name.RU || cat.id}))
            ]
        }
    },
    created() {
        this.newGood = Object.assign({}, this.good)
    },
    methods: {
        ...mapActions('goods', ['callAddGood', 'callUpdateGood']),
        onSubmit() {
            this.good && this.good.id ? this.changeGood() : this.addGoodHandler()
        },
        validateGood() {
            if(!this.good.name.RU) {
                this.$snotify.warning('Введите название товара')
            } else if(!this.good.category) {
                this.$snotify.warning('Введите категорию товара')
            } else {
                return true
            }
            return false
        },
        validateNewGood() {
            if(!this.newGoodName.RU) {
                this.$snotify.warning('Введите название товара')
            } else if(!this.newGoodCategory) {
                this.$snotify.warning('Введите категорию товара')
            } else {
                return true
            }
            return false
        },
        addGoodHandler() {
            if(this.validateNewGood()) {
                // console.log(this.newGoodName)
                this.callAddGood({
                    name: this.newGoodName,
                    categoryId: this.newGoodCategory.id || ''
                }).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Товар добавлен')
                    } else {
                        this.$snotify.success('Ошибка добавления товара')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        changeGood() {
            if(this.validateGood()) {
                this.callUpdateGood(this.good).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Товар обновлён')
                    } else {
                        this.$snotify.success('Ошибка обновления')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
    }
}
</script>

<style lang="stylus">
    .add-good
        input[type=text]
            width 100%
            height 48px
</style>
