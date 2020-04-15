<template>
    <Modal
        class="edit-tour-agency"
        title="Изменить турагентство"
        @close="$emit('close')"
        @submit="updateTourAgencyHandler"
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
                v-model="form.name"
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
                    placeholder="Выберите город"
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
                    v-model="form.contactInfo"
                    :contacts="form.contactInfo"
                />
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Modal from '@/components/common/Modal.vue'
import Select from '@/components/common/Select'
import Label from '@/components/common/LabelWithPopover.vue'
import deepCopy from '@/utils/deepCopy'
import Contact from '@/components/common/Contact.vue'

export default {
    name: 'EditTourAgencyPopup',
    components: {
        Modal,
        Select,
        Label,
        Contact
    },
    props: {
        tourAgency: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            form: {
            },
            country: {},
            city: {}
        }
    },
    computed: {
        ...mapGetters(['currentUserRole']),
        ...mapGetters('city', ['getCitiesList', 'getCountriesList']),
        filteredCitiesList() {
            return this.getCitiesList.filter(city => {
                return (this.currentUserRole.context && this.currentUserRole.context !== 'top') ? (city.id === this.currentUserRole.context) : (city.countryId === this.country.id)
            })
        },
        filteredCountriesList() {
            return (this.currentUserRole.context && this.currentUserRole.context !== 'top') ? this.getCountriesList.filter(country => country.id === this.getCitiesList[0].countryId) : this.getCountriesList
        },
    },
    watch: {
        country(value) {
            this.form.countryId = (value || {}).id
        },
        city(value) {
            this.form.cityId = (value || {}).id
        }
    },
    created() {
        this.form = deepCopy(this.tourAgency)
        this.country = this.filteredCountriesList.find(item => item.id === this.form.countryId)
        this.city = this.filteredCitiesList.find(item => item.id === this.form.cityId)
    },
    methods: {
        ...mapActions('user', ['callGetUsersList']),
        ...mapActions('tourAgency', ['callUpdateTourAgency', 'callGetTourAgency']),
        updateTourAgencyHandler() {
            if(!this.form.name) {
                this.$snotify.warning('Укажите название турагенства')
            } else if(!(this.form || {}).countryId) {
                this.$snotify.warning('Укажите страну')
            } else if(!(this.form || {}).cityId) {
                this.$snotify.warning('Укажите город')
            } else if(this.form.contactInfo.every(i => {return i === null})) {
                this.$snotify.warning('Укажите хотя бы один контакт')
            } else if(this.form.contactInfo.some(i => {
                if(!!i) {
                    return !i.value
                }
                return false
            })) {
                this.$snotify.warning('Полностью заполните указанные контакты')
            } else {
                this.callUpdateTourAgency(this.form).then(data => {
                    if (data.Id) {
                        this.$emit('close')
                        this.$snotify.success('Турагентство обновлено')
                        this.callGetTourAgency({agencyId: this.form.id})
                        this.callGetUsersList({name: 'tour-agency-employee', context: this.form.id})
                        this.form = {}
                    } else {
                        this.$snotify.error('Ошибка обновления турагентства')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        changeCountryHandler(country) {
            this.countryId = country.id
            this.city = {}
        }
    },
}
</script>

<style lang="stylus">
    .edit-tour-agency
        input[type=text], input[type=email]
            border 1px solid #d8d8d8
            font-size 14px
            width 100%
            height 48px
        .dropdown-toggle
            height 44px
</style>
