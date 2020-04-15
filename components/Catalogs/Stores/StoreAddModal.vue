<template>
    <Modal
        class="add-store"
        :title="newStore && newStore.id ? 'Изменить магазин' : 'Добавить магазин'"
        @close="$emit('close')"
        @submit="onSubmit"
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
                v-model="newStore.name"
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
                    v-model="newStore.contactInfo"
                    :contacts="newStore.contactInfo"
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
    name: "StoreAddModal",
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
            newStore: {},
            country: {},
            city: {}
        }
    },
    computed: {
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
    },
    created() {
        this.newStore = Object.assign({}, this.store)
        if ((this.store || {}).countryId) {
            this.country = this.getCountriesList.find(country => country.id === this.store.countryId)
        }
        if ((this.store || {}).cityId) {
            this.city = this.citiesList.find(city => city.id === this.store.cityId)
        }

    },
    methods: {
        ...mapActions('store', ['callAddStore', 'callUpdateStore']),
        onSubmit() {
            this.newStore && this.newStore.id ? this.updateStoreHandler() : this.addStoreHandler()
        },
        addStoreHandler() {
            if(this.validateForm()) {
                this.callAddStore(this.newStore).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Магазин добавлен')
                    } else {
                        this.$snotify.error('Ошибка добавления магазина')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        updateStoreHandler() {
            if(this.validateForm()) {
                this.callUpdateStore(this.newStore).then(data => {
                    if (data && data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Магазин обновлен')
                    } else {
                        this.$snotify.error('Ошибка обновления города')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        validateForm() {
            if(!this.newStore.name) {
                this.$snotify.warning('Введите название магазина')
            } else if(!this.newStore.countryId) {
                this.$snotify.warning('Выберите страну')
            } else if(!this.newStore.cityId) {
                this.$snotify.warning('Выберите город')
            } else if(this.newStore.contactInfo.every(i => {return i === null})) {
                this.$snotify.warning('Укажите хотя бы один контакт')
            } else if(this.newStore.contactInfo.some(i => {
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
        changeCountryHandler() {
            this.city = {}
            this.newStore.cityId = ''
            this.newStore.countryId = this.country.id
        },
        changeCityHandler() {
            this.newStore.cityId = this.city.id
        }
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
