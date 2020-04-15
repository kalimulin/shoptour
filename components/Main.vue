<template>
    <div class="container mt-4">
        <div class="main">
            <RecentEvents />
            <div v-if="allow('viewVisits')">
                <h1>Список текущих выездов</h1>
                <TravelsList
                    v-if="visitsList.length"
                    :visits-list="visitsList"
                />
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import RecentEvents from '@/components/common/RecentEvents.vue'
import TravelsList from '@/components/common/TravelsList.vue'

export default {
    name: "Main",
    components: {
        RecentEvents,
        TravelsList
    },
    computed: {
        ...mapGetters(['currentUserRole', 'allow']),
        ...mapGetters('visit', ['getVisitsList']),
    },
    watch: {
        '$route'() {
            if (this.currentUserRole.name === 'tour-agency-manager' || this.currentUserRole.name === 'tour-agency-employee') {
                this.$router.push(`/partners/tour-agencies/${this.currentUserRole.context}`)
            } else if (this.currentUserRole.name === 'controller' || this.currentUserRole.name === 'hosting-party-manager') {
                this.$router.push('/partners/stores')
            }
        }
    },
    mounted() {
        if (this.currentUserRole.name === 'tour-agency-manager' || this.currentUserRole.name === 'tour-agency-employee') {
            this.$router.push(`/partners/tour-agencies/${this.currentUserRole.context}`)
        } else if (this.currentUserRole.name === 'controller' || this.currentUserRole.name === 'hosting-party-manager') {
            this.$router.push('/partners/stores')
        } else {
            this.callGetVisits()
        }
    },
    methods: {
        ...mapActions('visit', ['callGetVisits'])
    }
}
</script>

<style lang="stylus">
    .main .travels-list
        max-height calc(100vh - 290px)
        overflow-y auto
        overflow-x hidden
</style>
