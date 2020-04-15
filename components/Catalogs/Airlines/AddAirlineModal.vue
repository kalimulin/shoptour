<template>
    <Modal
        class="add-airline"
        :title="newAirline && newAirline.id ? 'Изменить авиакомпанию' : 'Добавить авиакомпанию'"
        @close="$emit('close')"
        @submit="submitForm"
    >
        <div slot="body">
            <div class="mt-2">
                <Label>
                    <template slot="label">
                        Название
                    </template>
                    <template slot="popoverText">
                        <pre>{{ $t('help.airlineName') }}</pre>
                    </template>
                </Label>
                <input
                    v-model="newAirline.name"
                    type="text"
                    placeholder="Название"
                >
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
                    v-model="newAirline.contactInfo"
                    :contacts="newAirline.contactInfo"
                />
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapActions} from 'vuex'

import Modal from '@/components/common/Modal.vue'
import Label from '@/components/common/LabelWithPopover.vue'
import Contact from '@/components/common/Contact.vue'

export default {
    name: "AddAirlineModal",
    components: {
        Modal,
        Label,
        Contact
    },
    props: {
        airline: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            newAirline: {}
        }
    },
    created() {
        this.newAirline = Object.assign({}, this.airline)
    },
    methods: {
        ...mapActions('airline', ['callAddAirline', 'callUpdateAirline']),
        submitForm() {
            this.newAirline && this.newAirline.id ? this.updateAirline() : this.addAirline()
        },
        validateForm() {
            if(!this.newAirline.name) {
                this.$snotify.warning('Введите название авиакомпании')
            } else if(this.newAirline.contactInfo.every(i => {return i === null})) {
                this.$snotify.warning('Укажите хотя бы один контакт')
            } else if(this.newAirline.contactInfo.some(i => {
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
        addAirline() {
            if(this.validateForm()) {
                this.callAddAirline(this.newAirline).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.newAirline = {}
                        this.$snotify.success('Авиакомпания добавлена')
                    } else {
                        this.$snotify.error('Ошибка добавления авиакомпании')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        updateAirline() {
            if(this.validateForm()) {
                this.callUpdateAirline(this.newAirline).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.newAirline = {}
                        this.$snotify.success('Авиакомпания обновлена')
                    } else {
                        this.$snotify.error('Ошибка обновления авиакомпании')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        }
    }
}
</script>

<style lang="stylus">
    .add-airline
        input[type=text], input[type=email]
            width 100%
            height 48px
</style>
