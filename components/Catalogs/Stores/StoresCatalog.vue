<template>
    <div class="stores-catalog">
        <PreviousPage title="Справочник магазинов" />
        <div class="container mt-4">
            <div class="d-flex align-items-center justify-content-between">
                <InputSearch
                    v-model="filterString"
                    placeholder="Введите название магазина"
                />
                <ButtonAdd
                    text="Добавить магазин"
                    @click="addStoreButtonHandler"
                />
            </div>
            <div
                v-if="filteredStoresList && filteredStoresList.length"
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
                            v-for="item in filteredStoresList"
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
                                    class="stores-catalog__edit"
                                    @click="changeStoreButtonHandler(item)"
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <StoreAddModal
            v-if="showStoreAddModal"
            :store="store"
            @close="hideStoreAddHandler"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import InputSearch from '@/components/common/inputs/InputSearch.vue'
import PreviousPage from '@/components/common/PreviousPage.vue'
import deepCopy from '@/utils/deepCopy'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import StoreAddModal from '@/components/Catalogs/Stores/StoreAddModal.vue'

export default {
    name: "StoresCatalog",
    components: {
        PreviousPage,
        InputSearch,
        ButtonAdd,
        StoreAddModal
    },
    data() {
        return {
            filterString: '',
            showStoreAddModal: false,
            store: {},
            country: {},
            city: {}
        }
    },
    computed: {
        ...mapGetters(['currentUserRole']),
        ...mapGetters('city', ['getCountriesList', 'getCitiesList']),
        ...mapGetters('store', ['storesList']),
        citiesList() {
            return this.getCitiesList.filter(city => {
                return city.countryId === this.country.id
            })
        },
        filteredStoresList() {
            if(this.filterString) {
                return this.storesList.filter(store => {
                    return ((store || {}).name || '').toUpperCase().includes(this.filterString.toUpperCase())
                })
            } else {
                return this.storesList
            }
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
    methods: {
        ...mapActions('city', ['callGetCountriesList', 'callGetCitiesList']),
        ...mapActions('store', ['callGetStores']),
        hideStoreAddHandler(update) {
            this.store = {}
            this.showStoreAddModal = false
            if (update === true) {
                this.getAllStores()
            }
        },
        getAllStores() {
            this.callGetStores(this.currentUserRole.context)
            this.callGetCountriesList()
            this.callGetCitiesList()
        },
        getCityById(id) {
            if (this.citiesList) {
                return this.getCitiesList.find(item => item.id === id) || ''
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
            this.store = {}
            this.showStoreAddModal = true
        },
        changeStoreButtonHandler(store) {
            this.store = store
            this.showStoreAddModal = true
        },
    }
}
</script>

<style lang="stylus">
    .stores-catalog
        table
            td, th
                &:nth-child(1)
                    width 30%

                &:nth-child(2)
                    width 25%

                &:nth-child(4)
                    width 60px

        .stores-catalog__edit
            cursor pointer
</style>
