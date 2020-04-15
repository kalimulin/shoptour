<template>
    <Modal
        class="add-client"
        title="Добавить клиента"
        @close="$emit('close')"
        @submit="addClient"
    >
        <div slot="body">
            <Label>
                <template slot="label">
                    Имя клиента
                </template>
                <template slot="popoverText">
                    <pre>
                        Укажите имя клиента
                    </pre>
                </template>
            </Label>
            <input
                v-model="client.fullName"
                type="text"
                placeholder="Имя клиента"
            >
            <div class="row gutter-2">
                <div class="col w-50">
                    <div class="mt-2">
                        <Label>
                            <template slot="label">
                                Возраст клиента
                            </template>
                            <template slot="popoverText">
                                <pre>
                                    Укажите возраст клиента
                                </pre>
                            </template>
                        </Label>
                        <input
                            v-model="client.age"
                            type="text"
                            placeholder="Возраст"
                        >
                    </div>
                </div>
                <div class="col w-50">
                    <div class="mt-2">
                        <Label>
                            <template slot="label">
                                Пол
                            </template>
                            <template slot="popoverText">
                                <pre>
                                    Укажите пол клиента
                                </pre>
                            </template>
                        </Label>
                        <Select
                            v-model="gender"
                            :options="genders"
                            placeholder="Пол"
                        />
                    </div>
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
                    v-model="client.contactInfo"
                    :contacts="client.contactInfo"
                />
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Modal from '@/components/common/Modal.vue'
import Select from '@/components/common/Select.vue'
import Contact from '@/components/common/Contact.vue'
import Label from '@/components/common/LabelWithPopover.vue'

export default {
    name: "AddTourAgencyClient",
    components: {
        Modal,
        Select,
        Contact,
        Label,
    },
    props: {
        tourAgencyId: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            client: {},
            gender: {}
        }
    },
    computed: {
        ...mapGetters(['genders']),
    },
    methods: {
        ...mapActions('client', ['callAddClient']),
        addClient() {
            if (!this.client.fullName) {
                this.$snotify.error('Введите имя клиента')
            } else if(!this.client.age) {
                this.$snotify.error('Введите возраст клиента')
            } else if(!(this.gender || {}).name) {
                this.$snotify.error('Укажите пол клиента')
            } else if (this.client.contactInfo && this.client.contactInfo.every(i => {return i === null})) {
                this.$snotify.error('Укажите хотя бы один контакт')
            } else if(!this.client.contactInfo || !this.client.contactInfo.some(i => {
                if(!!i) {
                    return !i.Key || !i.Value
                }
                return false
            })) {
                this.$snotify.warning('Полностью заполните указанные контакты')
            } else {
                this.callAddClient({...this.client, gender: this.gender.name, tourAgencyId: this.tourAgencyId}).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.client = {}
                        this.$snotify.success('Клиент добавлен')
                    } else {
                        this.$snotify.error('Ошибка добавления клиента')
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
