<template>
    <Modal
        class="add-category"
        :title="newCountry && newCountry.id ? 'Изменить страну' : 'Добавить страну'"
        @close="$emit('close')"
        @submit="onSubmit"
    >
        <div slot="body">
            <Label>
                <template slot="label">
                    Название страны
                </template>
                <template slot="popoverText">
                    <pre>{{ $t('help.countryName') }}</pre>
                </template>
            </Label>
            <input
                v-model="newCountry.name.RU"
                type="text"
                placeholder="Название страны"
            >
        </div>
    </Modal>
</template>

<script>
import {mapActions} from 'vuex'

import Modal from '@/components/common/Modal.vue'
import Label from '@/components/common/LabelWithPopover.vue'

export default {
    name: "CountryAddModal",
    components: {
        Modal,
        Label,
    },
    props: {
        country: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            newCountry: {name: {}}
        }
    },
    created() {
        this.newCountry = Object.assign({}, this.country)
        if (!this.newCountry.name) {
            this.newCountry.name = {RU: ''}
        }
    },
    methods: {
        ...mapActions('city', ['callAddCountry', 'callUpdateCountry']),
        onSubmit() {
            this.newCountry && this.newCountry.id ? this.updateCountry() : this.addCountry()
        },
        validateCountry(country) {
            if(!country) {
                this.$snotify.warning('Введите название страны')
            } else {
                return true
            }
            return false
        },
        addCountry() {
            if(this.validateCountry(this.newCountry.name.RU)) {
                this.callAddCountry({countryName: this.newCountry.name}).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Страна добавлена')
                    } else {
                        this.$snotify.error('Ошибка добавления страны')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        updateCountry() {
            if(this.validateCountry(this.newCountry)) {
                this.callUpdateCountry({country: this.newCountry}).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Страна обновлена')
                    } else {
                        this.$snotify.success('Ошибка обновления страны')
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
