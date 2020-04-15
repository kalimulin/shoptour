<template>
    <div class="visit-route">
        <h2>
            Поездка на {{ getDateString(trip.PlannedTime) }}
            <router-link :to="`/visit/${$route.params.visitId}/trip/${trip.Id}`">
                <img
                    src="@/assets/images/icons/iconfinder_edit-3_2561260.svg"
                    alt=""
                    class="ml-1"
                >
            </router-link>
        </h2>
        <div class="visit-route__table pl-4">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div class="cell-title">
                                Время выезда
                            </div>
                            <div class="cell-text">
                                {{ getDateTimeString(trip.PlannedTime) }}
                            </div>
                        </td>
                        <td>
                            <div class="cell-title">
                                Отель
                            </div>
                            <div class="cell-text">
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
                                            <p><strong>Название:</strong>{{ (hotel || {}).name || '' }}</p>
                                            <p><strong>Страна:</strong>{{ (hotelCountry || {}).name || '' }}</p>
                                            <p><strong>Город:</strong>{{ (hotelCity || {}).name || '' }}</p>
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
                        </td>
                        <td>
                            <div class="cell-title">
                                Место встречи
                            </div>
                            <div class="cell-text">
                                {{ trip.PlannedPlace }}
                            </div>
                        </td>
                        <td />
                    </tr>
                    <tr
                        v-for="store in trip.Stores"
                        :key="store.StoreId"
                        class="visit-route__middle-points"
                    >
                        <td>
                            <div class="with-shadow-cell">
                                <div class="cell-title">
                                    Время приезда
                                </div>
                                <div class="cell-text">
                                    {{ getDateTimeString(store.Date) }}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="with-shadow-cell">
                                <div class="cell-title">
                                    Магазин
                                </div>
                                <div class="cell-text">
                                    <v-popover>
                                        <div class="tooltip-link">
                                            {{ (getStoreById(store.StoreId) || {}).name || '' }}
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
                                                <p><strong>Название:</strong> {{ (getStoreById(store.StoreId) || {}).name || '' }}</p>
                                                <p><strong>Страна:</strong>{{ (getStoreCountry(store.StoreId) || {}).name || '' }}</p>
                                                <p><strong>Город:</strong>{{ (getStoreCity(store.StoreId) || {}).name || '' }}</p>
                                                <template v-if="getStoreById(store.StoreId).contactInfo">
                                                    <p
                                                        v-for="(contact, $i) in getStoreById(store.StoreId).contactInfo"
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
                        </td>
                        <td>
                            <div class="cell-title">
                                Цели
                            </div>
                            <div class="cell-text">
                                <v-popover v-if="goodsNames.length">
                                    <div class="tooltip-link">
                                        {{ goodsNames.length }} шт.
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
                                            <p
                                                v-for="name in goodsNames"
                                                :key="name.Id"
                                            >
                                                {{ name }}
                                            </p>
                                        </div>
                                    </template>
                                </v-popover>
                                <div v-else>
                                    Нет
                                </div>
                            </div>
                        </td>
                        <td />
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'VisitRoute',
    props: {
        trip: {
            type: Object,
            default: () => ({})
        },
        hotel: {
            type: Object,
            default: () => ({})
        },
        storesList: {
            type: Array,
            default: () => ([])
        },
    },
    computed: {
        ...mapGetters('city', ['getCitiesList', 'getCountriesList']),
        ...mapGetters('visit', ['getVisit', 'getVisitObjective']),
        ...mapGetters('goods', ['goodsList', 'getGoodById']),
        hotelCity() {
            return this.getCitiesList.find(city => city.id === (this.hotel || {}).cityId) || {}
        },
        hotelCountry() {
            return this.getCountriesList.find(country => country.id === (this.hotel || {}).countryId) || {}
        },
        goodsNames() {
            let names = []
            for (let visitObjectiveId of this.trip.VisitObjectiveIds) {
                let objective = this.getVisitObjective(visitObjectiveId).Objective
                if (objective === undefined) {
                    continue
                }
                const good = this.getGoodById(objective.GoodId)
                let name = good && good.name && good.name.RU ? good.name.RU : ''

                names.push(name)

            }
            return names
        }
    },
    created() {
        // console.log('TRIP', this.trip)
    },
    methods: {
        getDateString(datetime) {
            if (this.$moment(datetime).isValid()) {
                return this.$moment(datetime).utc().format('DD.MM.YYYY')
            }
            return ''
        },
        getTimeString(datetime) {
            if (this.$moment(datetime).isValid()) {
                return this.$moment(datetime).utc().format('hh:mm')
            }
            return ''
        },
        getStoreById(storeId) {
            return this.storesList.find(store => store.id === storeId) || {}
        },
        getStoreCity(storeId) {
            const store = this.getStoreById(storeId)
            return this.getCitiesList.find(city => city.id === store.cityId) || {}
        },
        getStoreCountry(storeId) {
            const store = this.getStoreById(storeId)
            return this.getCountriesList.find(country => country.id === store.countryId) || {}
        },
        getDateTimeString(datetimeString) {
            return (datetimeString && this.$moment(datetimeString).isValid()) ? this.$moment(datetimeString).utc().format('DD.MM.YYYY hh:mm') : ''
        }
    }
}
</script>

<style lang="stylus">
@import "~@/assets/variables.styl"
.visit-route__table
    table
        border 0
        tr
            border 0
            background-color transparent
            td
                border 0
                background-color transparent
                .cell-title
                    line-height: 15px
                    font-size 12px
                    color rgba(155, 166, 175, 0.6)
        .visit-route__middle-points
            background-color color-white
</style>
