<template>
    <Modal
        class="update-store"
        title="Изменить сведения о магазине"
        @close="$emit('close')"
        @submit="updateStoreHandler"
    >
        <div slot="body">
            <Label>
                <template slot="label">
                    Название магазина
                </template>
                <template slot="popoverText">
                    <pre>{{ $t('help.storeName') }}</pre>
                </template>
            </Label>
            <input
                v-model="updatedStore.name"
                type="text"
                placeholder="Название магазина"
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
                    v-model="updatedStore.contactInfo"
                    :contacts="updatedStore.contactInfo"
                />
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import Modal from '@/components/common/Modal.vue'
import Select from '@/components/common/Select'
import Label from '@/components/common/LabelWithPopover.vue'
import deepCopy from '@/utils/deepCopy'
import Contact from '@/components/common/Contact.vue'

export default {
    name: 'AddVisitObjectivePopup',
    components: {
        Modal,
        Select,
        Label,
        Contact
    },
    props: {
        store: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            updatedStore: {},
            city: {},
            country: {}
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
        this.updatedStore = deepCopy(this.store)
        this.country = this.getCountriesList.find(country => country.id === this.updatedStore.countryId)
        this.city = this.citiesList.find(city => city.id === this.updatedStore.cityId)
    },
    methods: {
        ...mapActions('store', ['callGetStore', 'callUpdateStore']),
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
        updateStoreHandler() {
            if (!this.updatedStore.name) {
                this.$snotify.warning('Введите название магазина')
            } else if (!this.country.id) {
                this.$snotify.warning('Выберите страну')
            } else if (!this.city.id) {
                this.$snotify.warning('Выберите город')
            } else if (this.updatedStore.contactInfo.every(i => {return i === null})) {
                this.$snotify.warning('Укажите хотя бы один контакт')
            } else if(this.updatedStore.contactInfo.some(i => {
                if(!!i) {
                    return !i.value
                }
                return false
            })) {
                this.$snotify.warning('Полностью заполните указанные контакты')
            } else {
                this.callUpdateStore({...this.updatedStore, countryId: this.country.id, cityId: this.city.id}).then(data => {
                    if (data.Id) {
                        this.$emit('close')
                        this.callGetStore(this.updatedStore.id)
                        this.updatedStore = {}
                        this.$snotify.success('Информация обновлена')
                    } else {
                        this.$snotify.error('Ошибка обновления информации')
                    }
                })
            }
        },
        changeCountryHandler() {
            this.city = {}
        }
    }
}
</script>

<style lang="stylus">
    .update-store
        input[type=text]
            border 1px solid #d8d8d8
            font-size 14px
            width 100%
            height 48px
        .dropdown-toggle
            height 44px
</style>
