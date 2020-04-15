<template>
    <div class="products-catalog">
        <PreviousPage title="Справочник товаров и категорий" />
        <div class="container mt-4">
            <div class="d-flex align-items-center">
                <InputSearch
                    v-model="filterString"
                    placeholder="Введите название категории или товара"
                />
                <ButtonAdd
                    text="Добавить товар"
                    @click="addGoodButtonHandler"
                />
                <ButtonAdd
                    class="ml-2"
                    text="Добавить категорию"
                    @click="addCategoryButtonHandler"
                />
            </div>
            <div
                v-if="categoriesList.length || goodsList.length"
                class="mt-2 with-shadow"
            >
                <DoubleTable
                    :categories-list="categoriesList"
                    :items-list="goodsList"
                    :filter-string="filterString"
                    @changeCategory="changeCategoryHandler"
                    @changeItem="changeGoodHandler"
                />
            </div>
        </div>
        <GoodAddModal
            v-if="showGoodAddModal"
            :good="good"
            @close="hideModalHandler"
        />
        <CategoryAddModal
            v-if="showCategoryAddModal"
            :category="category"
            @close="hideModalHandler"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import DoubleTable from '@/components/common/CatalogDoubleTable.vue'
import PreviousPage from '@/components/common/PreviousPage.vue'
import deepCopy from '@/utils/deepCopy'
import InputSearch from '@/components/common/inputs/InputSearch.vue'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import GoodAddModal from '@/components/Catalogs/Goods/GoodAddModal.vue'
import CategoryAddModal from '@/components/Catalogs/Goods/CategoryAddModal.vue'

export default {
    name: 'GoodsCatalog',
    components: {
        DoubleTable,
        PreviousPage,
        InputSearch,
        ButtonAdd,
        GoodAddModal,
        CategoryAddModal
    },
    data() {
        return {
            showGoodAddModal: false,
            showCategoryAddModal: false,
            newCategoryName: {},
            filterString: '',
            category: {},
            good: {}
        }
    },
    computed: {
        ...mapGetters('goods', ['goodsList', 'categoriesList']),
        categoriesSelectOptions() {
            return [
                {label: 'Без категории', id: ''},
                ...this.categoriesList.map(cat => ({...cat, label: cat.name.RU || cat.id}))
            ]
        }
    },
    methods: {
        ...mapActions('goods', ['callGetCategories', 'callGetGoods']),
        addCategoryButtonHandler() {
            this.category = {}
            this.showCategoryAddModal = true
        },
        hideModalHandler(update) {
            this.good = {}
            this.category = {}
            this.showGoodAddModal = false
            this.showCategoryAddModal = false
            if (update === true) {
                this.callGetCategories()
                this.callGetGoods()
            }
        },
        addGoodButtonHandler() {
            this.good = {}
            this.showGoodAddModal = true
        },
        changeGoodHandler(good) {
            this.good = deepCopy(good)
            this.good.category = this.categoriesSelectOptions.find(cat => cat.id === good.categoryId)
            this.showGoodAddModal = true
        },
        changeCategoryHandler(category) {
            this.category = deepCopy(category)
            this.showCategoryAddModal = true
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~@/assets/variables.styl"
    .products-catalog
        color color-gray
        font-size 14px
        line-height 21px
        .button-blue
            height 48px
        .products-catalog__filter
            display flex
            width 390px
            margin-right auto
            border-bottom 1px solid rgba(155, 166, 175, 0.4)
            img
                cursor pointer
            input
                border 0
                width 100%
        .v-select .dropdown-toggle
            height 44px
</style>
