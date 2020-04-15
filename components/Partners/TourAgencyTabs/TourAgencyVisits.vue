<template>
    <div>
        <div class="d-flex align-items-center justify-content-between">
            <InputSearch
                v-model="visitFilterString"
                placeholder="Введите имя клиента"
            />
            <ButtonAdd
                text="Добавить выезд"
                @click="addVisitButtonHandler"
            />
        </div>
        <div class="mt-4">
            <TravelsList
                :visits-list="visitsList"
                :filter-string="visitFilterString"
                :show-tour-agency-column="false"
            />
        </div>
        <AddVisitPopup
            v-if="showVisitAddModal"
            :tour-agency="getTourAgency"
            @close="showVisitAddModal = false"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import InputSearch from '@/components/common/inputs/InputSearch.vue'
import TravelsList from '@/components/common/TravelsList.vue'
import AddVisitPopup from '@/components/Partners/Popups/AddVisitPopup.vue'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'

export default {
    name: 'TourAgencyVisits',
    components: {
        InputSearch,
        TravelsList,
        AddVisitPopup,
        ButtonAdd
    },
    data() {
        return {
            visitFilterString: '',
            showVisitAddModal: false
        }
    },
    computed: {
        ...mapGetters(['currentUserRole']),
        ...mapGetters('visit', ['getVisitsList']),
        ...mapGetters('tourAgency', ['getTourAgency']),
        visitsList() {
            return this.getVisitsList.filter(visit => (visit.tourAgency || {}).id === this.$route.params.id)
        },
    },
    methods: {
        ...mapActions('user', ['callGetUsersList']),
        addVisitButtonHandler() {
            this.city = {}
            this.hotel = {}
            this.showVisitAddModal = true
        },
    }
}
</script>


