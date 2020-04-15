<template>
    <div class="tour-agency__tab-content">
        <div class="tour-agency__date-inputs-container">
            <div class="mr-2">
                <Label>
                    <template slot="label">
                        Дата начала
                    </template>
                    <template slot="popoverText">
                        {{ $t('help.startDate') }}
                    </template>
                </Label>
                <datetime
                    v-model="dates.startDate"
                    type="date"
                    format="yyyy-MM-dd"
                    zone="UTC"
                    @input="getAgencyPurchases"
                />
            </div>
            <div>
                <Label>
                    <template slot="label">
                        Дата окончания
                    </template>
                    <template slot="popoverText">
                        {{ $t('help.endDate') }}
                    </template>
                </Label>
                <datetime
                    v-model="dates.endDate"
                    type="date"
                    format="yyyy-MM-dd"
                    zone="UTC"
                    @input="getAgencyPurchases"
                />
            </div>
        </div>
        <div
            v-if="tourAgencyPurchases.length > 0"
            class="with-shadow tour-agency__transactions-table mt-4"
        >
            <table>
                <thead>
                    <tr>
                        <th>Название товара</th>
                        <th>Дата</th>
                        <th>Клиент</th>
                        <th>Магазин</th>
                        <th>Общая сумма</th>
                        <th>Прибыль</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="purchase in tourAgencyPurchases"
                        :key="purchase.Id"
                    >
                        <td>{{ (purchase.good || {}).name.RU }}</td>
                        <td>{{ purchase.date || '' }}</td>
                        <td>
                            <router-link
                                v-if="purchase.client"
                                :to="{ name: `Client`, params: { clientId: purchase.client.id }}"
                            >
                                {{ (purchase.client || {}).fullName }}
                            </router-link>
                        </td>
                        <td>
                            <v-popover>
                                <div class="tooltip-link">
                                    {{ (purchase.store || {}).name }}
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
                                        <p><strong>Название:</strong> {{ purchase.store.name }}</p>
                                        <p><strong>Страна:</strong> {{ purchase.storeCountry.name }}</p>
                                        <p><strong>Город:</strong> {{ purchase.storeCity.name }}</p>
                                        <template v-if="purchase.store.contactInfo">
                                            <p
                                                v-for="(contact, $i) in purchase.store.contactInfo"
                                                :key="$i"
                                            >
                                                <strong>{{ contact.type.type }}:</strong> {{ contact.value }}
                                            </p>
                                        </template>
                                    </div>
                                </template>
                            </v-popover>
                        </td>
                        <td>{{ purchase.totalCost.amount }} {{ purchase.totalCost.currency }}</td>
                        <td>{{ purchase.agencyProfit.amount }} {{ purchase.agencyProfit.currency }}</td>
                    </tr>
                    <tr>
                        <td />
                        <td />
                        <td />
                        <td />
                        <td>Итого: {{ grandTotal }}</td>
                        <td>Итого: {{ profitGrandTotal }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div
            v-else
            class="with-shadow tour-agency__no-data"
        >
            <h1>Нет данных о покупках</h1>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

import Label from '@/components/common/LabelWithPopover.vue'
import store from '@/store'
import moment from 'moment'

const DEFAULT_START_DATE = moment().utc().subtract(1, 'months').startOf('month').format()
const DEFAULT_END_DATE = moment(DEFAULT_START_DATE).utc().endOf('month').format()

export default {
    name: 'TourAgencyPurchases',
    components: {
        Label
    },
    data() {
        return {
            dates: {
                startDate: DEFAULT_START_DATE,
                endDate: DEFAULT_END_DATE
            },
            tourAgencyId: ''
        }
    },
    beforeRouteEnter(to, from, next) {
        store.dispatch('tourAgency/callGetAgencyProfit', {
            dates: {
                startDate: DEFAULT_START_DATE,
                endDate: DEFAULT_END_DATE
            },
            tourAgencyId: to.params.id
        }).then(() => {
            next()
        })
    },
    computed: {
        ...mapGetters('tourAgency', ['getTourAgencyPurchaseList']),
        ...mapGetters('goods', ['goodsList', 'getGoodById']),
        ...mapGetters('client', ['getClientsList', 'getClientById']),
        ...mapGetters('store', ['storesList', 'getStoreById']),
        ...mapGetters('city', ['getCitiesList', 'getCityById', 'getCountriesList', 'getCountryById']),
        tourAgencyPurchases() {
            let purchaseList = this.getTourAgencyPurchaseList.map(purchase => {
                let p = Object.assign({}, purchase)
                p.good = this.getGoodById(purchase.goodId)
                p.client = this.getClientById(purchase.clientId)
                p.storeCountry = this.getCountryById(purchase.store.countryId)
                p.storeCity = this.getCityById(purchase.store.cityId)
                return p
            })
            return purchaseList
        },
        grandTotal() {
            return this.getTourAgencyPurchaseList.reduce((total, item) => {
                return total + parseFloat(item.totalCost.amount)
            }, 0)
        },
        profitGrandTotal() {
            return this.getTourAgencyPurchaseList.reduce((total, item) => {
                return total + parseFloat(item.agencyProfit.amount)
            }, 0)
        }
    },
    created() {
        // this.dates.startDate = this.$moment().utc().subtract(1, 'months').startOf('month').format()
        // this.dates.endDate = this.$moment(this.dates.startDate).utc().endOf('month').format()
        this.tourAgencyId = this.$route.params.id
        // this.getAgencyPurchases()
    },
    methods: {
        ...mapActions('tourAgency', ['callGetAgencyProfit']),
        ...mapActions('store', ['callGetStores']),
        getAgencyPurchases() {
            this.callGetAgencyProfit({
                dates: this.dates,
                tourAgencyId: this.tourAgencyId
            })
        },
    }
}
</script>
<style lang="stylus">
    @import "~@/assets/variables.styl"
    .tour-agency__tab-content
        .tour-agency__date-inputs-container
            display flex

        .vdatetime
            height auto
            border 0
            border-bottom 1px solid rgba(155, 166, 175, 0.4)

            input
                border 0

        .tour-agency__transactions-table
            color color-darkgray
            thead th {
                border-top-width: 1px
            }

            tbody td {
                padding-top indent(2)
                padding-bottom indent(2)
                text-align left
            }

            td
                &:nth-child(1) {
                    text-align left
                    width 22%
                }
                &:nth-child(2) {
                    text-align left
                    width 120px
                }
                &:nth-child(4) {
                    text-align left
                    width 14%
                }
                &:nth-child(5) {
                    text-align left
                    width 125px
                }
                &:nth-child(6) {
                    text-align left
                    width 125px
                }

        .tour-agency__no-data
            margin-top 15px
            padding 5px
            text-align center
            h1
                margin 0
                padding 0
</style>
