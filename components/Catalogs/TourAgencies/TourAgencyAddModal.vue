<template>
    <Modal
        :title="newTourAgency && newTourAgency.id ? 'Изменить турагентство' : 'Добавить турагентство'"
        class="add-store"
        @close="$emit('close')"
        @submit="onSubmit"
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
                v-model="newTourAgency.name"
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
                    :options="getCountriesList"
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
                    :options="citiesList"
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
                    v-model="newTourAgency.contactInfo"
                    :contacts="newTourAgency.contactInfo"
                />
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Select from '@/components/common/Select'
import Modal from '@/components/common/Modal.vue'
import Label from '@/components/common/LabelWithPopover.vue'
import Contact from '@/components/common/Contact.vue'

export default {
    name: "TourAgencyAddModal",
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
            newTourAgency: {},
            country: {},
            city: {}
        }
    },
    computed: {
        ...mapGetters('city', ['getCountriesList', 'getCitiesList']),
        citiesList() {
            return this.getCitiesList.filter(city => {
                if (this.country && this.country.id) {
                    return city.countryId === this.country.id
                }
                return true
            })
        },
    },
    created() {
        this.newTourAgency = Object.assign({}, this.tourAgency)
        if (this.tourAgency) {
            this.country = this.getCountriesList.find(item => item.id === this.tourAgency.countryId)
            this.city = this.citiesList.find(item => item.id === this.tourAgency.cityId)
        }

    },
    methods: {
        ...mapActions('tourAgency', ['callAddTourAgency', 'callUpdateTourAgency']),
        onSubmit() {
            this.newTourAgency && this.newTourAgency.id ? this.updateStore() : this.addStore()
        },
        validateForm() {
            if(!this.newTourAgency.name) {
                this.$snotify.warning('Укажите название турагенства')
            } else if(!(this.newTourAgency || {}).cityId || !(this.city || {}).id) {
                this.$snotify.warning('Выберите страну и город')
            } else if(this.newTourAgency.contactInfo.every(i => {return i === null})) {
                this.$snotify.warning('Укажите хотя бы один контакт')
            } else if(this.newTourAgency.contactInfo.some(i => {
                if(!!i) {
                    return !i.value
                }
                return false
            })) {
                this.$snotify.warning('Полностью заполните указанные контакты')
            } else {
                return true
            }
            return false
        },
        addStore() {
            if(this.validateForm()) {
                this.newTourAgency = {
                    ...this.newTourAgency,
                    cityId: this.city.id
                }
                this.callAddTourAgency({store: this.newTourAgency}).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
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
        updateStore() {
            this.newTourAgency = {
                ...this.newTourAgency,
                countryId: this.country.id,
                cityId: this.city.id
            }
            if(this.validateForm()) {
                this.callUpdateTourAgency(this.newTourAgency).then(data => {
                    if (data && data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Турагентство обновлено')
                    } else {
                        this.$snotify.error('Ошибка обновления турагентства')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        changeCountryHandler() {
            this.city = {}
        },
    }
}
</script>

<style lang="stylus">
    .add-store
        input[type=text], input[type=email]
            width 100%
            height 48px
        .v-select .dropdown-toggle
            height 44px
</style>
