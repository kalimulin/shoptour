<template>
    <div
        class="tour-agency__tab-content"
    >
        <div class="tour-agency__clients mt-4">
            <div class="d-flex align-items-center justify-content-between">
                <InputSearch
                    v-model="clientsFilterString"
                    placeholder="Введите имя клиента или номер карты"
                />
                <ButtonAdd
                    text="Добавить клиента"
                    @click="addClientButtonHandler"
                />
            </div>
            <div
                v-if="filteredClientsList.length > 0"
                class="with-shadow mt-4 tour-agency__clients-table"
            >
                <table>
                    <thead>
                        <tr>
                            <th>Клиент</th>
                            <th>Контактная информация</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="item in filteredClientsList"
                            :key="item.id"
                            @click="clientClickHandler(item)"
                        >
                            <td class="d-flex align-items-center">
                                <img
                                    class="round img-responsive"
                                    src="@/assets/images/client-photo.jpg"
                                    alt=""
                                >
                                <div class="ml-2">
                                    <div>{{ item.fullName }}</div>
                                    <div>{{ item.age }} лет</div>
                                </div>
                            </td>
                            <td>
                                <template v-if="item.contactInfo">
                                    <div
                                        v-for="(contact, $i) in item.contactInfo"
                                        :key="$i"
                                    >
                                        {{ contact.type.type }}: {{ contact.value }}
                                    </div>
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div
                v-else
                class="with-shadow tour-agency__no-clients"
            >
                <h1>Нет клиентов</h1>
            </div>
        </div>
        <AddTourAgencyClient
            v-if="showClientAddModal"
            :tour-agency-id="$route.params.id"
            @close="hideClientAddHandler"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import InputSearch from '@/components/common/inputs/InputSearch.vue'
import AddTourAgencyClient from '@/components/Partners/Popups/AddTourAgencyClientPopup.vue'

export default {
    name: "TourAgencyClients",
    components: {
        ButtonAdd,
        InputSearch,
        AddTourAgencyClient
    },
    data() {
        return {
            clientsFilterString: '',
            showClientAddModal: false,
            client: {}
        }
    },
    computed: {
        ...mapGetters('client', ['getClientsList']),
        clientsList() {
            return this.getClientsList.filter(item => (item.referer || {}).tourAgencyId === this.$route.params.id)
        },
        filteredClientsList() {
            if (!!this.clientsFilterString) {
                return this.clientsList.filter(client => client.fullName.toLowerCase().includes(this.clientsFilterString.toLowerCase()))
            } else {
                return this.clientsList
            }
        }

    },
    methods: {
        ...mapActions('client', ['callAddClient', 'callGetClientsList']),
        addClientButtonHandler() {
            this.client = {tourAgencyId: this.$route.params.id}
            this.showClientAddModal = true
        },
        clientClickHandler(client) {
            this.$router.push(`/client/${client.id}`)
        },
        hideClientAddHandler(update) {
            this.showClientAddModal = false
            if (update === true) {
                this.callGetClientsList()
            }
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"
    .tour-agency__clients
        .v-select .dropdown-toggle
            background white
            border 1px solid #d8d8d8
            height 48px

        .tour-agency__clients-table
            td {
                text-align left
            }

            tr
                cursor pointer

        .tour-agency__no-clients
            margin-top 15px
            padding 5px
            text-align center

            h1
                margin 0
                padding 0
</style>
