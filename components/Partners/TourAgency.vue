<template>
    <div
        v-if="allow('viewTourAgencies') && getTourAgency && getTourAgency.name"
        class="tour-agency-page"
    >
        <PreviousPage
            :title="`Туристическое агентство '${getTourAgency.name}'`"
        />
        <div class="container mt-4">
            <div class="shop-tabs">
                <Tabs
                    :tabs-list="tabsList"
                    :selected-tab="activeTab"
                    @change="changeTabHandler"
                />
            </div>
            <div class="shop__tabs-content mt-4">
                <transition
                    name="fade"
                    mode="out-in"
                >
                    <router-view />
                </transition>
            </div>
        </div>
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
import store from '@/store'

export default {
    name: 'Store',
    components: {
        Tabs,
        QrCodeStream,
        PreviousPage,
    },
    data() {
        return {
            showQrReader: false,
        }
    },
    beforeRouteEnter(to, from, next) {
        const awaits = []
        if (store.getters.allow('viewTourAgencyVisits')) {
            awaits.push(store.dispatch('visit/callGetVisitsByTourAgency', to.params.id))
        }
        if (store.getters.allow('viewClients')) {
            awaits.push(store.dispatch('client/callGetClientsList'))
        }
        awaits.push(store.dispatch('tourAgency/callGetTourAgency', {agencyId: to.params.id}))
        if (store.getters.allow('viewTourAgencyEmployers')) {
            awaits.push(store.dispatch('user/callGetUsersList', {name: 'tour-agency-employee', context: to.params.id}))
            awaits.push(store.dispatch('user/callGetUsersList', {name: 'tour-agency-manager', context: to.params.id}))
        }
        Promise.all(awaits).then(next()) //.catch(next())
    },
    computed: {
        ...mapGetters({
            permissions: 'permissions',
            allow: 'allow'
        }),
        ...mapGetters('tourAgency', ['getTourAgency', 'tourAgenciesList']),
        activeTab() {
            return this.tabsList.find(tab => tab.name === ((this.$route || {}).meta || {}).tab)
        },
        tabsList() {
            let tabs = []
            if (this.allow('viewVisitsPage') || this.allow('viewTourAgencyVisits')) {
                tabs.push({
                    name: 'visits',
                    label: 'Выезды'
                })
            }
            tabs.push({
                name: 'about',
                label: 'О турагентстве'
            })
            if (this.allow('viewClients')) {
                tabs.push({
                    name: 'сlients',
                    label: 'Клиенты'
                })
            }
            if (this.allow('viewTourAgencyEmployers')) {
                tabs.push({
                    name: 'staff',
                    label: 'Сотрудники'
                })
            }
            if(this.allow('viewTourAgencyPurchases')) {
                tabs.push({
                    name: 'purchases',
                    label: 'Покупки'
                })
            }
            if(this.allow('viewTourAgencyEmployeePurchases')) {
                tabs.push({
                    name: 'employee-purchases',
                    label: 'Покупки'
                })
            }
            return tabs
        },
        tourAgenciesSelectOptions() {
            return [
                ...this.tourAgenciesList.map(item => ({...item, label: item.name || item.id}))
            ]
        },
    },
    watch: {
        '$route'(to, from) {
            // console.log(to, from)
            // this.onVisitPage()
        }
    },
    created() {
        // this.onVisitPage()
    },
    methods: {
        ...mapActions('client', ['callGetClientsList']),
        ...mapActions('user', ['callGetUsersList']),
        ...mapActions('tourAgency', ['callGetTourAgency']),
        onVisitPage() {
            this.callGetClientsList()
            this.callGetTourAgency({agencyId: this.$route.params.id})
            this.callGetUsersList({name: 'tour-agency-employee', context: this.$route.params.id})
            this.callGetUsersList({name: 'tour-agency-manager', context: this.$route.params.id})
        },
        changeTabHandler(tab) {
            this.$router.push(`/partners/tour-agencies/${this.$route.params.id}/${tab.name}`)
        },
        changeCurrency(cur) {
        },
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"
    .tour-agency-page
        .tour-agency__categories
            color color-gray
            font-size 14px
            line-height 21px

            .button-blue
                height 48px

            .tour-agency__categories-filter
                display flex
                width 390px
                margin-right auto
                border-bottom 1px solid rgba(155, 166, 175, 0.4)

                input
                    border 0
                    width 100%

            .tour-agency__categories-table
                max-height calc(100vh - 465px)
                overflow auto
                line-height 19px
                font-size 14px
                color #485465
                tbody
                    tr
                        height 52px
                        td
                            line-height 52px
                            background-color rgba(74, 144, 226, 0.2)
                        td, th
                            &:last-child
                                width 140px

            .add-category
                input[type=text]
                    width 100%
                    height 48px

            .add-good
                input[type=text]
                    width 100%
                    height 48px

            .v-select .dropdown-toggle
                height 44px

        .tour-agency__clients
            .tour-agency__clients-table
                line-height 19px
                font-size 14px
                color #485465
                td:last-child, th:last-child
                    width 50%
                    text-align left

        .add-client, .add-category
            input[type=text], input[type=email], .vdatetime
                width 100%
                height 48px
                border 1px solid #d8d8d8
</style>
