<template>
    <div class="visit-page">
        <PreviousPage
            :title="`Выезд ${client.fullName || ''} ${visitCheckInDate}-${visitCheckOutDate}`"
            :show-edit="true"
            :prev="from"
            @edit="editVisitHandler"
        />
        <div class="container mt-4">
            <div class="visit-page__tabs">
                <Tabs
                    :tabs-list="tabsList"
                    :selected-tab="activeTab"
                    @change="changeTabHandler"
                />
            </div>
            <div class="visit-page__tabs-content mt-4">
                <transition
                    name="fade"
                    mode="out-in"
                >
                    <div v-if="(activeTab || {}).name === 'info'">
                        <div class="with-shadow d-flex justify-content-between p-2">
                            <div class="d-flex">
                                <div>
                                    <div>{{ visitCheckInDate }}</div>
                                    <div>{{ visitCheckInTime }}</div>
                                </div>
                                <div class="mx-1">
                                    -
                                </div>
                                <div>
                                    <div>{{ visitCheckOutDate }}</div>
                                    <div>{{ visitCheckOutTime }}</div>
                                </div>
                            </div>
                            <div
                                v-if="tourAgency && tourAgency.id"
                                class="ml-4"
                            >
                                <div>Турагентство:</div>
                                <div>
                                    <v-popover>
                                        <div class="tooltip-link">
                                            {{ (tourAgency || {}).name || '' }}
                                        </div>
                                        <template slot="popover">
                                            <a
                                                v-close-popover
                                                class="tooltip-close"
                                            >
                                                <img
                                                    src="@/assets/images/icons/close.svg"
                                                    alt=""
                                                >
                                            </a>
                                            <div>
                                                <p><strong>Название:</strong> {{ (tourAgency || {}).name || '' }}</p>
                                                <p>
                                                    <strong>Страна:</strong> {{ (tourAgencyCountry || {}).name || '' }}
                                                </p>
                                                <p><strong>Город:</strong> {{ (tourAgencyCity || {}).name || '' }}</p>
                                                <template v-if="tourAgency.contactInfo">
                                                    <p
                                                        v-for="(contact, $i) in tourAgency.contactInfo"
                                                        :key="$i"
                                                    >
                                                        <strong>{{ contact.type.type }}:</strong> {{ contact.value }}
                                                    </p>
                                                </template>
                                                <p><strong>Категории:</strong></p>
                                                <div>
                                                    <p
                                                        v-for="cat in ((tourAgency || {}).percents || [])"
                                                        :key="cat.id"
                                                    >
                                                        {{ getCategoryNameById(cat.categoryId) }}
                                                    </p>
                                                </div>
                                            </div>
                                        </template>
                                    </v-popover>
                                </div>
                            </div>
                            <div class="ml-4">
                                <div>Номер рейса</div>
                                <div>
                                    {{ ((visit || {}).info || {}).FlightNumber || '' }} {{ (airline || {}).name ?
                                        `(${airline.name})` : '' }}
                                </div>
                            </div>
                            <div class="ml-4">
                                <div>Отель</div>
                                <div>
                                    <v-popover>
                                        <div class="tooltip-link">
                                            {{ (hotel || {}).name || '' }}
                                        </div>
                                        <template slot="popover">
                                            <a
                                                v-close-popover
                                                class="tooltip-close"
                                            >
                                                <img
                                                    src="@/assets/images/icons/close.svg"
                                                    alt=""
                                                >
                                            </a>
                                            <div>
                                                <p><strong>Название:</strong> {{ (hotel || {}).name || '' }}</p>
                                                <p><strong>Страна:</strong> {{ (hotelCountry || {}).name || '' }}</p>
                                                <p><strong>Город:</strong> {{ (hotelCity || {}).name || '' }}</p>
                                                <template v-if="hotel.contactInfo">
                                                    <p
                                                        v-for="(contact, $i) in hotel.contactInfo"
                                                        :key="$i"
                                                    >
                                                        <strong>{{ contact.type.type }}:</strong> {{ contact.value }}
                                                    </p>
                                                </template>
                                            </div>
                                        </template>
                                    </v-popover>
                                </div>
                            </div>
                            <div class="ml-4">
                                <div>Количество туристов:</div>
                                <div>
                                    <span>взрослых: {{ ((visit || {}).info || {}).AmountOfAdults || 0 }}, детей: {{ ((visit || {}).info || {}).AmountOfChildren || 0 }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="with-shadow mt-2 p-2">
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
                                            <div>{{ client.fullName }}</div>
                                            <div>{{ client.age }} лет</div>
                                            <div v-if="clientsCard && clientsCard.cardNumber">
                                                Карта: <span class="client-card">
                                                    {{ splitNCharsToString(clientsCard.cardNumber) }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-70 d-flex">
                                    <div>
                                        <div>Контактная информация</div>
                                        <template v-if="client.contactInfo">
                                            <div
                                                v-for="(contact, $i) in client.contactInfo"
                                                :key="$i"
                                            >
                                                {{ contact.type.type }}: {{ contact.value }}
                                            </div>
                                        </template>
                                    </div>
                                    <div class="ml-4">
                                        <div>Местный контакт</div>
                                        <div>{{ ((visit || {}).info || {}).MethodOfCommunication || '' }}</div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="d-flex mt-2">
                                <div class="w-30">
                                    Последний выезд:
                                </div>
                                <div class="w-70">
                                    {{ ((visit || {}).info || {}).LastTimeBeenHere || '' }}
                                </div>
                            </div>
                            <div class="d-flex mt-2">
                                <div class="w-30">
                                    Ранее посещенные страны:
                                </div>
                                <div class="w-70">
                                    {{ ((visit || {}).info || {}).LastVisitedCountries || '' }}
                                </div>
                            </div>
                            <div class="d-flex mt-2">
                                <div class="w-30">
                                    Внешность клиента:
                                </div>
                                <div class="w-70">
                                    {{ ((visit || {}).info || {}).Appearance || '' }}
                                </div>
                            </div>
                            <div class="d-flex mt-2">
                                <div class="w-30">
                                    Психологический портрет:
                                </div>
                                <div class="w-70">
                                    {{ ((visit || {}).info || {}).PsychologicalPicture || '' }}
                                </div>
                            </div>
                            <div class="d-flex mt-2">
                                <div class="w-30">
                                    Ежемесячный доход:
                                </div>
                                <div class="w-70">
                                    {{ (((visit || {}).info || {}).MonthlyIncome || {}).Amount || '' }} {{ (((visit ||
                                        {}).info || {}).MonthlyIncome || {}).Currency || '' }}
                                </div>
                            </div>
                            <div class="d-flex mt-2">
                                <div class="w-30">
                                    Партнеры по туру:
                                </div>
                                <div class="w-70">
                                    {{ tourPartners || '' }}
                                </div>
                            </div>
                            <div class="d-flex mt-2">
                                <div class="w-30">
                                    Комментарий
                                </div>
                                <div class="w-70">
                                    нет
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        v-if="(activeTab || {}).name === 'targets'"
                        key="targets"
                        class="visit-page__tab-content"
                    >
                        <div class="d-flex align-items-center justify-content-between">
                            <InputSearch
                                v-model="objectivesFilterString"
                                placeholder="Введите название товара или категории"
                            />
                            <ButtonAdd
                                v-if="addAndDeleteVisitObjectives"
                                text="Добавить цель"
                                @click="addObjectiveButtonHandler"
                            />
                        </div>
                        <VisitObjectives
                            v-if="visit && visit.objectives && visit.objectives.length"
                            :objectives="visit.objectives"
                            :filter-string="objectivesFilterString"
                            :get-visit-data="getVisitData"
                            :add-and-delete-visit-objectives="addAndDeleteVisitObjectives"
                            @callVisit="getVisitData"
                        />
                    </div>
                    <div
                        v-if="(activeTab || {}).name === 'trips' && allow('viewVisitTripsAndPurchases')"
                        key="trips"
                        class="visit-page__tab-content"
                    >
                        <div class="d-flex align-items-center justify-content-end">
                            <ButtonAdd
                                text="Добавить поездку"
                                @click="addTripButtonHandler"
                            />
                        </div>
                        <VisitTrips
                            :visit="visit"
                            :hotel="hotel"
                        />
                    </div>
                    <VisitPurchases
                        v-if="(activeTab || {}).name === 'purchases' && allow('viewVisitTripsAndPurchases') && visit && client"
                        :visit="visit"
                        :client="client"
                    />
                </transition>
            </div>
        </div>
        <UpdateVisitInfoPopup
            v-if="showVisitEditModal"
            :visit="visit"
            @close="closeVisitEditModal"
        />
        <AddVisitObjectivePopup
            v-if="showObjectiveAddModal"
            :visit="visit"
            @close="closeObjectiveAddHandler"
            @callVisit="getVisitData"
        />
        <AddVisitTripPopup
            v-if="showTripAddModal"
            :visit="visit"
            @close="closeAddVisitTripHandler"
        />
        <QrCodeStream
            v-if="showQrReader"
            @close="showQrReader = false"
            @decode="decodedQR"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Tabs from '@/components/common/Tabs.vue'
import QrCodeStream from '@/components/common/QrCodeStream.vue'
import PreviousPage from '@/components/common/PreviousPage.vue'
import VisitObjectives from '@/components/Visit/VisitObjectives.vue'
import AddVisitObjectivePopup from '@/components/Visit/AddVisitObjectivePopup.vue'
import AddVisitTripPopup from '@/components/Visit/AddVisitTripPopup.vue'
import VisitTrips from '@/components/Visit/VisitTrips.vue'
import UpdateVisitInfoPopup from '@/components/Visit/UpdateVisitInfoPopup.vue'
import VisitPurchases from '@/components/Visit/VisitPurchases.vue'
import splitNCharsToString from '@/utils/splitNCharsToString.js'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import store from '@/store'
import InputSearch from '@/components/common/inputs/InputSearch.vue'
import snotify from 'vue-snotify'

export default {
    name: 'Store',
    components: {
        Tabs,
        QrCodeStream,
        PreviousPage,
        VisitObjectives,
        AddVisitObjectivePopup,
        VisitTrips,
        UpdateVisitInfoPopup,
        AddVisitTripPopup,
        VisitPurchases,
        ButtonAdd,
        InputSearch
    },
    beforeRouteEnter(to, from, next) {
        let visit = null
        Promise.all([
            store.dispatch('tourAgency/callGetTourAgencies', ({context: store.getters.currentUserRole.context})),
            store.dispatch('tourPartner/callGetTourPartnersList'),
            store.dispatch('store/callGetStores', store.getters.currentUserRole.context),
            store.dispatch('visit/callGetVisitById', to.params.visitId).then((v) => {
                visit = v
                if (visit && visit.clientId) {
                    store.dispatch('visit/callGetPurchasesByClientId', visit.clientId)
                    return store.dispatch('client/callGetClient', visit.clientId)
                }
                return null
            })
        ]).then(([, , , client]) => {
            next((vm) => {
                vm.setData({client, visit})
                vm.from = from.path === '/' ? '/travels' : from.path
            })
        }).catch(() => {
            snotify.error('Ошибка выполнения запроса')
            next(false)
        })
    },
    data() {
        return {
            clientId: '',
            showVisitEditModal: false,
            showObjectiveAddModal: false,
            showQrReader: false,
            showTripAddModal: false,
            activeTab: {},
            objectivesFilterString: '',
            visit: {},
            client: {},
            from: '/',
        }
    },
    computed: {
        ...mapGetters(['allow', 'getCategoryNameById', 'currentUserRole']),
        ...mapGetters('goods', ['goodsList', 'getCategoryNameById']),
        ...mapGetters('tourAgency', ['tourAgenciesList', 'getTourAgencyById']),
        ...mapGetters('client', ['getClientsList', 'clientsCard']),
        ...mapGetters('city', ['getCitiesList', 'getCountriesList']),
        ...mapGetters('hotel', ['hotelsList']),
        ...mapGetters('airline', ['getAirlinesList']),
        ...mapGetters('tourPartner', ['getTourPartnersList']),
        visitCheckInDate() {
            if (this.visit && this.visit.checkInTime) {
                return this.$moment(this.visit.checkInTime).format('DD.MM.YYYY')
            }
            return ''
        },
        visitCheckInTime() {
            if (this.visit && this.visit.checkInTime) {
                return this.$moment(this.visit.checkInTime).format('hh:mm')
            }
            return ''
        },
        visitCheckOutDate() {
            if (this.visit && this.visit.checkOutTime) {
                return this.$moment(this.visit.checkOutTime).format('DD.MM.YYYY')
            }
            return ''
        },
        visitCheckOutTime() {
            if (this.visit && this.visit.checkOutTime) {
                return this.$moment(this.visit.checkOutTime).format('hh:mm')
            }
            return ''
        },
        tourAgencyId() {
            if (this.visit && this.visit.referer) {
                return this.visit.referer.TourAgencyId
            }
            return ''
        },
        tourAgency() {
            if (this.tourAgencyId && this.tourAgenciesList) {
                return this.getTourAgencyById(this.tourAgencyId)
            }
            return {}
        },
        tabsList() {
            let tabs = [
                {
                    name: 'info',
                    label: 'Информация'
                },
                {
                    name: 'targets',
                    label: 'Цели'
                }
            ]
            if (this.allow('viewVisitTripsAndPurchases')) {
                tabs.push({
                    name: 'trips',
                    label: 'Поездки'
                })
                tabs.push({
                    name: 'purchases',
                    label: 'Покупки'
                })
            }
            return tabs
        },
        hotel() {
            if (this.hotelsList) {
                return this.hotelsList.find(hotel => hotel.id === this.visit.hotelId) || {}
            }
            return {}
        },
        tourAgencyCity() {
            return this.getCitiesList.find(city => city.id === (this.tourAgency || {}).cityId) || {}
        },
        hotelCity() {
            return this.getCitiesList.find(city => city.id === (this.hotel || {}).cityId) || {}
        },
        tourAgencyCountry() {
            return this.getCountriesList.find(country => country.id === (this.tourAgency || {}).countryId) || {}
        },
        hotelCountry() {
            return this.getCountriesList.find(country => country.id === (this.hotel || {}).countryId) || {}
        },
        addAndDeleteVisitObjectives() {
            return this.allow('addAndDeleteVisitObjectives') && ((this.visit || {}).visitStatus || '').indexOf('completed') !== 0
        },
        airline() {
            return this.getAirlinesList.find(airline => airline.id === (this.visit.info || {}).AirlineId) || {}
        },
        tourPartners() {
            return (this.visit.info || {}).TourPartnerIds ? this.visit.info.TourPartnerIds.map(partnerId => {
                return (this.getTourPartnersList.find(tourPartner => tourPartner.id === partnerId) || {}).name || ''
            }).toString() : ''
        }
    },
    watch: {
        clientId: function(newVal) {
            this.callGetPurchasesByClientId(newVal)
        },
        '$route'(to) {
            if (this.tabsList && this.tabsList.length) {
                this.activeTab = this.tabsList.find(tab => to.hash.indexOf(tab.name) === 1)
            }
        }
    },
    created() {
        if (this.tabsList.length && !this.$route.hash) {
            this.activeTab = this.tabsList[0]
        } else if (this.tabsList.length) {
            this.activeTab = this.tabsList.find(tab => this.$route.hash.indexOf(tab.name) === 1)
        }
    },
    methods: {
        ...mapActions('client', ['callGetClient']),
        ...mapActions('visit', ['callGetVisitById', 'callGetPurchasesByClientId']),
        ...mapActions('tourAgency', ['callGetTourAgencies']),
        ...mapActions('tourPartner', ['callGetTourPartnersList']),
        closeVisitEditModal(update) {
            this.showVisitEditModal = false
            if (update) {
                this.getVisitData()
            }
        },
        closeObjectiveAddHandler(update) {
            this.showObjectiveAddModal = false
            update && this.getVisitData()
        },
        closeAddVisitTripHandler(update) {
            this.showTripAddModal = false
            update && this.getVisitData()
        },
        getVisitData() {
            this.callGetVisitById(this.$route.params.visitId).then(data => {
                if (data && data.clientId) {
                    this.visit = data
                    this.callGetClient(data.clientId).then(data => {
                        this.client = data || {}
                    }).catch(error => {
                        console.log(error)
                        this.$snotify.error('Ошибка выполнения запроса')
                    })
                }
            }).catch(error => {
                console.log(error)
                this.$snotify.error('Ошибка выполнения запроса')
            })
        },
        setData(payload) {
            this.visit = payload.visit
            this.client = payload.client || {}
        },
        changeTabHandler(tab) {
            this.$router.push(`/visit/${this.$route.params.visitId}#${tab.name}`)
        },
        addObjectiveButtonHandler() {
            this.showObjectiveAddModal = true
        },
        addTripButtonHandler() {
            if (((this.visit || {}).objectives || []).length) {
                this.showTripAddModal = true
            } else {
                this.$snotify.warning('Необходимо добавить цели к выезду')
            }
        },
        editVisitHandler() {
            // console.log(this.visit)
            this.showVisitEditModal = true
        },
        getHotelbyId(hotelId) {
            if (this.hotelsList) {
                return this.hotelsList.find(h => h.id === hotelId) || {}
            }
            return {}
        },
        splitNCharsToString(card) {
            return card ? splitNCharsToString(card.toString()) : ''
        }
    },
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"
    .visit-page {
        display block
    }
</style>
