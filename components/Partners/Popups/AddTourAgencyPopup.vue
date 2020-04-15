<template>
    <Modal
        class="add-store"
        title="Добавить турагентство"
        @close="$emit('close')"
        @submit="addStore"
    >
        <div slot="body">
            <Label>
                <template slot="label">
                    Название турагенства
                </template>
                <template slot="popoverText">
                    <pre>{{ $t('help.agencyName') }}</pre>
                </template>
            </Label>
            <input
                v-model="tourAgency.name"
                type="text"
                placeholder="Название турагентства"
            >
            <div class="mt-2">
                <Label>
                    <template slot="label">
                        Страна
                    </template>
                    <template slot="popoverText">
                        <pre>{{ $t('help.chooseCountry') }}</pre>
                    </template>
                </Label>
                <Select
                    v-model="country"
                    :options="filteredCountriesList"
                    :clearable="false"
                    placeholder="Выберите страну"
                    @input="changeCountryHandler"
                />
            </div>
            <div class="mt-2">
                <Label>
                    <template slot="label">
                        Город
                    </template>
                    <template slot="popoverText">
                        <pre>{{ $t('help.chooseCity') }}</pre>
                    </template>
                </Label>
                <Select
                    v-model="city"
                    :options="filteredCitiesList"
                    :clearable="false"
                    placeholder="Выберите город"
                    @input="changeCityHandler"
                />
            </div>
            <div class="mt-2">
                <Label>
                    <template slot="label">
                        Контакты
                    </template>
                    <template slot="popoverText">
                        <pre>
                            {{ $t('help.contacts') }}
                        </pre>
                    </template>
                </Label>
                <Contact
                    v-model="tourAgency.contactInfo"
                />
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapActions} from 'vuex'

import Modal from '@/components/common/Modal.vue'
import Select from '@/components/common/Select'
import Label from '@/components/common/LabelWithPopover.vue'
import Contact from '@/components/common/Contact.vue'

export default {
    name: "AddTourAgencyPopup",
    components: {
        Modal,
        Select,
        Label,
        Contact,
    },
    props: {
        store: {
            type: Object,
            default: () => ({})
        },
        role: {
            type: Object,
            default: () => ({})
        },
        cities: {
            type: Array,
            default: () => ([])
        },
        countries: {
            type: Array,
            default: () => ([])
        }
    },
    data() {
        return {
            city: {},
            country: {},
            tourAgency: {}
        }
    },
    computed: {
        filteredCitiesList() {
            return this.cities.filter(city => {
                return (this.role.context && this.role.context !== 'top') ? (city.id === this.role.context) : (city.countryId === this.country.id)
            })
        },
        filteredCountriesList() {
            return (this.role.context && this.role.context !== 'top') ? this.countries.filter(country => country.id === this.cities[0].countryId) : this.countries
        },
    },
    created() {
        this.tourAgency = {...this.store}
        this.city = this.role.context ? this.filteredCitiesList.find(city => city.id === this.role.context) || {} : {}
        this.country = this.role.context ? this.filteredCountriesList.find(country => country.id === this.city.countryId) || {} : {}
    },
    methods: {
        ...mapActions('tourAgency', ['callAddTourAgency', 'callGetTourAgencies']),
        changeCountryHandler() {
            this.city = {}
        },
        changeCityHandler() {
            this.tourAgency = {
                ...this.tourAgency,
                cityId: this.city.id
            }
        },
        addStore() {
            this.tourAgency.cityId = this.city.id
            this.tourAgency.countryId = this.city.countryId
            if(!this.tourAgency.name) {
                this.$snotify.warning('Укажите название турагенства')
            } else if(!(this.tourAgency || {}).cityId) {
                this.$snotify.warning('Выберите страну и город')
            } else if(this.tourAgency.contactInfo.every(i => {return i === null})) {
                this.$snotify.warning('Укажите хотя бы один контакт')
            } else if(this.tourAgency.contactInfo.some(i => {
                if(!!i) {
                    return !i.value
                }
                return false
            })) {
                this.$snotify.warning('Полностью заполните указанные контакты')
            } else {
                this.callAddTourAgency({store: this.tourAgency}).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.city = {}
                        this.$snotify.success('Турагентство добавлено')
                    } else {
                        this.$snotify.error('Ошибка добавления турагентства')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
    }
}
</script>
