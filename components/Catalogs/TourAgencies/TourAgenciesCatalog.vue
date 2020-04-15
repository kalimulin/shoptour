<template>
    <div class="tour-agencies-catalog">
        <PreviousPage title="Справочник турагентств" />
        <div class="container mt-4">
            <div class="d-flex align-items-center justify-content-between">
                <InputSearch
                    v-model="filterString"
                    placeholder="Введите название турагентсва"
                />
                <ButtonAdd
                    text="Добавить турагенство"
                    @click="addStoreButtonHandler"
                />
            </div>
            <div
                v-if="filteredTourAgenciesList && filteredTourAgenciesList.length"
                class="mt-4 with-shadow"
            >
                <table>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Город</th>
                            <th>Контактная информация</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="item in filteredTourAgenciesList"
                            :key="item.id"
                        >
                            <td>{{ item.name }}</td>
                            <td>
                                <div class="stores-catalog__city">
                                    <div>{{ getCityById(item.cityId).name }}</div>
                                    <div>{{ getCountryById(item.countryId).name }}</div>
                                </div>
                            </td>
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
                                    class="tour-agencies-catalog__edit"
                                    @click="changeTourAgencyButtonHandler(item)"
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <TourAgencyAddModal
            v-if="showTourAgencyAddModal"
            :tour-agency="tourAgency"
            @close="hideTourAgencyHandler"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import InputSearch from '@/components/common/inputs/InputSearch.vue'
import PreviousPage from '@/components/common/PreviousPage.vue'
import deepCopy from '@/utils/deepCopy'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import TourAgencyAddModal from '@/components/Catalogs/TourAgencies/TourAgencyAddModal.vue'

export default {
    name: "TourAgenciesCatalog",
    components: {
        PreviousPage,
        InputSearch,
        ButtonAdd,
        TourAgencyAddModal
    },
    data() {
        return {
            filterString: '',
            showTourAgencyAddModal: false,
            tourAgency: {},
        }
    },
    computed: {
        ...mapGetters(['currentUserRole']),
        ...mapGetters('tourAgency', ['tourAgenciesList']),
        ...mapGetters('city', ['getCountriesList', 'getCitiesList']),
        filteredTourAgenciesList() {
            if(this.filterString) {
                return this.tourAgenciesList.filter(tourAgency => {
                    return ((tourAgency || {}).name || '').toUpperCase().includes(this.filterString.toUpperCase())
                })
            } else {
                return this.tourAgenciesList
            }
        },
        citiesList() {
            return this.getCitiesList.filter(city => {
                if (this.country && this.country.id) {
                    return city.countryId === this.country.id
                }
                return true
            })
        },
        citiesSelectOptions() {
            return [
                {label: 'Без города', id: ''},
                ...this.citiesList.map(cat => ({...cat, label: cat.name || cat.id}))
            ]
        },
        countriesSelectOptions() {
            return [
                {label: 'Без страны', id: ''},
                ...this.getCountriesList.map(country => ({...country, label: country.name || country.id}))
            ]
        },
    },
    created() {
        this.callGetTourAgencies({contetx: this.currentUserRole.context})
    },
    methods: {
        ...mapActions('tourAgency', ['callGetTourAgencies']),
        ...mapActions('city', ['callGetCitiesList', 'callGetCountriesList']),
        hideTourAgencyHandler(update) {
            this.tourAgency = {}
            this.showTourAgencyAddModal = false
            if (update === true) {
                this.getStores()

            }
        },
        getStores() {
            this.callGetTourAgencies({context: this.currentUserRole.context})
            this.callGetCountriesList()
            this.callGetCitiesList()
        },
        getCityById(id) {
            if (this.citiesList) {
                return this.citiesList.find(item => item.id === id) || ''
            }
            return null
        },
        getCountryById(id) {
            if (this.getCountriesList) {
                return this.getCountriesList.find(item => item.id === id) || ''
            }
            return null
        },
        addStoreButtonHandler() {
            this.tourAgency = {}
            this.showTourAgencyAddModal = true
        },
        changeTourAgencyButtonHandler(tourAgency) {
            this.tourAgency = tourAgency
            this.showTourAgencyAddModal = true
        },
    }
}
</script>

<style lang="stylus">
    .tour-agencies-catalog
        table
            td, th
                &:nth-child(1)
                    width 30%
                &:nth-child(2)
                    width 25%
                &:nth-child(4)
                    width 60px
        .tour-agencies-catalog__edit
            cursor pointer
</style>
