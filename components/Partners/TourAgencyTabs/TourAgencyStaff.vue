<template>
    <div
        v-if="allow('viewTourAgencyEmployers')"
        class="tour-agency__tab-content"
    >
        <div class="tour-agency__clients mt-4">
            <div class="d-flex align-items-center justify-content-between">
                <InputSearch
                    v-model="employeeFilterString"
                    placeholder="Введите имя сотрудника"
                />
                <ButtonAdd
                    v-if="allow('addTourAgencyManager')"
                    text="Добавить менеджера"
                    @click="addManagerButtonHandler"
                />
                <ButtonAdd
                    v-if="allow('addTourAgencyEmployee')"
                    class="ml-2"
                    text="Добавить сотрудника"
                    @click="addEmployeeButtonHandler"
                />
            </div>
            <div
                v-if="filteredManagerList.length > 0 || filteredEmployeeList.length > 0"
                class="with-shadow mt-4 tour-agency__employees-table"
            >
                <table>
                    <thead>
                        <tr>
                            <th>Пользователь</th>
                            <th>Email</th>
                            <th>Тип</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody v-if="allow('addTourAgencyManager')">
                        <tr
                            v-for="item in filteredManagerList"
                            :key="item.id"
                        >
                            <td class="d-flex align-items-center">
                                <div>{{ item.identityData.fullName }}</div>
                            </td>
                            <td>
                                <div>{{ item.identityData.email }}</div>
                            </td>
                            <td>
                                менеджер
                            </td>
                            <td>
                                <img
                                    v-if="allow('addTourAgencyManager')"
                                    src="@/assets/images/icons/iconfinder_edit-3_2561260.svg"
                                    class="ml-1 tour-agency__employees_edit"
                                    @click="editUserHandler(item)"
                                >
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-if="allow('addTourAgencyEmployee')">
                        <tr
                            v-for="item in filteredEmployeeList"
                            :key="item.id"
                        >
                            <td class="d-flex align-items-center">
                                <div>{{ item.identityData.fullName }}</div>
                            </td>
                            <td>
                                <div>{{ item.identityData.email }}</div>
                            </td>
                            <td>
                                сотрудник
                            </td>
                            <td>
                                <img
                                    v-if="allow('addTourAgencyEmployee')"
                                    src="@/assets/images/icons/iconfinder_edit-3_2561260.svg"
                                    class="ml-1"
                                    alt=""
                                    @click="editUserHandler(item)"
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div
                v-else
                class="with-shadow tour-agency__no-staff"
            >
                <h1>Нет сотрудников</h1>
            </div>
        </div>
        <AddEmployeeModal
            v-if="showEmployeeAddModal"
            :tour-agency-id="$route.params.id"
            :is-manager="isManager"
            @close="hideEmployeeAddModal"
        />
        <EditEmployeeModal
            v-if="showEmployeeEditModal"
            :tour-agency-id="$route.params.id"
            :employee="employee"
            @close="hideEmployeeAddModal"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import InputSearch from '@/components/common/inputs/InputSearch.vue'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import AddEmployeeModal from '@/components/Partners/Popups/AddEmployeeModal'
import EditEmployeeModal from '@/components/Partners/Popups/EditEmployeeModal'

export default {
    name: "TourAgencyStaff",
    components: {
        InputSearch,
        ButtonAdd,
        AddEmployeeModal,
        EditEmployeeModal
    },
    data() {
        return {
            employeeFilterString: '',
            showEmployeeAddModal: false,
            showEmployeeEditModal: false,
            employeeEditForm: {},
            employee: {},
            isManager: false
        }
    },
    computed: {
        ...mapGetters({
            permissions: 'permissions'
        }),
        ...mapGetters('user', ['getUsersList', 'getManagersList']),
        filteredEmployeeList() {
            return this.getUsersList.filter(user => user.identityData.fullName.toLowerCase().includes(this.employeeFilterString.toLowerCase()))
        },
        filteredManagerList() {
            return this.getManagersList.filter(user => user.identityData.fullName.toLowerCase().includes(this.employeeFilterString.toLowerCase()))
        }
    },
    methods: {
        ...mapActions('user', ['callGetUsersList']),
        hideEmployeeAddModal(update) {
            this.showEmployeeAddModal = false
            this.showEmployeeEditModal = false
            this.employee = {}
            if (update === true) {
                if (this.allow('addTourAgencyManager')) {
                    this.callGetUsersList({
                        name: 'tour-agency-manager',
                        context: this.$route.params.id
                    })
                }
                if (this.allow('addTourAgencyEmployee')) {
                    this.callGetUsersList({
                        name: 'tour-agency-employee',
                        context: this.$route.params.id
                    })
                }
            }
        },
        editUserHandler(user) {
            this.employee = user
            this.showEmployeeEditModal = true
        },
        allow(permission) {
            return !!(this.permissions && this.permissions[permission])
        },
        addEmployeeButtonHandler() {
            this.isManager = false
            this.showEmployeeAddModal = true
        },
        addManagerButtonHandler() {
            this.isManager = true
            this.showEmployeeAddModal = true
        },
    }
}
</script>

<style lang="stylus">
    .tour-agency__employees-table
        td, th
            &:nth-child(2)
                width 35%

            &:nth-child(3)
                width 120px

            &:nth-child(4)
                width 40px

        .tour-agency__employees_edit
            cursor pointer

    .tour-agency__no-staff
        margin-top 15px
        padding 5px
        text-align center

        h1
            margin 0
            padding 0
</style>
