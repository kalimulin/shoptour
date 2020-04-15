<template>
    <div
        v-if="allow('viewStores')"
        class="shop-page"
    >
        <PreviousPage :title="`Магазин “${store.name}”`" />
        <div class="container mt-4">
            <div class="shop-tabs">
                <Tabs
                    :tabs-list="tabsList"
                    :selected-tab="activeTab"
                    @change="changeTabHandler"
                />
            </div>
            <div class="shop__tabs-content mt-4">
                <transition
                    name="fade"
                    mode="out-in"
                >
                    <div
                        v-if="activeTab.name === 'workWithClient' && allow('viewWorkWithClient')"
                        class="shop__tab-content"
                    >
                        <WorkWithClient
                            :store="store"
                        />
                    </div>
                    <div
                        v-if="activeTab.name === 'about'"
                        key="about"
                        class="partners__tab-content"
                    >
                        <store-about
                            :store="store"
                            @update="updateStoreHandler"
                        />
                    </div>
                    <div
                        v-if="activeTab.name === 'goods'"
                        class="partners__tab-content"
                    >
                        <store-goods
                            :store="store"
                            @add="addGoodButtonHandler"
                            @change="changeCategory"
                            @set="setStoreData"
                        />
                    </div>
                    <div
                        v-if="activeTab.name === 'purchases'"
                        key="purchases"
                    >
                        <store-purchases
                            :store-id="store.id"
                        />
                    </div>
                </transition>
            </div>
        </div>
        <UpdateStorePopup
            v-if="showUpdateStoreModal"
            :store="store"
            @close="closeStoreUpdateModal"
        />
        <AddGoodToStorePopup
            v-if="showGoodAddModal"
            :store="store"
            :goods="filteredGoodsList"
            @close="closeGoodAddModal"
        />
        <SetPercentInStorePopup
            v-if="setPercentInStoreModal"
            :category="category"
            @close="closeSetPercentInStoreModal"
        />
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import Tabs from '@/components/common/Tabs.vue'
import UpdateStorePopup from '@/components/Partners/Popups/UpdateStorePopup.vue'
import AddGoodToStorePopup from '@/components/Partners/Popups/AddGoodToStorePopup.vue'
import SetPercentInStorePopup from '@/components/Partners/Popups/SetPercentInStorePopup.vue'
import StorePurchases from '@/components/Partners/StoreTabs/StorePurchases.vue'
import StoreGoods from '@/components/Partners/StoreTabs/StoreGoods.vue'
import StoreAbout from '@/components/Partners/StoreTabs/StoreAbout.vue'
import WorkWithClient from '@/components/Partners/StoreTabs/StoreWorkWithClient/Index'
import PreviousPage from '@/components/common/PreviousPage.vue'
import store from '@/store'
import moment from 'moment'

const DEFAULT_START_DATE = moment().utc().subtract(1, 'months').startOf('month').format()
const DEFAULT_END_DATE = moment(DEFAULT_START_DATE).utc().endOf('month').format()

export default {
    name: 'Store',
    components: {
        Tabs,
        UpdateStorePopup,
        AddGoodToStorePopup,
        SetPercentInStorePopup,
        StorePurchases,
        StoreGoods,
        StoreAbout,
        WorkWithClient,
        PreviousPage
    },
    data() {
        return {
            showGoodAddModal: false,
            showUpdateStoreModal: false,
            clientSearchString: '',
            showQrReader: false,
            showAddPurchaseModal: false,
            setPercentInStoreModal: false,
            category: {},
            activeTab: {},
            client: {},
            store: {},
        }
    },
    beforeRouteEnter(to, from, next) {
        const awaits = []
        awaits.push(store.dispatch('store/callGetStore', to.params.id))
        if (store.getters.allow('viewStoreAnalytics')) {
            store.dispatch('store/callGetProfitByStore', {
                storeId: to.params.id,
                dates: {startDate: DEFAULT_START_DATE, endDate: DEFAULT_END_DATE}
            })
        }
        Promise.all(awaits).then(([store, profit]) => {
            next(vm => {
                vm.store = store
            })
        })
    },
    computed: {
        ...mapGetters({
            goodsList: 'goods/goodsList',
            categoriesList: 'goods/categoriesList',
            purchasesList: 'client/purchasesList',
            allow: 'allow'
        }),

        ...mapGetters('city', ['getCountriesList', 'getCitiesList']),
        goodsOfStore() {
            return this.goodsList.filter(good => (this.store.goodIds || []).includes(good.id))
        },
        filteredGoodsList() {
            if (this.filterString) {
                return this.goodsOfStore.filter(good => good.name.RU.includes(this.filterString))
            } else {
                return this.goodsOfStore
            }
        },
        tabsList() {
            let tabs = [
                {
                    name: 'about',
                    label: this.$t('shop.about')
                },
                {
                    name: 'goods',
                    label: this.$t('shop.goods')
                },
            ]
            if (this.allow('viewWorkWithClient')) {
                tabs.unshift({
                    name: 'workWithClient',
                    label: this.$t('shop.workWithClient')
                })
            }
            if (this.allow('viewStorePurchases')) {
                tabs.push({
                    name: 'purchases',
                    label: this.$t('shop.purchases')
                })
            }
            return tabs
        },
        categoriesSelectOptions() {
            return [
                {label: 'Без категории', id: ''},
                ...this.categoriesList.map(cat => ({...cat, label: cat.name.RU || cat.id}))
            ]
        },
    },
    created() {
        if (this.tabsList.length) {
            this.activeTab = this.tabsList[0]
        }
        // this.setStoreData()
    },
    methods: {
        ...mapActions('store', ['callGetStore']),
        ...mapActions('client', ['callClientByCard', 'callGetPurchasesByClientId']),
        closeSetPercentInStoreModal() {
            this.setPercentInStoreModal = false
            this.setStoreData()
        },
        setStoreData() {
            this.callGetStore(this.$route.params.id).then(data => {
                this.store = data
            }).catch(error => {
                console.log(error)
            })
        },
        closeStoreUpdateModal() {
            this.showUpdateStoreModal = false
            this.setStoreData()
        },
        closeGoodAddModal() {
            this.showGoodAddModal = false
            this.setStoreData()
        },
        changeTabHandler(tab) {
            this.activeTab = tab
        },
        decodedQR(code) {
            // console.log(code)
            // проверяем что число, что положительное
            if (code && !isNaN(+code)) {
                this.clientSearchString = Math.abs(+code)
                this.callClientByCard(code).then(data => {
                    if (data.Id) {
                        this.client = data
                        this.callGetPurchasesByClientId(data.Id)
                    } else {
                        this.client = {}
                        this.$snotify.error('Ошибка получения клиента')
                    }
                }).catch(e => {
                    this.client = {}
                    console.log(e)
                })
            } else if (code && code.toString().length) {
                this.$snotify.warning('Номер карты должен состоять из цифр')
            }
        },
        updateStoreHandler() {
            this.showUpdateStoreModal = true
        },
        addGoodButtonHandler() {
            // console.log('addGoodButtonHandler')
            this.showGoodAddModal = true
        },
        changeCategory(category) {
            category.storeId = this.store.id
            category.percent = (this.store.percents.find(percent => percent.categoryId === category.id) || {}).percent || 0
            this.category = category
            this.setPercentInStoreModal = true
        },
    }
}
</script>

<style lang="stylus" scoped>

</style>
