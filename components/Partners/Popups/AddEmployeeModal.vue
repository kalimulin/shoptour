<template>
    <Modal
        class="add-client"
        :title="`Добавить ${employee.isManager ? 'менеджера' : 'сотрудника'}`"
        @close="$emit('close')"
        @submit="addEmployee"
    >
        <div slot="body">
            <Label>
                <template slot="label">
                    Имя
                </template>
                <template slot="popoverText">
                    <pre>{{ $t('help.personName') }}</pre>
                </template>
            </Label>
            <input
                v-model="employee.fullName"
                type="text"
                placeholder="Имя"
            >
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
                    v-model="employee.email"
                    type="email"
                    placeholder="Email"
                >
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapActions} from 'vuex'

import Modal from '@/components/common/Modal.vue'
import Label from '@/components/common/LabelWithPopover.vue'

export default {
    name: "EmployeeAddModal",
    components: {
        Modal,
        Label,
    },
    props: {
        tourAgencyId: {
            type: String,
            default: ''
        },
        isManager: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            employee: {}
        }
    },
    created() {
        this.employee.isManager = this.isManager
        this.employee.tourAgencyId = this.tourAgencyId
    },
    methods: {
        ...mapActions('user', ['callAddUser']),
        addEmployee() {
            if (!this.employee.fullName) {
                this.$snotify.error('Введите имя')
            } else if (!this.employee.email) {
                this.$snotify.error('Введите email')
            } else {
                this.callAddUser({employee: this.employee}).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Пользователь добавлен')

                    } else {
                        this.$snotify.error('Ошибка добавления пользователя')
                    }
                }).catch(error => {
                    if ((error || {}).code === 2) {
                        this.$snotify.error('Пользователь с такими данными уже существует')
                    } else {
                        this.$snotify.error('Ошибка ошибка выполнения запроса')
                    }
                })
            }
        },
    }
}
</script>
