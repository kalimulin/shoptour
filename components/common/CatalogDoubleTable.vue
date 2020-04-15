<template>
    <div
        v-if="categoriesListFiltered.length || itemsList.length"
        class="double-catalog"
    >
        <div class="double-catalog__table">
            <div class="double-catalog__table-header">
                <div class="w-70">
                    Наименование
                </div>
                <div class="w-30">
                    Категория
                </div>
            </div>
            <div
                v-for="category in notEmptyCategoriesList"
                :key="category.id"
                class="double-catalog__table-row"
            >
                <div class="w-70 double-catalog__products-cell">
                    <div
                        v-for="item in itemsOfCategory(category.id)"
                        :key="item.id"
                        class="double-catalog__product-row"
                    >
                        <div class="double-catalog__product-title">
                            {{ ((item || {}).name || {}).RU || '---' }}
                        </div>
                        <img
                            v-if="editItems"
                            src="@/assets/images/icons/edit-blue.svg"
                            alt=""
                            @click="$emit('changeItem', item)"
                        >
                        <img
                            v-if="deleteItems"
                            class="ml-2"
                            src="@/assets/images/icons/trash-blue.svg"
                            alt=""
                            @click="$emit('deleteItem', item)"
                        >
                    </div>
                </div>
                <div class="w-30 double-catalog__category-cell">
                    <span>{{ ((category || {}).name || {}).RU || '---' }}</span>
                    <div
                        v-if="percents.find(item => item.categoryId === category.id)"
                        class="percent mx-1"
                    >
                        {{ percents.find(item => item.categoryId === category.id).percent }} %
                    </div>
                    <img
                        v-if="editCategories"
                        class="ml-1"
                        src="@/assets/images/icons/iconfinder_edit-3_2561260.svg"
                        alt=""
                        @click="$emit('changeCategory', category)"
                    >
                </div>
            </div>
            <div
                v-if="itemsOfCategory().length"
                class="double-catalog__table-row"
            >
                <div class="w-70 double-catalog__products-cell">
                    <div
                        v-for="item in itemsOfCategory()"
                        :key="item.id"
                        class="double-catalog__product-row"
                    >
                        <div class="double-catalog__product-title">
                            {{ ((item || {}).name || {}).RU || item.id }}
                        </div>
                        <img
                            v-if="editItems"
                            src="@/assets/images/icons/edit-blue.svg"
                            alt=""
                            @click="$emit('changeItem', item)"
                        >
                        <!--<img-->
                        <!--class="ml-2"-->
                        <!--src="@/assets/images/icons/trash-blue.svg"-->
                        <!--alt=""-->
                        <!--@click="$emit('deleteItem', item)"-->
                        <!--&gt;-->
                    </div>
                </div>
                <div class="w-30 double-catalog__category-cell">
                    <span>Без категории</span>
                </div>
            </div>
            <div
                v-for="category in emptyCategoriesList"
                :key="category.id"
                class="double-catalog__table-row"
            >
                <div class="w-70 double-catalog__products-cell">
                    <div class="w-70 double-catalog__products-cell">
                        <div
                            class="double-catalog__product-row"
                        >
                            <div class="double-catalog__product-title">
                                -----
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-30 double-catalog__category-cell">
                    <span>{{ ((category || {}).name || {}).RU || category.id }}</span>
                    <img
                        v-if="editCategories"
                        class="ml-1"
                        src="@/assets/images/icons/iconfinder_edit-3_2561260.svg"
                        alt=""
                        @click="$emit('changeCategory', category)"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import removeDuplicatesByKey from '@/utils/removeDuplicatesByKey'
import {mapGetters} from 'vuex'

export default {
    name: "CatalogDoubleTable",
    props: {
        itemsList: {
            type: Array,
            default: () => ([])
        },
        categoriesList: {
            type: Array,
            default: () => ([])
        },
        filterString: {
            type: String,
            default: ''
        },
        editItems: {
            type: Boolean,
            default: true
        },
        deleteItems: {
            type: Boolean,
            default: false
        },
        editCategories: {
            type: Boolean,
            default: true
        },
        percents: {
            type: Array,
            default: () => ([])
        }
    },
    computed: {
        ...mapGetters({
            categoriesCatalog: 'goods/categoriesList'
        }),
        categoriesListFiltered() {
            let categoriesList = this.categoriesList
            if (!this.categoriesList || !this.categoriesList.length) {
                categoriesList = this.categoriesByGoods
            }
            return categoriesList.filter(cat => {
                if ((((cat || {}).name || {}).RU || '').toLowerCase().indexOf(this.filterString.toLowerCase()) > -1) {
                    return true
                }
                if (this.itemsOfCategory(cat.id).some(good => good.name.RU.toLowerCase().indexOf(this.filterString.toLowerCase()) > -1)) {
                    return true
                }
                return false
            })
        },
        notEmptyCategoriesList() {
            return this.categoriesListFiltered.filter(cat => {
                if (this.itemsList.length) {
                    const itemsCount = this.itemsOfCategory(cat.id).length
                    return !!itemsCount
                }
                return false
            })
        },
        emptyCategoriesList() {
            return this.categoriesListFiltered.filter(cat => {
                if (this.itemsList.length) {
                    const itemsCount = this.itemsOfCategory(cat.id).length
                    return !itemsCount
                }
                return false
            })
        },
        categoriesByGoods() {
            let categories = []
            this.itemsList.forEach(item => {
                categories.push(this.getCategoryById(item.categoryId))
            })
            return removeDuplicatesByKey(categories, 'id')
        },
    },
    methods: {
        itemsOfCategory(id) {
            const categoryId = id || ''
            return this.itemsList.filter(item => item.categoryId === categoryId && (((item || {}).name || {}).RU || '').toLowerCase().indexOf(this.filterString.toLowerCase()) > -1)
        },
        getCategoryById(id) {
            if (this.categoriesCatalog) {
                return this.categoriesCatalog.find(item => item.id === id) || {}
            }
            return {}
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"
    .double-catalog
        color color-gray
        font-size 14px
        line-height 21px
        .double-catalog__filter
            display flex
            width 390px
            margin-right auto
            border-bottom 1px solid rgba(155, 166, 175, 0.4)
            img
                cursor pointer
            input
                border 0
                width 100%
        .double-catalog__table
            max-height calc(100vh - 200px)
            overflow auto
            line-height 19px
            font-size 14px
            color #485465
            .double-catalog__table-row
                display flex
                border-bottom 1px solid rgba(0, 0, 0, 0.1)
                .double-catalog__category-cell
                    display flex
                    align-items center
                    justify-content center
                    padding indent(2)
                    background-color rgba(74, 144, 226, 0.1)
                    img
                        cursor pointer
                &:nth-child(odd)
                    .double-catalog__category-cell
                        background-color rgba(74, 144, 226, 0.2)
            .double-catalog__table-header
                line-height 15px
                font-size 14px
                display flex
                padding indent(2) 0
                border-bottom 1px solid rgba(0, 0, 0, 0.1)
                & > div
                    padding 0 indent(2)
            .double-catalog__product-row
                padding indent(2)
                display flex
                align-items center
                justify-content space-between
                border-bottom 1px solid rgba(0, 0, 0, 0.1)
                img
                    cursor pointer
                &:last-child
                    border-bottom 0
                .double-catalog__product-title
                    margin-right auto
        .add-category
            input[type=text]
                width 100%
                height 48px
        .add-item
            input[type=text]
                width 100%
                height 48px
        .v-select .dropdown-toggle
            height 44px
</style>
