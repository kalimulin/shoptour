<template>
    <Modal
        class="add-good"
        title="Добавить товар"
        submit-button-text="Добавить"
        @close="$emit('close')"
        @submit="addGoodToStoreHandler"
    >
        <div slot="body">
            <div class="mt-2">
                <Select
                    v-model="form.good"
                    :options="goodsSelectOptions"
                    label="label"
                    placeholder="Выберите товар"
                />
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Modal from '@/components/common/Modal.vue'
import Select from '@/components/common/Select'

export default {
    name: 'AddGoodToStorePopup',
    components: {
        Modal,
        Select
    },
    props: {
        store: {
            type: Object,
            default: () => ({})
        },
        goods: {
            type: Array,
            default: () => ([])
        }
    },
    data() {
        return {
            form: {}
        }
    },
    computed: {
        ...mapGetters({
            goodsList: 'goods/goodsList',
            categoriesList: 'goods/categoriesList'
        }),
        goodsSelectOptions() {
            return this.goodsList.map(good => ({...good, label: ((good || {}).name || {}).RU || '---'}))
                .filter(good => !(this.goods.find(item => item.id === good.id)))
        }
    },
    created() {
        this.form.storeId = this.store.id
    },
    methods: {
        ...mapActions('store', ['callAddGoodToStore', 'callGetStore']),
        addGoodToStoreHandler() {
            if (!(((this.form || {}).good || {}).id)) {
                this.$snotify.warning('Выберите товар')
            } else {
                this.callAddGoodToStore(this.form).then(data => {
                    if (data.Id) {
                        this.$emit('close')
                        this.form = {}
                        this.$snotify.success('Товар добавлен')
                        this.callGetStore(this.store.id)
                    } else {
                        this.$snotify.error('Ошибка добавления товара')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        }
    }
}
</script>

<style lang="stylus">
    .add-good
        input[type=text]
            border 1px solid #d8d8d8
            font-size 14px
            width 100%
            height 48px
        .dropdown-toggle
            height 44px
</style>
