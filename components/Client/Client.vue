<template>
    <div class="client-page">
        <PreviousPage :title="client.fullName" />
        <div class="container mt-4">
            <div class="client-page__tabs">
                <Tabs
                    :tabs-list="tabsList"
                    :selected-tab="activeTab"
                    @change="changeTabHandler"
                />
            </div>
            <div class="client-page__tabs-content mt-4">
                <transition
                    name="fade"
                    mode="out-in"
                >
                    <div v-if="activeTab.name === 'info'">
                        <div class="with-shadow mt-4 p-2 client-page__info">
                            <div class="d-flex">
                                <div class="w-30">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <img
                                                class="round"
                                                src="../../assets/images/client-photo.jpg"
                                                alt=""
                                            >
                                        </div>
                                        <div class="ml-2">
                                            <div>
                                                {{ client.fullName }}
                                                <img
                                                    src="@/assets/images/icons/iconfinder_edit-3_2561260.svg"
                                                    alt=""
                                                    class="ml-1 client-page__edit"
                                                    @click="editClientHandler"
                                                >
                                            </div>
                                            <div>{{ client.age }} лет</div>
                                            <div>
                                                Карта: <span class="client-card">
                                                    {{ splitNCharsToString(clientsCard.cardNumber) }}
                                                </span>
                                                <img
                                                    src="@/assets/images/icons/iconfinder_edit-3_2561260.svg"
                                                    alt=""
                                                    class="ml-1 client-page__edit"
                                                    @click="addCardToClientHandler"
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-70">
                                    <div><strong>Контактная информация</strong></div>
                                    <template v-if="client.contactInfo">
                                        <div
                                            v-for="(contact, $i) in client.contactInfo"
                                            :key="$i"
                                        >
                                            {{ contact.type.type }}: {{ contact.value }}
                                        </div>
                                    </template>
                                </div>
                            </div>
                            <div class="d-flex mt-2">
                                <div class="w-30">
                                    Последний выезд:
                                </div>
                                <div class="w-70">
                                    {{ $moment(lastVisit.checkInTime).utc().format('YYYY-MM-DD hh:mm') }}
                                </div>
                            </div>
                            <div class="d-flex mt-2">
                                <div class="w-30">
                                    Внешность клиента:
                                </div>
                                <div class="w-70">
                                    {{ ((lastVisit || {}).info || {}).Appearance || '' }}
                                </div>
                            </div>
                            <div class="d-flex mt-2">
                                <div class="w-30">
                                    Психологический портрет:
                                </div>
                                <div class="w-70">
                                    {{ ((lastVisit || {}).info || {}).PsychologicalPicture || '' }}
                                </div>
                            </div>
                            <div class="d-flex mt-2">
                                <div class="w-30">
                                    Ежемесячный доход:
                                </div>
                                <div class="w-70">
                                    {{ (((lastVisit || {}).info || {}).MonthlyIncome || {}).Amount || '' }} {{
                                        (((lastVisit || {}).info || {}).MonthlyIncome || {}).Currency || '' }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        v-if="activeTab.name === 'visits'"
                        key="visits"
                        class="client-page__tab-content"
                    >
                        <div>
                            <div class="mt-4">
                                <TravelsList
                                    :visits-list="displayVisits"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        v-if="activeTab.name === 'purchases'"
                        class="client-page__tab-content"
                    >
                        <ClientPurchases
                            :client="client"
                        />
                    </div>
                </transition>
            </div>
        </div>
        <AddCardToClient
            v-if="showAddPCardToClientModal"
            :client="client"
            :card="clientsCard.cardNumber"
            @close="showAddPCardToClientModal = false"
        />
        <EditClient
            v-if="showEditClientPopup"
            :client="client"
            @close="closeEditClientPopupHandler"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Tabs from '@/components/common/Tabs.vue'
import TravelsList from '@/components/common/TravelsList.vue'
import PreviousPage from '@/components/common/PreviousPage.vue'
import AddCardToClient from '@/components/Partners/Popups/AddCardToClient.vue'
import EditClient from '@/components/Partners/Popups/EditClient.vue'
import ClientPurchases from '@/components/Client/ClientPurchases.vue'
import splitNCharsToString from '@/utils/splitNCharsToString.js'
import sortByKey from '@/utils/sortByKey.js'

import store from '@/store'

export default {
    name: 'Store',
    components: {
        TravelsList,
        Tabs,
        PreviousPage,
        AddCardToClient,
        EditClient,
        ClientPurchases
    },
    data() {
        return {
            visit: {},
            visitFilterString: '',
            clientsFilterString: '',
            newCategoryName: {},
            filterString: '',
            clientSearchString: '',
            showQrReader: false,
            goodsFilter: '',
            showAddPCardToClientModal: false,
            tabsList: [
                {
                    name: 'info',
                    label: 'Информация'
                },
                {
                    name: 'visits',
                    label: 'Выезды'
                },
                {
                    name: 'purchases',
                    label: 'Покупки'
                }
            ],
            activeTab: {},
            showEditClientPopup: false,
            visitsList: []
        }
    },
    beforeRouteEnter(to, from, next) {
        Promise.all([
            store.dispatch('client/callGetClient', to.params.clientId),
            store.dispatch('client/callGetPurchasesByClientId', to.params.clientId),
            store.dispatch('visit/callVisitsByClient', to.params.clientId)
        ]).then(([, , visits]) => {
            next(vm => {
                vm.visitsList = visits
            })
        })
    },
    computed: {
        ...mapGetters({
            client: 'client/client',
            clientsCard: 'client/clientsCard',
            purchasesList: 'client/purchasesList',
            goodsList: 'goods/goodsList',
            categoriesList: 'goods/categoriesList',
        }),
        displayVisits() {
            return sortByKey(this.visitsList, 'checkInTime').map(visit => ({
                ...visit,
                clientsCard: this.clientsCard,
                client: this.client
            }))
        },
        lastVisit() {
            return this.displayVisits[0] || {}
        }
    },
    created() {
        if (this.tabsList.length) {
            this.activeTab = this.tabsList[0]
        }
    },
    methods: {
        ...mapActions('client', ['callGetClient', 'callGetPurchasesByClientId']),
        ...mapActions('visit', ['callVisitsByClient']),
        closeEditClientPopupHandler(client) {
            this.showEditClientPopup = false
            if (client) {
                this.callGetClient(this.$route.params.clientId)
            }
        },
        changeTabHandler(tab) {
            this.activeTab = tab
        },
        editClientHandler() {
            this.showEditClientPopup = true
        },
        addCardToClientHandler() {
            this.showAddPCardToClientModal = true
        },
        getGoodById(id) {
            return this.goodsList.find(good => good.id === id) || {}
        },
        splitNCharsToString(card) {
            return card ? splitNCharsToString(card.toString()) : ''
        },
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"
    .client-page
        display block

        .client-page__edit
            cursor pointer
</style>
