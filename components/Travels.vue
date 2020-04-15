<template>
    <div
        v-if="allow('viewVisitsPage')"
        class="travels-page"
    >
        <div
            class="container mt-4"
        >
            <div class="travels-page__top-row mb-4">
                <Tabs
                    v-model="activeTab"
                    :tabs-list="tabsList"
                />
            </div>
            <div
                class="travels-list__filter mb-4"
            >
                <div class="d-flex align-items-center">
                    <InputSearch
                        v-model="filterString"
                        placeholder="Введите имя клиента"
                    />
                </div>
            </div>
            <TravelsList
                v-if="activeTab.name === 'all'"
                :visits-list="getVisitsList"
                :filter-string="filterString"
            />
            <TravelsList
                v-else
                :visits-list="getVisitsList.filter(visit => visit.visitStatus === activeTab.name)"
                :filter-string="filterString"
            />
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import Tabs from '@/components/common/Tabs.vue'
import TravelsList from '@/components/common/TravelsList.vue'
import InputSearch from '@/components/common/inputs/InputSearch.vue'

import store from '@/store'

export default {
    name: 'Travels',
    components: {
        Tabs,
        TravelsList,
        InputSearch
    },
    data() {
        return {
            activeTab: {
                name: 'all',
                label: 'Все'
            },
            tabsList: [
                {
                    name: 'all',
                    label: 'Все'
                },
                {
                    name: 'planned',
                    label: 'Запланирован'
                },
                {
                    name: 'in-process',
                    label: 'В работе'
                },

                {
                    name: 'completed-without-goods',
                    label: 'Завершено без покупок'
                },
                {
                    name: 'completed-with-goods',
                    label: 'Завершено с покупками'
                },
                {
                    name: 'canceled',
                    label: 'Отменён'
                },
            ],
            filterString: ''
        }
    },
    beforeRouteEnter(to, from, next) {
        store.dispatch('visit/callGetVisits', store.getters.currentUserRole.context).then(() => {
            next()
        })
    },
    computed: {
        ...mapGetters(['currentUserRole', 'allow']),
        ...mapGetters('visit', ['getVisitsList']),
    },
    methods: {
        ...mapActions('visit', ['callGetVisits'])
    }
}
</script>

<style lang="stylus">
    .travels-page
        .travels-page__top-row
            display flex
            align-items center
            justify-content space-between
</style>
