<template>
    <Modal
        class="add-hotel"
        :title="newHotel && newHotel.id ? 'Изменить отель' : 'Добавить отель'"
        @close="$emit('close')"
        @submit="onSubmit"
    >
        <div slot="body">
            <Label>
                <template slot="label">
                    Название отеля
                </template>
                <template slot="popoverText">
                    <pre>{{ $t('help.hotelName') }}</pre>
                </template>
            </Label>
            <input
                v-model="newHotel.name"
                type="text"
                placeholder="Название отеля"
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
                    v-model="newHotel.contactInfo"
                    :contacts="newHotel.contactInfo"
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
    name: "HotelAddModal",
    components: {
        Modal,
        Select,
        Label,
        Contact
    },
    props: {
        hotel: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            newHotel: {},
            country: {},
            city: {}
        }
    },
    computed: {
        ...mapGetters('city', ['getCountriesList', 'getCitiesList']),
        citiesList() {
            return this.getCitiesList.filter(city => {
                if ((this.country || {}).id) {
                    return city.countryId === this.country.id
                }
                return true
            })
        },
    },
    created() {
        this.newHotel = Object.assign({}, this.hotel)
        this.country = this.newHotel.country
        this.city = this.newHotel.city
    },
    methods: {
        ...mapActions('hotel', ['callAddHotel', 'callUpdateHotel']),
        onSubmit() {
            this.newHotel && this.newHotel.id ? this.updateHotelHandler() : this.addHotelHandler()
        },
        validateForm() {
            if(!this.newHotel.name) {
                this.$snotify.warning('Введите название отеля')
            } else if(!this.country.id) {
                this.$snotify.warning('Выберите страну')
            } else if(!this.city.id) {
                this.$snotify.warning('Выберите город')
            } else if(this.newHotel.contactInfo.every(i => {return i === null})) {
                this.$snotify.warning('Укажите хотя бы один контакт')
            } else if(this.newHotel.contactInfo.some(i => {
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
        addHotelHandler() {
            this.newHotel = {...this.newHotel, city: this.city, country: this.country}
            if(this.validateForm()) {
                this.callAddHotel(this.newHotel).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Отель добавлен')
                    } else {
                        this.$snotify.error('Ошибка добавления отеля')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        updateHotelHandler() {
            this.newHotel = {...this.newHotel, city: this.city, country: this.country}
            if(this.validateForm()) {
                this.callUpdateHotel(this.newHotel).then(data => {
                    if (data && data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Отель обновлен')
                    } else {
                        this.$snotify.error('Ошибка обновления города')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        changeCountryHandler() {
            this.city = {}
        }
    }
}
</script>

<style lang="stylus" scoped>
    .add-hotel
        input[type=text], input[type=email]
            width 100%
            height 48px
        .v-select .dropdown-toggle
            height 44px
</style>

