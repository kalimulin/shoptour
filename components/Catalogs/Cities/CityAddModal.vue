<template>
    <Modal
        class="add-city"
        :title="newCity && newCity.id ? 'Изменить город' : 'Добавить город'"
        @close="$emit('close')"
        @submit="onSubmit"
    >
        <div slot="body">
            <Label>
                <template slot="label">
                    Название города
                </template>
                <template slot="popoverText">
                    <pre>{{ $t('help.cityName') }}</pre>
                </template>
            </Label>
            <input
                v-model="newCity.name.RU"
                type="text"
                placeholder="Название города"
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
                    v-model="newCity.country"
                    :options="getCountriesList"
                    placeholder="Выберите страну"
                />
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Select from '@/components/common/Select.vue'
import Modal from '@/components/common/Modal.vue'
import Label from '@/components/common/LabelWithPopover.vue'


export default {
    name: "AddCityModal",
    components: {
        Modal,
        Label,
        Select
    },
    props: {
        city: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            newCity: {},
        }
    },
    computed: {
        ...mapGetters('city', ['getCountriesList']),
    },
    created() {
        this.newCity = Object.assign({}, this.city)
        if (!this.newCity.name) {
            this.newCity.name = {RU: ''}
        }
        if (this.newCity.countryId) {
            this.newCity.country = this.getCountriesList.find(country => country.id === this.newCity.countryId)
        }
    },
    methods: {
        ...mapActions('city', ['callAddCity', 'callUpdateCity']),
        onSubmit() {
            this.newCity && this.newCity.id ? this.updateCity() : this.addCity()
        },
        validateCity() {
            if((this.newCity.name || {}).RU === '') {
                this.$snotify.warning('Введите название города')
            } else if(!this.newCity.country) {
                this.$snotify.warning('Выберите страну')
            } else {
                return true
            }
            return false
        },
        addCity() {
            if(this.validateCity()) {
                if (((this.newCity || {}).country || {}).id) {
                    this.callAddCity({city: this.newCity}).then(data => {
                        if (data.Id) {
                            this.$emit('close', true)
                            this.newCity = {}
                            this.$snotify.success('Город добавлен')
                        } else {
                            this.$snotify.error('Ошибка добавления города')
                        }
                    }).catch(error => {
                        console.log(error)
                        this.$snotify.error('Ошибка выполнения запроса')
                    })
                } else {
                    this.$snotify.warning('Выберите страну')
                }
            }
        },
        updateCity() {
            if(this.validateCity()) {
                if (((this.newCity || {}).country || {}).id) {
                    this.callUpdateCity({city: this.newCity}).then(data => {
                        // console.log(data)
                        if (data.Id) {
                            this.$emit('close', true)
                            this.newCity = {}
                            this.$snotify.success('Город обновлен')
                        } else {
                            this.$snotify.success('Ошибка обновления города')
                        }
                    }).catch(error => {
                        console.log(error)
                        this.$snotify.error('Ошибка выполнения запроса')
                    })
                } else {
                    this.$snotify.warning('Выберите страну')
                }
            }
        },

    }
}
</script>

<style lang="stylus">
    .add-city
        input[type=text]
            width 100%
            height 48px
</style>
