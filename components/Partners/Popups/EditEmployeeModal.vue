<template>
    <Modal
        class="add-client"
        title="Изменить сотрудника"
        :submit-button="false"
        @close="$emit('close')"
    >
        <div slot="body">
            <div class="mt-2">
                <Label>
                    <template slot="label">
                        Имя
                    </template>
                    <template slot="popoverText">
                        <pre>{{ $t('help.personName') }}</pre>
                    </template>
                </Label>
                <input
                    v-model="identityData.fullName"
                    type="text"
                    placeholder="Имя"
                >
                <button
                    class="button-blue mt-1"
                    @click="setFullName"
                >
                    Сохранить имя
                </button>
            </div>
            <div class="mt-2">
                <Label>
                    <template slot="label">
                        Email
                    </template>
                    <template slot="popoverText">
                        <pre>{{ $t('help.email') }}</pre>
                    </template>
                </Label>
                <input
                    v-model="identityData.email"
                    type="email"
                    placeholder="Email"
                >
                <button
                    class="button-blue mt-1"
                    @click="setEmail"
                >
                    Сохранить email
                </button>
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapActions} from 'vuex'

import Modal from '@/components/common/Modal.vue'
import Label from '@/components/common/LabelWithPopover.vue'

export default {
    name: "EditEmployeeModal",
    components: {
        Modal,
        Label,
    },
    props: {
        employee: {
            type: Object,
            default: () => ({identityData: {}})
        }
    },
    data() {
        return {
            newEmployee: {},
            identityData: {}
        }
    },
    created() {
        this.newEmployee = Object.assign({}, this.employee)
        this.identityData = Object.assign({}, this.employee.identityData)
    },
    methods: {
        ...mapActions('user', ['callUpdateEmail', 'callUpdateFullName']),
        setFullName() {
            if (this.identityData.fullName) {
                this.callUpdateFullName({
                    id: this.newEmployee.id,
                    fullName: this.identityData.fullName
                }).then(data => {
                    if (data.Id) {
                        this.$snotify.success('Данные сохранены')
                        this.$emit('close', true)
                    } else {
                        this.$snotify.error('Ошибка сохранения')
                    }
                }).catch(err => {
                    console.log(err)
                    this.$snotify.error('Ошибка ошибка выполнения запроса')
                })
            } else {
                this.$snotify.error('Введите имя')
            }
        },
        setEmail() {
            if (this.identityData.email) {
                this.callUpdateEmail({
                    id: this.newEmployee.id,
                    email: this.identityData.email
                }).then(data => {
                    if (data.Id) {
                        this.$snotify.success('Данные сохранены')
                        this.$emit('close', true)
                    } else {
                        this.$snotify.error('Ошибка сохранения')
                    }
                }).catch(err => {
                    console.log(err)
                    this.$snotify.error('Ошибка ошибка выполнения запроса')
                })
            } else {
                this.$snotify.error('Введите email')
            }
        },
    }
}
</script>
