<template>
    <div class="report__tab-content">
        <div class="report__date-inputs-container mt-4">
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
                    @input="getTotalProfit"
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
                    @input="getTotalProfit"
                />
            </div>
        </div>
        <div
            v-if="totalProfitList.length > 0"
            class="with-shadow report__transaction-table mt-4"
        >
            <table>
                <thead>
                    <tr>
                        <th>Название товара</th>
                        <th>Дата</th>
                        <th>Клиент</th>
                        <th>Магазин</th>
                        <th>Турагенство</th>
                        <th>Общая сумма</th>
                        <th>Прибыль</th>
                    </tr>
                </thead>
                <tbody v-if="totalProfitList && totalProfitList.length">
                    <tr
                        v-for="purchase in totalProfitList"
                        :key="purchase.Id"
                    >
                        <td>{{ (purchase.good || {}).name.RU }}</td>
                        <td>{{ purchase.date || '' }}</td>
                        <td>
                            <router-link
                                v-if="purchase.client"
                                :to="{ name: `Client`, params: { clientId: (purchase.client || {}).id }}"
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
                                                <strong>{{ ((contact || {}).type || {}).type }}:</strong> {{ contact.value }}
                                            </p>
                                        </template>
                                    </div>
                                </template>
                            </v-popover>
                        </td>
                        <td>
                            <v-popover>
                                <div class="tooltip-link">
                                    {{ (purchase.agency || {}).name }}
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
                                        <p><strong>Название:</strong> {{ purchase.agency.name }}</p>
                                        <p><strong>Страна:</strong> {{ purchase.agencyCountry.name }}</p>
                                        <p><strong>Город:</strong> {{ purchase.agencyCity.name }}</p>
                                        <template v-if="purchase.agency.contactInfo">
                                            <p
                                                v-for="(contact, $i) in purchase.agency.contactInfo"
                                                :key="$i"
                                            >
                                                <strong>{{ ((contact || {}).key || {}).type }}:</strong> {{ contact.value }}
                                            </p>
                                        </template>
                                    </div>
                                </template>
                            </v-popover>
                        </td>
                        <td>{{ purchase.totalCost.amount }} {{ purchase.totalCost.currency }}</td>
                        <td>{{ purchase.profit.amount }} {{ purchase.profit.currency }}</td>
                    </tr>
                    <tr>
                        <td />
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
            class="with-shadow report__no-data"
        >
            <h1>Нет данных о покупках</h1>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import store from '@/store'
import moment from 'moment'

const DEFAULT_START_DATE = moment().utc().subtract(1, 'months').startOf('month').format()
const DEFAULT_END_DATE = moment(DEFAULT_START_DATE).utc().endOf('month').format()

import Label from '@/components/common/LabelWithPopover.vue'
export default {
    name: 'TotalProfitReport',
    components: {
        Label
    },
    data() {
        return {
            dates: {
                startDate: DEFAULT_START_DATE,
                endDate: DEFAULT_END_DATE
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        Promise.all([
            store.dispatch('report/callGetTotalProfit', {startDate: DEFAULT_START_DATE, endDate: DEFAULT_END_DATE}),
            store.dispatch('goods/callGetGoods'),
            store.dispatch('client/callGetClientsList')
        ]).then(() => {
            next()
        })
    },
    computed: {
        ...mapGetters('report', ['getTotalProfitList']),
        ...mapGetters('goods', ['goodsList', 'getGoodById']),
        ...mapGetters('tourAgency', ['tourAgenciesList', 'getTourAgencyById']),
        ...mapGetters('client', ['getClientsList', 'getClientById']),
        ...mapGetters('city', ['getCitiesList', 'getCityById', 'getCountriesList', 'getCountryById']),
        totalProfitList() {
            return this.getTotalProfitList.map(purchase => {
                let p = Object.assign({}, purchase)
                p.good = this.getGoodById(purchase.goodId)
                p.client = this.getClientById(purchase.clientId)
                p.agencyCountry = this.getCountryById(purchase.agency.countryId)
                p.agencyCity = this.getCityById(purchase.agency.cityId)
                p.storeCountry = this.getCountryById(purchase.store.countryId)
                p.storeCity = this.getCityById(purchase.store.cityId)
                return p
            }, this)
        },
        grandTotal() {
            return this.totalProfitList.reduce((total, item) => {
                return total + parseFloat(item.totalCost.amount)
            }, 0)
        },
        profitGrandTotal() {
            return this.totalProfitList.reduce((total, item) => {
                return total + parseFloat(item.profit.amount)
            }, 0)
        }
    },
    created() {
        this.dates.startDate = this.$moment().utc().subtract(1, 'months').startOf('month').format()
        this.dates.endDate = this.$moment(this.dates.startDate).utc().endOf('month').format()
    },
    methods: {
        ...mapActions('report', ['callGetTotalProfit']),
        ...mapActions('tourAgency', ['callGetTourAgencies']),
        ...mapActions('goods', ['callGetGoods']),
        ...mapActions('client', ['callGetClientsList']),
        getTotalProfit() {
            this.callGetTotalProfit(this.dates)
        },
    }
}
</script>
<style lang="stylus">
    @import "~@/assets/variables.styl"
    .report__tab-content
        .report__date-inputs-container
            display flex
            .vdatetime
                height auto
                border 0
                border-bottom 1px solid rgba(155, 166, 175, 0.4)

        .report__transaction-table
            color color-darkgray
            thead th {
                border-top-width: 1px
            }

            tbody td {
                padding-top indent(2)
                padding-bottom indent(2)
                text-align left
            }
        .report__no-data
            margin-top 15px
            padding 5px
            text-align center
            h1
                margin 0
                padding 0

</style>
