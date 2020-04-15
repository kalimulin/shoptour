<template>
    <div class="store-purchases__tab-content">
        <div class="store-purchases__date-inputs-container">
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
                    input-class="store-purchases__date-input"
                    type="date"
                    format="yyyy-MM-dd"
                    zone="UTC"
                    @input="getPurchases"
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
                    input-class="store-purchases__date-input"
                    type="date"
                    format="yyyy-MM-dd"
                    zone="UTC"
                    @input="getPurchases"
                />
            </div>
        </div>
        <div
            v-if="storePurchaseList.length > 0"
            class="with-shadow store-purchases__transactions-table mt-4"
        >
            <table>
                <thead>
                    <tr>
                        <th>Название товара</th>
                        <th>Дата</th>
                        <th>Клиент</th>
                        <th>Турагенство</th>
                        <th>Общая сумма</th>
                        <th>Прибыль</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="purchase in storePurchaseList"
                        :key="purchase.Id"
                    >
                        <td>{{ (purchase.good || {}).name.RU }}</td>
                        <td>{{ purchase.date }}</td>
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
                                                <strong>{{ (contact.type || {}).type }}:</strong> {{ contact.value }}
                                            </p>
                                        </template>
                                    </div>
                                </template>
                            </v-popover>
                        </td>
                        <td>{{ purchase.totalCost.amount }} {{ purchase.totalCost.currency }}</td>
                        <td>{{ purchase.profit.amount }} {{ purchase.profit.currency }}</td>
                    </tr>
                    <tr
                        v-if="storePurchaseList.length"
                    >
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
            class="with-shadow store-purchases__no-data"
        >
            <h1>Нет данных о покупках</h1>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

import Label from '@/components/common/LabelWithPopover.vue'

import moment from "moment"

const DEFAULT_START_DATE = moment().utc().subtract(1, 'months').startOf('month').format()
const DEFAULT_END_DATE = moment(DEFAULT_START_DATE).utc().endOf('month').format()

export default {
    name: 'StorePurchases',
    components: {
        Label
    },
    props: {
        storeId: {
            type: String,
            default: () => ({})
        },
        startDate: {
            type: String,
            default: () => DEFAULT_START_DATE
        },
        endDate: {
            type: String,
            default: () => DEFAULT_END_DATE
        }
    },
    data() {
        const {startDate,endDate} = this
        return {
            dates: {startDate, endDate}
        }
    },
    computed: {
        ...mapGetters('store', ['getStorePurchaseList']),
        ...mapGetters('goods', ['goodsList', 'getGoodById']),
        ...mapGetters('tourAgency', ['tourAgenciesList', 'getTourAgencyById']),
        ...mapGetters('client', ['getClientsList', 'getClientById']),
        ...mapGetters('city', ['getCitiesList', 'getCityById', 'getCountriesList', 'getCountryById']),
        storePurchaseList() {
            return this.getStorePurchaseList.map(purchase => {
                let p = Object.assign({}, purchase)
                p.client = this.getClientById(purchase.clientId)
                p.good = this.getGoodById(purchase.goodId)
                p.agencyCountry = this.getCountryById(purchase.agency.countryId)
                p.agencyCity = this.getCityById(purchase.agency.cityId)
                return p
            })
        },
        grandTotal() {
            return this.storePurchaseList.reduce((total, item) => {
                return total + parseFloat(item.totalCost.amount)
            }, 0)
        },
        profitGrandTotal() {
            return this.storePurchaseList.reduce((total, item) => total + parseFloat(item.profit.amount), 0)
        }
    },
    methods: {
        ...mapActions('tourAgency', ['callGetTourAgencies']),
        ...mapActions('store', ['callGetProfitByStore']),
        getPurchases() {
            this.callGetProfitByStore({
                storeId: this.storeId,
                dates: this.dates
            })
        },
    },

}
</script>
<style lang="stylus">
    @import "~@/assets/variables.styl"
    .store-purchases__tab-content
        .store-purchases__transactions-table
            color color-darkgray
            thead th {
                border-top-width: 1px
            }

            tbody td {
                padding-top indent(2)
                padding-bottom indent(2)
                text-align left
            }

        .store-purchases__date-inputs-container
            display flex

        .vdatetime
            height auto
            border 0
            border-bottom 1px solid rgba(155, 166, 175, 0.4)

            input
                border 0

        .store-purchases__no-data
            padding 5px
            border-radius 4px
            text-align center
            background-color #fcfcfc
            margin-top 15px
            h1
                margin 0
                padding 0

</style>
