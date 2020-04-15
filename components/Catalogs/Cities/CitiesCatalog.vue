<template>
    <div class="cities-catalog">
        <PreviousPage title="Справочник городов и стран" />
        <div class="container mt-4">
            <div class="d-flex align-items-center justify-content-between">
                <InputSearch
                    v-model="filterString"
                    placeholder="Введите название города или страны"
                />
                <ButtonAdd
                    text="Добавить город"
                    @click="addCityButtonHandler"
                />
                <ButtonAdd
                    text="Добавить страну"
                    class="ml-2"
                    @click="addCountryButtonHandler"
                />
            </div>
            <div
                v-if="getCitiesList && getCitiesList.length"
                class="mt-4 with-shadow"
            >
                <DoubleTable
                    :categories-list="getCountriesList.map(item => ({...item, name: {RU: item.name} }))"
                    :items-list="getCitiesList.map(item => ({...item, name: {RU: item.name}, categoryId: item.countryId }))"
                    :filter-string="filterString"
                    @changeCategory="changeCountry"
                    @changeItem="changeCity"
                />
            </div>
        </div>
        <CountryAddModal
            v-if="showCountryAddModal"
            :country="country"
            @close="hideCityAddModalHandler"
        />
        <CityAddModal
            v-if="showCityAddModal"
            :city="city"
            @close="hideCityAddModalHandler"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import PreviousPage from '@/components/common/PreviousPage.vue'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import DoubleTable from '@/components/common/CatalogDoubleTable.vue'
import deepCopy from '@/utils/deepCopy'
import InputSearch from '@/components/common/inputs/InputSearch.vue'
import CityAddModal from '@/components/Catalogs/Cities/CityAddModal.vue'
import CountryAddModal from '@/components/Catalogs/Cities/CountryAddModal.vue'

export default {
    name: "CitiesCatalog",
    components: {
        PreviousPage,
        ButtonAdd,
        DoubleTable,
        InputSearch,
        CityAddModal,
        CountryAddModal
    },
    data() {
        return {
            filterString: '',
            showCityAddModal: false,
            showCountryAddModal: false,
            city: {},
            country: {}
        }
    },
    computed: {
        ...mapGetters('city', ['getCitiesList', 'getCountriesList']),
        countriesSelectOptions() {
            return [
                {label: 'Выберите страну', id: ''},
                ...this.getCountriesList.map(cat => ({...cat, label: cat.name || cat.id}))
            ]
        }
    },
    methods: {
        ...mapActions('city', ['callGetCitiesList', 'callGetCountriesList']),
        addCityButtonHandler() {
            this.city = {}
            this.showCityAddModal = true
        },
        addCountryButtonHandler() {
            this.country.name = {RU: ''}
            this.showCountryAddModal = true
        },
        hideCityAddModalHandler(update) {
            this.showCityAddModal = false
            this.showCountryAddModal = false
            if (update === true) {
                this.callGetCitiesList()
                this.callGetCountriesList()
            }
        },
        changeCity(city) {
            this.city = city
            this.showCityAddModal = true
        },
        changeCountry(country) {
            this.country = country
            this.showCountryAddModal = true
        },

    },
}
</script>

<style lang="stylus" scoped>
    .cities-catalog
        .v-select .dropdown-toggle
            height 44px
</style>
