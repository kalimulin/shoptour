<template>
    <div class="visit-page__routes">
        <div
            v-for="trip in sortedTripsList"
            :key="trip.Id"
            class="mt-2"
        >
            <Route
                :trip="trip"
                :hotel="hotel"
                :stores-list="storesList"
            />
        </div>
        <div v-if="!sortedTripsList || !sortedTripsList.length">
            Нет поездок для данного выезда
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Route from '@/components/Visit/VisitRoute.vue'

export default {
    name: 'VisitTrips',
    components: {
        Route
    },
    props: {
        visit: {
            type: Object,
            default: () => ({})
        },
        hotel: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        ...mapGetters({
            storesList: 'store/storesList'
        }),
        tripsList() {
            return this.visit && this.visit.trips ? this.visit.trips : []
        },
        sortedTripsList() {
            const list = [...this.tripsList]
            return list.sort((a,b) => {
                if (a.PlannedTime < b.PlannedTime) {
                    return -1
                }
                if (a.PlannedTime > b.PlannedTime) {
                    return 1
                }
                return 0
            })
        }
    },
    created() {
        // console.log(this.visit)
    }
}
</script>
