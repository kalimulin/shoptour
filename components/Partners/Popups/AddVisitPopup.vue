<template>
    <Modal
        :wide="true"
        title="Добавить выезд"
        class="add-visit"
        @close="$emit('close')"
        @submit="addVisitHandler"
    >
        <div slot="body">
            <div class="mt-2">
                <div class="form-group">
                    <Label>
                        <template slot="label">
                            Выберите клиента *
                        </template>
                        <template slot="popoverText">
                            <pre>{{ $t('help.chooseClient') }}</pre>
                        </template>
                    </Label>
                    <Select
                        v-model="visit.client"
                        :options="filteredClientsList"
                        label="fullName"
                        @input="changeClientHandler"
                    />
                </div>
            </div>
            <div
                v-if="!!(((visit || {}).client || {}).id)"
                class="mt-2"
            >
                <div>
                    <div>Возраст: {{ visit.client.age }}</div>
                    <div>Пол: {{ visit.client.gender }}</div>
                    <template v-if="visit.client.contactInfo">
                        <div
                            v-for="(contact, $i) in visit.client.contactInfo"
                            :key="$i"
                        >
                            {{ contact.type.type }}: {{ contact.value }}
                        </div>
                    </template>
                </div>
            </div>
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-50">
                        <Label>
                            <template slot="label">
                                Выберите город *
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.chooseCity') }}</pre>
                            </template>
                        </Label>
                        <Select
                            v-model="city"
                            :options="getCitiesList"
                            @input="changeCityHandler"
                        />
                    </div>
                    <div class="form-group w-50">
                        <Label>
                            <template slot="label">
                                Выберите отель *
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.chooseHotel') }}</pre>
                            </template>
                        </Label>
                        <Select
                            v-model="hotel"
                            :options="hotelSelectOptions"
                        />
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-50">
                        <Label>
                            <template slot="label">
                                Время приезда *
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.chooseArrivalTime') }}</pre>
                            </template>
                        </Label>
                        <datetime
                            v-model="visit.checkInTime"
                            type="datetime"
                            format="yyyy-MM-dd HH:mm:ss"
                            zone="UTC"
                        />
                    </div>
                    <div class="form-group w-50">
                        <Label>
                            <template slot="label">
                                Время отъезда *
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.chooseDepartmentTime') }}</pre>
                            </template>
                        </Label>
                        <datetime
                            v-model="visit.checkOutTime"
                            type="datetime"
                            format="yyyy-MM-dd HH:mm:ss"
                            zone="UTC"
                            :min-datetime="(visit.checkInTime || '').toString()"
                        />
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-33">
                        <Label>
                            <template slot="label">
                                Количество взрослых
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.adultsAmount') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="visit.amountOfAdults"
                            type="number"
                            pattern="[0-9]*"
                            min="1"
                        >
                    </div>
                    <div class="form-group w-33">
                        <Label>
                            <template slot="label">
                                Количество детей
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.kidsAmount') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="visit.amountOfChildren"
                            type="number"
                            pattern="[0-9]*"
                            min="0"
                        >
                    </div>
                    <div class="form-group w-33">
                        <Label>
                            <template slot="label">
                                Количество младенцев
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.babiesAmount') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="visit.amountOfInfants"
                            type="number"
                            pattern="[0-9]*"
                            min="0"
                        >
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <div class="form-group">
                    <Label>
                        <template slot="label">
                            Партнёры по туру
                        </template>
                        <template slot="popoverText">
                            <pre>{{ $t('help.tourPartners') }}</pre>
                        </template>
                    </Label>
                    <Select
                        v-model="partners"
                        :options="getTourPartnersList"
                        multiple
                        @input="changeTourPartnerHandler"
                    />
                </div>
            </div>
            <div class="mt-2">
                <div class="form-group">
                    <Label>
                        <template slot="label">
                            Последний выезд
                        </template>
                        <template slot="popoverText">
                            <pre>{{ $t('help.lastVisit') }}</pre>
                        </template>
                    </Label>
                    <input
                        v-model="visit.lastTimeBeenHere"
                        type="text"
                    >
                </div>
            </div>
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-50">
                        <Label>
                            <template slot="label">
                                Ранее посещенные страны
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.visitedCountries') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="visit.lastVisitedCountries"
                            type="text"
                        >
                    </div>
                    <div class="form-group w-50">
                        <Label>
                            <template slot="label">
                                Ежемесячный доход
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.monthlyIncome') }}</pre>
                            </template>
                        </Label>
                        <div class="d-flex select-currency">
                            <Cost v-model="monthlyIncome" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-70">
                        <Label>
                            <template slot="label">
                                Выберите авиакомпанию
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.chooseAlialine') }}</pre>
                            </template>
                        </Label>
                        <Select
                            v-model="airline"
                            :options="avialineSelectOptions"
                        />
                    </div>
                    <div class="form-group w-30">
                        <Label>
                            <template slot="label">
                                Номер рейса
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.flightNumber') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="visit.flightNumber"
                            type="text"
                        >
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-100">
                        <Label>
                            <template slot="label">
                                Местный контакт
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.methodOfCommunication') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="visit.methodOfCommunication"
                            type="text"
                        >
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-100">
                        <Label>
                            <template slot="label">
                                Психологический портрет:
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.psychologicalPicture') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="visit.psychologicalPicture"
                            type="text"
                        >
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-100">
                        <Label>
                            <template slot="label">
                                Внешность клиента*:
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.clientsAppearance') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="visit.appearance"
                            type="text"
                        >
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <Label>
                    <template slot="label">
                        Цели визита
                    </template>
                    <template slot="popoverText">
                        <pre>{{ $t('help.chooseGoods') }}</pre>
                    </template>
                </Label>
                <Select
                    v-model="objectives"
                    :options="goodsSelectOptions"
                    placeholder="Выберите товары"
                    :multiple="true"
                    label="label"
                />
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Modal from '@/components/common/Modal.vue'
import Select from '@/components/common/Select'
import Cost from '@/components/common/Cost.vue'
import sortByKey from '@/utils/sortByKey'
import removeDuplicates from '@/utils/removeDuplicates'
import Label from '@/components/common/LabelWithPopover.vue'

export default {
    name: "AddVisitPopup",
    components: {
        Modal,
        Select,
        Cost,
        Label
    },
    props: {
        tourAgency: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            visit: {},
            city: {},
            hotel: {},
            objectives: [],
            monthlyIncome: {},
            partners: [],
            airline: {}
        }
    },
    computed: {
        ...mapGetters('city', ['getCitiesList', 'getCountriesList']),
        ...mapGetters('hotel', ['hotelsList']),
        ...mapGetters('goods', ['goodsList']),
        ...mapGetters('client', ['getClientsList']),
        ...mapGetters('tourPartner', ['getTourPartnersList']),
        ...mapGetters('airline', ['getAirlinesList']),
        avialineSelectOptions() {
            return this.getAirlinesList.map(airline => ({...airline, label: airline.name || airline.id}))
        },
        filteredClientsList() {
            return this.getClientsList.filter(item => {
                if (item.referer && item.referer.tourAgencyId === this.$route.params.id) {
                    return true
                }
                return false
            })
        },
        hotelSelectOptions() {
            return [
                ...this.hotelsList.filter(item => item.cityId === this.city.id)
            ]
        },
        goodsSelectOptions() {
            return this.goodsList.map(good => ({...good, label: good.name.RU || good.id})).filter(good => {
                return !this.objectives.some(item => ((item || {}).Objective || {}).GoodId === good.id)
            })
        },
    },
    created() {
        this.visit = {
            client: {},
            tourAgency: this.tourAgency,
            amountOfAdults: 1,
            amountOfChildren: 0,
            amountOfInfants: 0
        }
        this.callGetTourPartnersList()
    },
    methods: {
        ...mapActions('visit', ['callVisitsByClient', 'callAddVisitObjective', 'callGetVisitsByTourAgency', 'callAddVisit']),
        ...mapActions('tourPartner', ['callGetTourPartnersList']),
        addVisitHandler() {
            if (!((this.monthlyIncome || {}).amount)) {
                this.monthlyIncome.currency = {}
            }
            if (!(((this.visit || {}).client || {}).id)) {
                this.$snotify.warning('Выберите клиента')
            } else if (!((this.city || {}).id)) {
                this.$snotify.warning('Выберите город')
            } else if (!((this.hotel || {}).id)) {
                this.$snotify.warning('Выберите отель')
            } else if (!((this.visit || {}).checkInTime)) {
                this.$snotify.warning('Выберите время приезда')
            } else if (!((this.visit || {}).checkOutTime)) {
                this.$snotify.warning('Выберите время отъезда')
            } else if (+((this.monthlyIncome || {}).amount || 0) && !(((this.monthlyIncome || {}).currency || {}).value)) {
                this.$snotify.warning('Выберите валюту дохода')
            } else if (!((this.visit || {}).flightNumber)) {
                this.$snotify.warning('Укажите номер рейса')
            } else if (!((this.visit || {}).appearance)) {
                this.$snotify.warning('Опишите внешность клиента')
            } else if (((this.visit || {}).amountOfAdults) < 1) {
                this.$snotify.warning('В выезде должен быть хотя-бы один взрослый')
            } else {
                this.visit = {
                    ...this.visit,
                    city: this.city,
                    hotel: this.hotel,
                    airline: this.airline,
                    monthlyIncome: {
                        amount: (this.monthlyIncome || {}).amount || 0,
                        currency: ((this.monthlyIncome || {}).currency || {}).value || ''
                    }
                }
                this.callAddVisit(this.visit).then(data => {
                    if (data.Id) {
                        // поскольку на момент написания этих строк не существует метода для добавления нескольких целей,
                        // они добавляются по одной методом перебора массива с целями выезда
                        // todo: Нужно сделать на бэкенде метод для добавления нескольких целей
                        this.objectives.forEach(obj => {
                            this.callAddVisitObjective({visitId: data.Id, goodId: obj.id}).then(data => {
                                // console.log(data)
                            }).catch(error => {
                                console.log(error)
                            })
                        })
                        this.$emit('close')
                        this.visit = {}
                        this.callGetVisitsByTourAgency(this.tourAgency.id)
                        this.$snotify.success('Выезд добавлен')
                    } else {
                        this.$snotify.error('Ошибка добавления выезда')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        changeCityHandler() {
            this.hotel = {}
        },
        changeTourPartnerHandler() {
            const selectedPartner = this.partners.map(item => item.id)
            this.visit.tourPartners = removeDuplicates(selectedPartner).filter(item => !!(item))
        },
        changeClientHandler(client) {
            this.callVisitsByClient(client.id).then(data => {
                const visits = sortByKey(data, 'checkInTime', 'desc')
                const lastVisit = visits && visits.length ? visits[0] : null
                const visitedCountries = visits.map(visit => (this.getCountryById(visit.countryId) || {}).name || '')
                const visitedCountriesString = removeDuplicates(visitedCountries).filter(item => !!(item)).toString()
                this.visit = {
                    ...this.visit,
                    lastTimeBeenHere: `${this.$moment(lastVisit.checkInTime).utc().format('DD.MM.YYYY')}, ${(this.getCountryById(lastVisit.countryId) || {}).name || ''}, ${(this.getCityById(lastVisit.cityId) || {}).name || ''}, ${(this.getHotelbyId(lastVisit.hotelId) || {}).name || ''}`,
                    lastVisitedCountries: visitedCountriesString
                }
            })
        },
        getCityById(id) {
            if (this.getCitiesList) {
                return this.getCitiesList.find(item => item.id === id) || null
            }
            return null
        },
        getCountryById(id) {
            if (this.getCountriesList) {
                return this.getCountriesList.find(item => item.id === id) || null
            }
            return null
        },
        getHotelbyId(id) {
            if (this.hotelsList) {
                return this.hotelsList.find(h => h.id === id) || null
            }
            return null
        },
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"
    .add-visit
        input[type=text], input[type=email], input[type=number], .vdatetime
            height 48px
            border 1px solid #d8d8d8
            width 100%

        .row
            display flex
            margin-left indent(-1)
            margin-right indent(-1)

            .form-group
                padding-left indent(1)
                padding-right indent(1)

            .vdatetime-input
                border-top 0
                border-left 0
                border-right 0
                width 100%
                height 48px
        .select-currency
            .dropdown-toggle
                width 125px
                height 48px
</style>
