<template>
    <Modal
        class="edit-client"
        title="Изменить информацию о клиенте"
        @close="$emit('close')"
        @submit="saveClientHandler"
    >
        <div slot="body">
            <div class="mt-2">
                <div>
                    <label>Имя клиента</label>
                    <input
                        v-model="form.fullName"
                        type="text"
                    >
                </div>
            </div>
            <div class="mt-2">
                <div>
                    <label>Возраст клиента</label>
                    <input
                        v-model="form.age"
                        type="number"
                        pattern="[0-9]*"
                        min="1"
                    >
                </div>
            </div>
            <div class="mt-2">
                <div>
                    <label>Пол</label>
                    <Select
                        v-model="gender"
                        :options="genders"
                        placeholder="Пол"
                    />
                </div>
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
import Contact from '@/components/common/Contact.vue'
import Label from '@/components/common/LabelWithPopover.vue'
import Select from '@/components/common/Select'

export default {
    name: 'EditClient',
    components: {
        Modal,
        Select,
        Contact,
        Label
    },
    props: {
        client: {
            type: Object,
            default: () => ({})
        },
    },
    data() {
        return {
            form: {},
            clientCardNumber: null,
            showQrReader: false,
            gender: {}
        }
    },
    computed: {
        ...mapGetters(['genders']),
    },
    created() {
        this.form = Object.assign({}, this.client)
        this.gender = this.genders.find(gender => gender.name === this.client.gender)
    },
    methods: {
        ...mapActions('client', ['callUpdateClientContactInfo', 'callUpdateClientFullName', 'callUpdateClientAge', 'callUpdateClientGender', 'callUpdateClientContactInfo']),
        saveClientHandler() {
            if(!this.form.fullName) {
                this.$snotify.warning('Введите имя клиента')
            } else if(!this.form.age) {
                this.$snotify.warning('Введите возраст клиента')
            } else if(!this.gender || !this.gender.name) {
                this.$snotify.warning('Укажите пол клиента')
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
                this.saveClient()
            }
        },
        saveClient() {
            if (this.form.fullName !== this.client.fullName) {
                this.callUpdateClientFullName({...this.form, gender: this.gender.name || ''}).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Имя клиента обновлено')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })

            }
            if (this.form.age !== this.client.age) {
                this.callUpdateClientAge(this.form).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Возраст клиента обновлен')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
            if (this.gender.name !== this.client.gender) {
                this.form.gender = this.gender.name || ''
                this.callUpdateClientGender(this.form).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Пол клиента обновлен')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
            if(this.form.contactInfo !== this.client.contactInfo) {
                this.callUpdateClientContactInfo(this.form).then(data => {
                    if(data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Контактная информация клиента обновлена')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
    },
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"

    .edit-client
        input[type=text], input[type=number]
            border 1px solid #d8d8d8
            font-size 14px
            width 100%
        .dropdown-toggle
            height 44px
        .scan-qr {
            margin-left indent(2)
            display flex
            align-items center
            background-color color-blue
            padding indent(2)
            color color-white
            cursor pointer
            img {
                margin-right indent(1)
            }
        }
        .card-number {
            display flex
            flex-grow 1
        }
    .v-select .dropdown-toggle
        cursor text
        background white
        border 1px solid #d8d8d8

</style>
