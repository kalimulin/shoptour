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
                    @input="getEmployeePurchases"
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
                    @input="getEmployeePurchases"
                />
            </div>
        </div>
        <div
            v-if="employeePurchaseList.length > 0"
            class="with-shadow tour-agency__transactions-table mt-4"
        >
            <table>
                <thead>
                    <tr>
                        <th>Название товара</th>
                        <th>Дата</th>
                        <th>Клиент</th>
                        <th>Магазин</th>
                        <th>Прибыль</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="purchase in employeePurchaseList"
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
                                        <p><strong>Название:</strong> {{ (purchase.store || {}).name }}</p>
                                        <p><strong>Страна:</strong> {{ (purchase.storeCountry || {}).name }}</p>
                                        <p><strong>Город:</strong> {{ (purchase.storeCity || {}).name }}</p>
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
                        <td>{{ purchase.employeeProfit.amount }} {{ purchase.employeeProfit.currency }}</td>
                    </tr>
                    <tr>
                        <td />
                        <td />
                        <td />
                        <td />
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

import xstore from '@/store'
import moment from 'moment'

const DEFAULT_START_DATE = moment().utc().subtract(1, 'months').startOf('month').format()
const DEFAULT_END_DATE = moment(DEFAULT_START_DATE).utc().endOf('month').format()

export default {
    name: 'TourAgencyEmployeePurchases',
    components: {
        Label
    },
    data() {
        return {
            dates: {
                startDate: DEFAULT_START_DATE,
                endDate: DEFAULT_END_DATE
            },
            employeeId: ''
        }
    },
    beforeRouteEnter(to, from, next) {
        xstore.dispatch('tourAgency/callGetEmployeeProfit', {
            employeeId: xstore.getters['user/userProfile'].Id,
            dates: {startDate: DEFAULT_START_DATE, endDate: DEFAULT_END_DATE}
        }).then(next)
    },
    computed: {
        ...mapGetters({
            getProfile: 'user/userProfile'
        }),
        ...mapGetters('tourAgency', ['getTourAgencyEmployeePurchaseList']),
        ...mapGetters('goods', ['goodsList', 'getGoodById']),
        ...mapGetters('client', ['getClientsList', 'getClientById']),
        ...mapGetters('store', ['storesList', 'getStoreById']),
        ...mapGetters('city', ['getCitiesList', 'getCityById', 'getCountriesList', 'getCountryById']),
        employeePurchaseList() {
            let purchaseList = this.getTourAgencyEmployeePurchaseList.map(purchase => {
                let p = Object.assign({}, purchase)
                p.good = this.getGoodById(purchase.goodId)
                p.client = this.getClientById(purchase.clientId)
                p.storeCountry = this.getCountryById(purchase.store.countryId)
                p.storeCity = this.getCityById(purchase.store.cityId)
                return p
            })
            return purchaseList
        },
        profitGrandTotal() {
            return this.getTourAgencyEmployeePurchaseList.reduce((total, item) => {
                return total + parseFloat(item.employeeProfit.amount)
            }, 0)
        }
    },
    created() {
        this.dates.startDate = this.$moment().utc().subtract(1, 'months').startOf('month').format()
        this.dates.endDate = this.$moment(this.dates.startDate).utc().endOf('month').format()
        this.employeeId = this.getProfile.Id
        this.getEmployeePurchases()
    },
    methods: {
        ...mapActions('tourAgency', ['callGetEmployeeProfit']),
        getEmployeePurchases() {
            this.callGetEmployeeProfit({
                dates: this.dates,
                employeeId: this.employeeId
            })
        }
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

        .tour-agency__no-data
            margin-top 15px
            padding 5px
            text-align center
            h1
                margin 0
                padding 0
</style>
