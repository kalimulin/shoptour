<template>
    <div :class="allow('viewStoreAnalytics') ? 'd-flex' : ''">
        <div class="store-about with-shadow">
            <div
                v-if="allow('changeStoreInfo')"
            >
                <img
                    src="@/assets/images/icons/iconfinder_edit-3_2561260.svg"
                    alt=""
                    @click="onUpdate"
                >
            </div>
            <div class="ml-4">
                <div><strong>Местоположение</strong></div>
                <div>{{ storeCountry && storeCountry.name }}, {{ storeCity && storeCity.name }}</div>
            </div>
            <div class="ml-4">
                <div><strong>Контакты</strong></div>
                <template v-if="store.contactInfo">
                    <div
                        v-for="(contact, $i) in store.contactInfo"
                        :key="$i"
                    >
                        {{ contact.type.type }}: {{ contact.value }}
                    </div>
                </template>
            </div>
            <div class="ml-4">
                <div><strong>Категории</strong></div>
                <div class="store-about__categories">
                    {{ categoriesListText }}
                </div>
                <div>товаров {{ uniq(store.goodIds).length }}</div>
            </div>
        </div>
        <div
            v-if="allow('viewStoreAnalytics')"
            class="store-about__profit with-shadow"
        >
            <div class="store-about__profit-sum">
                109 567
            </div>
            <div class="mt-1">
                Доход за январь
            </div>
            <div>
                <a href="#">
                    Посмотреть аналитику
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import removeDuplicatesByKey from '@/utils/removeDuplicatesByKey'
import removeDuplicates from '@/utils/removeDuplicates'
export default {
    name: 'StoreAbout',
    components: {
    },
    props:{
        store: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        ...mapGetters(['allow']),
        ...mapGetters('goods', ['categoriesList', 'goodsList', 'getCategoryById']),
        ...mapGetters('city', ['getCountriesList', 'getCitiesList']),
        categoriesByGoods() {
            let categories = this.goodsList.map(item => this.getCategoryById(item.categoryId))
            return removeDuplicatesByKey(categories, 'id')
        },
        categoriesListText() {
            let textList = ''
            this.categoriesByGoods.forEach(item => {
                if ((((item || {}).name || {}).RU || '').length) {
                    textList += `${item.name.RU}, `
                }
            })
            return textList.slice(0,-2)
        },
        storeCity() {
            return this.getCitiesList.find(city => city.id === this.store.cityId)
        },
        storeCountry() {
            return this.getCountriesList.find(country => country.id === this.store.countryId)
        },
    },
    methods: {
        uniq(arr) {
            return removeDuplicates(arr)
        },
        onUpdate() {
            this.$emit('update')
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~@/assets/variables.styl"
    .store-about {
        display flex
        padding indent(3) indent(2)
        justify-content space-between
        flex-grow 1

        .store-about__categories {
            color: rgba(93, 125, 163, 0.8);
        }
    }
    .store-about__profit {
        margin-left indent(2)
        padding indent(3) indent(2)
        width 28%
        line-height 24px
        .store-about__profit-sum {
            font-size 40px
            line-height 40px
            color color-blue
        }
    }
</style>
