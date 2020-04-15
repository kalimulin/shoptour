<template>
    <div class="hotels-catalog">
        <PreviousPage title="Справочник отелей" />
        <div class="container mt-4">
            <div class="d-flex align-items-center justify-content-between">
                <InputSearch
                    v-model="filterString"
                    placeholder="Введите название отеля"
                />
                <ButtonAdd
                    text="Добавить отель"
                    @click="addHotelButtonHandler"
                />
            </div>
            <div
                v-if="filteredHotelsList && filteredHotelsList.length"
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
                            v-for="item in filteredHotelsList"
                            :key="item.id"
                        >
                            <td>{{ item.name }}</td>
                            <td>
                                <div class="hotels-catalog__city">
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
                                    class="hotels-catalog__edit"
                                    @click="changeHotelButtonHandler(item)"
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div
                    v-show="!filteredHotelsList.length"
                    class="no-items"
                >
                    Не найдено ни одного отеля в справочнике.
                    <a
                        class="link link__underline link__blue"
                        href="#"
                        @click.prevent="addHotelButtonHandler"
                    >
                        Добавить
                    </a>
                </div>
            </div>
        </div>
        <HotelAddModal
            v-if="showHotelAddModal"
            :hotel="hotel"
            @close="hideHotelAddHandler"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import InputSearch from '@/components/common/inputs/InputSearch.vue'
import PreviousPage from '@/components/common/PreviousPage.vue'
import deepCopy from '@/utils/deepCopy'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import HotelAddModal from '@/components/Catalogs/Hotels/HotelAddModal.vue'

export default {
    name: "HotelsCatalog",
    components: {
        PreviousPage,
        InputSearch,
        ButtonAdd,
        HotelAddModal
    },
    data() {
        return {
            filterString: '',
            showHotelAddModal: false,
            hotel: {},
        }
    },
    computed: {
        ...mapGetters('city', ['getCountriesList', 'getCitiesList']),
        ...mapGetters('hotel', ['hotelsList']),
        citiesList() {
            return this.getCitiesList.filter(city => {
                if (this.hotel.country && this.hotel.country.id) {
                    return city.countryId === this.hotel.country.id
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
        filteredHotelsList() {
            if(this.filterString) {
                return this.hotelsList.filter(hotel => {
                    return ((hotel || {}).name || '').toUpperCase().includes(this.filterString.toUpperCase())
                })
            } else {
                return this.hotelsList
            }
        },
        countriesSelectOptions() {
            return [
                {label: 'Без страны', id: ''},
                ...this.getCountriesList.map(country => ({...country, label: country.name || country.id}))
            ]
        },

    },
    methods: {
        ...mapActions('hotel', ['callGetHotels']),
        ...mapActions('city', ['callGetCountriesList', 'callGetCitiesList']),
        hideHotelAddHandler(update) {
            this.hotel = {}
            this.showHotelAddModal = false
            if (update === true) {
                this.getHotels()
            }
        },
        getHotels() {
            this.callGetHotels()
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
        addHotelButtonHandler() {
            this.hotel = {}
            this.showHotelAddModal = true
        },
        changeHotelButtonHandler(hotel) {
            this.hotel = deepCopy(hotel)
            this.hotel.country = this.countriesSelectOptions.find(item => item.id === this.hotel.countryId)
            this.hotel.city = this.citiesSelectOptions.find(item => item.id === this.hotel.cityId)
            this.showHotelAddModal = true
        },
    }
}
</script>

<style lang="stylus">
    .hotels-catalog {
        table {
            td, th {
                &:nth-child(1) {
                    width 34%
                }
                &:nth-child(2) {
                    width 25%
                }
                &:nth-child(4) {
                    width 60px
                }
            }
        }
        .no-items {
            padding 16px
            font-size 14px
        }

        .hotels-catalog__edit {
            cursor pointer
        }
    }
</style>
