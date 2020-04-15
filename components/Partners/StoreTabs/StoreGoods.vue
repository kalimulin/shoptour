<template>
    <div class="store-goods">
        <div class="store-goods__button-container">
            <button-add
                v-if="allow('addAndDeleteGoodsInStore')"
                text="Добавить товар"
                @click="onAddItem"
            />
        </div>
        <div
            v-if="categoriesList.length || goodsList.length"
            class="mt-2 with-shadow"
        >
            <DoubleTable
                :items-list="goodsOfStore"
                filter-string=""
                :edit-items="false"
                :delete-items="allow('addAndDeleteGoodsInStore')"
                :edit-categories="allow('viewStorePercents')"
                :percents="allow('viewStorePercents') ? store.percents : []"
                @changeCategory="onChange"
                @deleteItem="deleteItem"
            />
        </div>
        <Modal
            v-if="deleteGoodConfirmation"
            title="Удалить товар?"
            submit-button-text="Ok"
            close-button-text="Отмена"
            @close="cancelDeteleGood"
            @submit="confirmDeleteGood"
        />
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import Modal from '@/components/common/Modal.vue'
import DoubleTable from '@/components/common/CatalogDoubleTable.vue'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'

export default {
    name: 'StoreGoods',
    components: {
        DoubleTable,
        ButtonAdd,
        Modal,
    },
    props:{
        store: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            deleteGoodConfirmation: false,
            good: {}
        }
    },
    computed: {
        ...mapGetters(['allow']),
        ...mapGetters('goods', ['categoriesList', 'goodsList']),
        goodsOfStore() {
            return this.goodsList.filter(good => (this.store.goodIds || []).includes(good.id))
        },
    },
    methods: {
        ...mapActions('store', ['callDeleteGoodFromStore']),
        deleteItem(item) {
            this.good = item
            this.deleteGoodConfirmation = true
        },
        cancelDeteleGood() {
            this.good = {}
            this.deleteGoodConfirmation = false
        },
        confirmDeleteGood() {
            this.callDeleteGoodFromStore({StoreId: this.$route.params.id, GoodId: this.good.id}).then(data => {
                if (data.Id) {
                    this.deleteGoodConfirmation = false
                    this.$snotify.success('Товар удалён')
                    this.$emit('set')
                } else {
                    this.$snotify.error('Ошибка удаления товара')
                }
            })
        },
        onChange(category) {
            this.$emit('change', category)
        },
        onAddItem() {
            this.$emit('add')
        }
    }
}
</script>
<style lang="stylus" scoped>
    .store-goods
        .store-goods__button-container
            display -ms-flexbox
            display flex
            align-items center
            justify-content flex-end
</style>
