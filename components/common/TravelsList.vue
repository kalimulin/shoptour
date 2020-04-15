<template>
    <div class="travels-list">
        <div
            v-if="filteredVisitsList && filteredVisitsList.length"
            class="travels-list__table"
        >
            <table>
                <thead>
                    <tr>
                        <th v-if="filteredVisitsList[0].clientsCard">
                            № карты
                        </th>
                        <th>Клиент</th>
                        <th>Время приезда</th>
                        <th>Время отъезда</th>
                        <th v-show="showTourAgencyColumn">
                            Туроператор
                        </th>
                        <th>Цели</th>
                        <th>Магазины</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in filteredVisitsList"
                        :key="item.id"
                        @click="clickVisitHandle(item)"
                    >
                        <td v-if="item.clientsCard">
                            {{ item.clientsCard.cardNumber }}
                        </td>
                        <td class="travels-list__client">
                            <a @click.stop="clickClientHandler(item.clientId)">
                                {{ item.client ? item.client.fullName : item.clientId }}
                            </a>
                        </td>
                        <td>{{ getDateTimeString(item.checkInTime) }}</td>
                        <td>{{ getDateTimeString(item.checkOutTime) }}</td>
                        <td
                            v-show="showTourAgencyColumn"
                            class="travels-list__tour-operator"
                        >
                            <a @click.stop="clickTourAgencyHandler(item.tourAgency.id)">
                                {{ item.tourAgency && item.tourAgency.name }}
                            </a>
                        </td>
                        <td>{{ item.objectives.length }}</td>
                        <td>{{ item.trips.length }}</td>
                        <td>
                            <div class="travel-list__status in-work">
                                {{ getVisitStatusLabel(item.visitStatus) }}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <Pager
            v-if="visitsList && visitsList.length"
            class="mt-2"
            :pages-number="1"
        />
        <div v-else>
            Нет выездов для данного представления
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Pager from '@/components/common/Pager.vue'
import moment from 'moment'

export default {
    name: 'TravelsList',
    components: {
        Pager
    },
    props: {
        filterString: {
            type: String,
            default: ''
        },
        showTourAgencyColumn: {
            type: Boolean,
            default: true
        },
        showFilter: {
            type: Boolean,
            default: false
        },
        visitsList: {
            type: Array,
            default: () => ([])
        }
    },
    computed: {
        ...mapGetters('client', ['clientsCard']),
        filteredVisitsList() {
            if(this.filterString) {
                return this.visitsList.filter(visit => {
                    return (((visit || {}).client || {}).fullName || '').toUpperCase().includes(this.filterString.toUpperCase())
                })
            } else {
                return this.visitsList
            }
        }
    },
    methods: {
        ...mapActions('client', ['callClientByCard']),
        getDateTimeString(timestamp) {
            return moment(timestamp).isValid() ? moment(timestamp).utc().format('YYYY-MM-DD hh:mm') : ''
        },
        clickVisitHandle(visit) {
            this.$router.push(`/visit/${visit.id}`)
        },
        clickClientHandler(clientId) {
            this.$router.push(`/client/${clientId}`)
        },
        clickTourAgencyHandler(agencyId) {
            this.$router.push(`/partners/tour-agencies/${agencyId}`)
        },
        getVisitStatusLabel(visitStatus) {
            switch (visitStatus) {
            case 'completed-without-goods':
                return 'Завершен без покупок'
            case 'in-process':
                return 'В работе'
            case 'planned':
                return 'Запланирована'
            case 'completed-with-goods':
                return 'Завершен с покупками'
            default:
                return ''
            }
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"
    .travels-list {
        .travels-list__table {
            background-color color-white
            box-shadow -1px 2px 4px rgba(110, 146, 172, 0.270352)
            border-radius 4px
            table {
                th, td {
                    &:nth-child(1) {
                        width 17%
                    }
                    &:nth-child(2) {
                        width 150px
                    }
                    &:nth-child(3) {
                        width 150px
                    }
                    &:nth-child(5) {
                        width 90px
                    }
                    &:nth-child(6) {
                        width 90px
                    }
                    &:nth-child(7) {
                        width 125px
                    }
                }

                td {
                    text-align left
                }

                tr {
                    cursor pointer
                }
            }

            .travels-list__tour-operator {
                color color-blue
                cursor pointer
            }
            .travels-list__client {
                color color-blue
                cursor pointer
            }
            .travels-list__transfer-manager {
                color color-blue
            }
            .travel-list__status {
                white-space nowrap
                height 16px
                line-height 16px
                font-size 12px
                border-radius 8px
                background-color #6AB110
                padding 0 indent(1)
                color color-white
                display inline
            }
        }
    }

</style>
