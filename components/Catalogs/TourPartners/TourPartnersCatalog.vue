<template>
    <div class="tour-partners-catalog">
        <PreviousPage title="Справочник партнеров по турам" />
        <div class="container mt-4">
            <div class="d-flex align-items-center justify-content-between">
                <InputSearch
                    v-model="filterString"
                    placeholder="Введите название партнера по турам"
                />
                <ButtonAdd
                    text="Добавить партнера"
                    @click="addTourPartnerButtonHandler"
                />
            </div>
            <div
                v-if="filteredTourPartnersList && filteredTourPartnersList.length"
                class="mt-4 with-shadow"
            >
                <table>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Контактная информация</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="item in filteredTourPartnersList"
                            :key="item.id"
                        >
                            <td>{{ item.name }}</td>
                            <td>
                                <template v-if="item.contactInfo">
                                    <div
                                        v-for="(contact, $i) in item.contactInfo"
                                        :key="$i"
                                    >
                                        {{ contact.type.type }}: {{ contact.value }}
                                    </div>
                                </template>
                            </td>
                            <td>
                                <img
                                    src="@/assets/images/icons/iconfinder_edit-3_2561260.svg"
                                    class="tour-partners-catalog__edit"
                                    @click="changeTourPartnerButtonHandler(item)"
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <AddTourPartnerModal
            v-if="showAddTourPartnerModal"
            :tour-partner="tourPartner"
            @close="hideTourPartnerHandler"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import InputSearch from '@/components/common/inputs/InputSearch.vue'
import PreviousPage from '@/components/common/PreviousPage.vue'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import AddTourPartnerModal from '@/components/Catalogs/TourPartners/AddTourPartnerModal.vue'

export default {
    name: 'TourPartnersCatalog',
    components: {
        PreviousPage,
        InputSearch,
        ButtonAdd,
        AddTourPartnerModal
    },
    data() {
        return {
            showAddTourPartnerModal: false,
            filterString: '',
            tourPartner: {}
        }
    },
    computed: {
        ...mapGetters('tourPartner', ['getTourPartnersList']),
        filteredTourPartnersList() {
            if(this.filterString) {
                return this.getTourPartnersList.filter(tourPartner => {
                    return tourPartner.name.toLowerCase().includes(this.filterString.toLowerCase())
                })
            } else {
                return this.getTourPartnersList
            }
        }
    },
    created() {
        this.callGetTourPartnersList()
    },
    methods: {
        ...mapActions('tourPartner', ['callGetTourPartnersList']),
        hideTourPartnerHandler(update) {
            this.tourPartner = {}
            this.showAddTourPartnerModal = false
            if (update === true) {
                this.callGetTourPartnersList()
            }
        },
        addTourPartnerButtonHandler() {
            this.tourPartner = {}
            this.showAddTourPartnerModal = true
        },
        changeTourPartnerButtonHandler(tourPartner) {
            this.tourPartner = Object.assign({}, tourPartner)
            this.showAddTourPartnerModal = true
        },
    }
}
</script>

<style lang="stylus">
    .tour-partners-catalog
        table
            td, th
                &:nth-child(1)
                    width 35%
                &:nth-child(4)
                    width 60px
        .tour-partners-catalog__edit
            cursor pointer
</style>
