<template>
    <Modal
        title="Добавить поездку"
        class="add-visit-trip"
        @close="$emit('close')"
        @submit="AddVisitTrip"
    >
        <div slot="body">
            <div class="mt-2">
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
                    :multiple="true"
                    track-by="Id"
                    label="label"
                    :options="visit.objectives.map(obj => ({...obj, label: ((getGoodById(obj.Objective.GoodId) || {}).name || {}).RU || '---'}))"
                    placeholder="Выберите товары"
                />
            </div>
            <div class="row">
                <div class="form-group w-30">
                    <div class="mt-2">
                        <Label>
                            <template slot="label">
                                Время выезда
                            </template>
                            <template slot="popoverText">
                                {{ $t('help.chooseTripTime') }}
                            </template>
                        </Label>
                        <datetime
                            v-model="trip.PlannedTime"
                            type="datetime"
                            format="yyyy-MM-dd HH:mm"
                            zone="UTC"
                            :max-datetime="visit.checkOutTime"
                            :min-datetime="visit.checkInTime"
                        />
                    </div>
                </div>
                <div class="form-group w-70">
                    <div class="mt-2">
                        <Label>
                            <template slot="label">
                                Место выезда
                            </template>
                            <template slot="popoverText">
                                {{ $t('help.chooseTripDepartment') }}
                            </template>
                        </Label>
                        <input
                            v-model="trip.PlannedPlace"
                            type="text"
                        >
                    </div>
                </div>
            </div>
            <div class="row stores-list-container">
                <div class="form-group w-60">
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
                                    <div class="form-group w-50">
                                        {{ item.store.name }}
                                    </div>
                                    <div class="form-group w-40">
                                        {{ getDateTimeString(item.date) }}
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
                <div class="form-group w-40">
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
                            :min-datetime="trip.PlannedTime || visit.checkInTime"
                            :max-datetime="visit.checkOutTime"
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
    </Modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Modal from '@/components/common/Modal.vue'
import Label from '@/components/common/LabelWithPopover.vue'
import Select from '@/components/common/Select'

export default {
    name: 'AddVisitTripPopup',
    components: {
        Modal,
        Label,
        Select
    },
    props: {
        visit: {
            type: Object,
            default: () => ({
                objectives: []
            })
        }
    },
    data() {
        return {
            trip: {},
            visitObjectives: [],
            store: {},
            date: '',
            tripStores: []
        }
    },
    computed: {
        ...mapGetters(['currentUserRole']),
        ...mapGetters('goods', ['goodsList']),
        ...mapGetters('store', ['storesList']),
        storeSelectOptions() {
            return this.storesList.filter(item => !this.tripStores.find(st => st.store.id === item.id))
        },
    },
    created() {
        // this.callGetStores(this.currentUserRole.context)
    },
    methods: {
        ...mapActions('visit', ['callAddTrip', 'callGetVisitById']),
        ...mapActions('store', ['callGetStores']),
        AddVisitTrip() {
            const payload = {
                ...this.trip,
                TransferManagerId: '',
                VisitObjectiveIds: this.visitObjectives.map(obj => obj.Id),
                Stores: this.tripStores.map(store => ({StoreId: store.store.id, Date: store.date}))
            }
            if (!payload.VisitObjectiveIds.length) {
                this.$snotify.error('Добавьте цели к выезду')
            } else if (!this.trip.PlannedTime) {
                this.$snotify.error('Укажите время выезда')
            } else if (!this.trip.PlannedPlace) {
                this.$snotify.error('Укажите место выезда')
            } else {
                this.callAddTrip(payload).then(data => {
                    // console.log(data)
                    if (data.Visit && data.Visit.Id) {
                        this.$emit('close', true)
                        this.trip = {}
                        this.stores = []
                        this.trip = {}
                        this.callGetVisitById(this.$route.params.visitId)
                        this.$snotify.success('Поездка добавлена')
                    } else {
                        this.$snotify.error('Ошибка добавления поездки')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        getGoodById(id) {
            return this.goodsList.find(good => good.id === id) || {}
        },
        addTripStore() {
            if ((this.store || {}).id && this.date) {
                this.tripStores.push({store: this.store, date: this.date})
                this.tripStores.sort((a,b) => {
                    if (a.date > b.date) {
                        return 1
                    }
                    if (a.date < b.date) {
                        return -1
                    }
                    return 0
                })
                this.store = {}
            } else {
                this.$snotify.warning('Выберите магазин и укажите время посещения')
            }
        },
        deleteTripStore(store) {
            this.tripStores = this.tripStores.filter(item => item !== store)
        },
        getDateTimeString(datetimeString) {
            const moment = this.$moment(datetimeString)
            // console.log(moment)
            return moment.isValid() ? moment.utc().format('DD.MM.YYYY hh:mm') : ''
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"
    .add-visit-trip
        .multiselect
            height auto
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
                min-height 149px
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
