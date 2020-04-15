<template>
    <div class="edit-visit-trip">
        <PreviousPage
            :title="`Поездка на ${getDateString(trip.PlannedTime)}`"
            :prev="`/visit/${$route.params.visitId}#trips`"
        />
        <div class="container mt-3">
            <div
                v-if="false"
                class="mt-2"
            >
                <Label>
                    <template slot="label">
                        Выберите товары
                    </template>
                    <template slot="popoverText">
                        {{ $t('help.chooseVisitGoods') }}
                    </template>
                </Label>
                <Select
                    v-model="visitObjectives"
                    multiple
                    label="label"
                    :options="visit.objectives && visit.objectives.map(obj => ({...obj, label: ((getGoodById(obj.Objective.GoodId) || {}).name || {}).RU}))"
                    placeholder="Выберите товары"
                />
            </div>
            <h2>Изменить время и место отправления</h2>
            <div class="row">
                <div class="form-group w-30">
                    <div class="mt-2">
                        <Label>
                            <template slot="label">
                                время выезда
                            </template>
                            <template slot="popoverText">
                                {{ $t('help.chooseTripTime') }}
                            </template>
                        </Label>
                        <datetime
                            v-model="plannedTime"
                            type="datetime"
                            format="yyyy-MM-dd HH:mm"
                            zone="UTC"
                            :min-datetime="(visit.CheckInTime || visit.checkInTime || '').toString()"
                            :max-datetime="(tripStores && tripStores.length && tripStores[0].Date).toString()"
                        />
                    </div>
                </div>
                <div class="form-group w-70">
                    <div class="mt-2">
                        <Label>
                            <template slot="label">
                                место выезда
                            </template>
                            <template slot="popoverText">
                                {{ $t('help.chooseTripDepartment') }}
                            </template>
                        </Label>
                        <div class="d-flex align-items-center">
                            <input
                                v-model="plannedPlace"
                                type="text"
                            >
                            <button
                                class="ml-2 button-blue"
                                @click="updatePlaceAndTime"
                            >
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mt-3">
            <h2>Изменить магазины для посещения</h2>
            <div class="row stores-list-container">
                <div class="form-group w-70">
                    <div class="mt-2">
                        <Label>
                            <template slot="label">
                                Магазины
                            </template>
                            <template slot="popoverText">
                                {{ $t('help.visitStoresList') }}
                            </template>
                        </Label>
                        <div class="stores-list">
                            <template v-if="tripStores && tripStores.length">
                                <div
                                    v-for="item in tripStores"
                                    :key="item.id"
                                    class="row mb-1"
                                >
                                    <div class="form-group w-60">
                                        {{ item.Name || item.StoreId }}
                                    </div>
                                    <div class="form-group w-30">
                                        {{ getDateTimeString(item.Date) }}
                                    </div>
                                    <div class="form-group w-10 text-center">
                                        <img
                                            class="img-blue m-auto"
                                            src="@/assets/images/icons/trash-blue.svg"
                                            alt=""
                                            @click="deleteTripStore(item)"
                                        >
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <div>Магазины не добавлены</div>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="form-group w-30">
                    <div class="mt-2">
                        <Label>
                            <template slot="label">
                                Выберите магазин
                            </template>
                            <template slot="popoverText">
                                {{ $t('help.chooseVisitStore') }}
                            </template>
                        </Label>
                        <Select
                            v-model="store"
                            :options="storeSelectOptions"
                        />
                    </div>
                    <div class="mt-1">
                        <Label>
                            <template slot="label">
                                Время посещения
                            </template>
                            <template slot="popoverText">
                                {{ $t('help.chooseVisitTime') }}
                            </template>
                        </Label>
                        <datetime
                            v-model="date"
                            type="datetime"
                            format="yyyy-MM-dd HH:mm"
                            zone="UTC"
                            :min-datetime="trip.PlannedTime"
                            :max-datetime="(visit.CheckOutTime || visit.checkOutTime || '').toString()"
                        />
                    </div>
                    <div>
                        <div
                            v-tooltip="`Добавить магазин в список`"
                            class="add-row-button"
                            @click="addTripStore"
                        >
                            Ок
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import PreviousPage from '@/components/common/PreviousPage.vue'
import Select from '@/components/common/Select'
import Label from '@/components/common/LabelWithPopover.vue'


export default {
    name: "EditVisitTrip",
    components: {
        PreviousPage,
        Select,
        Label
    },
    data() {
        return {
            visit: {},
            trip: {},
            visitObjectives: [],
            tripStores: [],
            store: {},
            date: '',
            plannedTime: '',
            plannedPlace: '',
        }
    },
    computed: {
        ...mapGetters({
            getGoodById: 'goods/getGoodById',
            getStoreById: 'store/getStoreById',
            storesList: 'store/storesList'
        }),
        storeSelectOptions() {
            return this.storesList.filter(item => !this.tripStores.find(st => st.StoreId === item.id))
        },
    },
    mounted() {
        this.getVisitData()
    },
    methods: {
        ...mapActions('visit', ['callGetVisitById', 'callUpdatePlaceAndTimeInTrip', 'callAddStoreToTrip', 'callDeleteStoreFromTrip']),
        getVisitData() {
            this.callGetVisitById(this.$route.params.visitId).then(data => {
                if (data) {
                    this.visit = data
                    this.trip = this.visit.trips.find(trip => trip.Id === this.$route.params.tripId)
                    if (this.trip) {
                        this.plannedTime = this.trip.PlannedTime
                        this.plannedPlace = this.trip.PlannedPlace
                        this.tripStores = this.trip.Stores.map(item => {
                            const store = this.getStoreById(item.StoreId)
                            return {
                                ...item,
                                Name: store && store.name ? store.name : ''
                            }
                        }).sort((a,b) => {
                            if (a.Date > b.Date) {
                                return 1
                            }
                            if (a.Date < b.Date) {
                                return -1
                            }
                            return 0
                        })
                    }
                } else {
                    this.$snotify.error('Ошибка выполнения запроса')
                }
            }).catch(error => {
                console.log(error)
                this.$snotify.error('Ошибка выполнения запроса')
            })
        },
        getDateString(datetime) {
            if (this.$moment(datetime).isValid()) {
                return this.$moment(datetime).utc().format('DD.MM.YYYY')
            }
            return ''
        },
        addTripStore() {
            if (this.store && this.store.id && this.date) {
                this.callAddStoreToTrip({tripId: this.trip.Id, storeId: this.store.id, date: this.date}).then(data => {
                    if (data.Id) {
                        this.store = {}
                        this.visit = data
                        this.trip = this.visit.Trips.find(trip => trip.Id === this.$route.params.tripId)
                        if (this.trip) {
                            this.plannedTime = this.trip.PlannedTime
                            this.plannedPlace = this.trip.PlannedPlace
                        }
                        this.tripStores = this.trip.Stores.map(item => {
                            const store = this.getStoreById(item.StoreId)
                            // console.log(store)
                            return {
                                ...item,
                                Name: store && store.name ? store.name : ''
                            }
                        }).sort((a,b) => {
                            if (a.Date > b.Date) {
                                return 1
                            }
                            if (a.Date < b.Date) {
                                return -1
                            }
                            return 0
                        })
                        this.$snotify.success('Данные сохранены')
                    } else {
                        this.$snotify.error('Ошибка выполнения запроса')
                    }
                    // this.tripStores.push({Name: this.store.name, StoreId: this.store.id, Date: this.date})
                    // this.tripStores.sort((a,b) => {
                    //     if (a.date > b.date) {
                    //         return 1
                    //     }
                    //     if (a.date < b.date) {
                    //         return -1
                    //     }
                    //     return 0
                    // })
                    // this.store = {}
                }).catch(err => {
                    console.log(err)
                })
            } else {
                this.$snotify.warning('Выберите магазин и укажите время посещения')
            }
        },
        deleteTripStore(store) {
            this.callDeleteStoreFromTrip({tripId: this.trip.Id, storeId: store.StoreId, date: store.Date}).then(data => {
                // console.log(data)
                if (data.Id) {
                    this.visit = data
                    this.trip = this.visit.Trips.find(trip => trip.Id === this.$route.params.tripId)
                    if (this.trip) {
                        this.plannedTime = this.trip.PlannedTime
                        this.plannedPlace = this.trip.PlannedPlace
                    }
                    this.tripStores = this.trip.Stores.map(item => {
                        const store = this.getStoreById(item.StoreId)
                        return {
                            ...item,
                            Name: store && store.name ? store.name : ''
                        }
                    })
                    this.$snotify.success('Данные сохранены')
                } else {
                    this.$snotify.error('Ошибка выполнения запроса')
                }
            }).catch(err => {
                console.log(err)
            })
        },
        getDateTimeString(datetimeString) {
            const moment = this.$moment(datetimeString)
            return moment.isValid() ? moment.utc().format('DD.MM.YYYY hh:mm') : ''
        },
        updatePlaceAndTime() {
            if(!this.plannedTime) {
                this.$snotify.error('Укажите время выезда')
            } else if (!this.plannedPlace) {
                this.$snotify.error('Укажите место выезда')
            } else {
                this.callUpdatePlaceAndTimeInTrip({
                    tripId: this.trip.Id,
                    plannedTime: this.plannedTime,
                    plannedPlace: this.plannedPlace
                }).then(data => {
                    if (data.Id) {
                        this.visit = data
                        this.trip = this.visit.Trips.find(trip => trip.Id === this.$route.params.tripId)
                        if (this.trip) {
                            this.plannedTime = this.trip.PlannedTime
                            this.plannedPlace = this.trip.PlannedPlace
                        }
                        this.$snotify.success('Данные сохранены')
                    } else {
                        this.$snotify.error('Ошибка выполнения запроса')
                    }
                }).catch(err => {
                    console.log(err)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        }

    },
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"
    .edit-visit-trip
        input[type=text], input[type=email], input[type=number], .vdatetime
            height 48px
            border 1px solid #d8d8d8
            width 100%
        .dropdown-toggle
            height 48px
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
        .stores-list-container
            .stores-list
                min-height 126px
                background-color white
                padding indent(1)
                border: 1px solid #d8d8d8
            .vdatetime
                height 24px
                input
                    height 24px
            .dropdown-toggle
                height 24px
            .label-with-popover
                justify-content space-between
</style>
