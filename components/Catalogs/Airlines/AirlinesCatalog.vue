<template>
    <div class="airlines-catalog">
        <PreviousPage title="Справочник авиакомпаний" />
        <div class="container mt-4">
            <div class="d-flex align-items-center justify-content-between">
                <InputSearch
                    v-model="filterString"
                    placeholder="Введите название авиакомпании"
                />
                <ButtonAdd
                    text="Добавить авиакомпанию"
                    @click="addAirlineButtonHandler"
                />
            </div>
            <div
                v-if="filteredAirlinesList"
                class="mt-4 with-shadow"
            >
                <table>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Контактная информация</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="item in filteredAirlinesList"
                            :key="item.id"
                        >
                            <td>{{ item.name || item.id }}</td>
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
                            <td>
                                <img
                                    src="@/assets/images/icons/iconfinder_edit-3_2561260.svg"
                                    class="airlines-catalog__edit"
                                    @click="changeAirlineButtonHandler(item)"
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div
                    v-show="!filteredAirlinesList.length"
                    class="no-items"
                >
                    Не найдено ни одной авиакомпании.
                    <a
                        class="link link__underline link__blue"
                        href="#"
                        @click.prevent="addAirlineButtonHandler"
                    >
                        Добавить
                    </a>
                </div>
            </div>
        </div>
        <AddAirlineModal
            v-if="showAddAirlineModal"
            :airline="airline"
            @close="hideAddAirlineModal"
        />
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import PreviousPage from '@/components/common/PreviousPage.vue'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import InputSearch from '@/components/common/inputs/InputSearch.vue'
import AddAirlineModal from '@/components/Catalogs/Airlines/AddAirlineModal.vue'

export default {
    name: 'AirlinesCatalog',
    components: {
        PreviousPage,
        ButtonAdd,
        InputSearch,
        AddAirlineModal
    },
    data() {
        return {
            showAddAirlineModal: false,
            filterString: '',
            airline: {}
        }
    },
    computed: {
        ...mapGetters('airline', ['getAirlinesList']),
        filteredAirlinesList() {
            if(this.filterString) {
                return this.getAirlinesList.filter(airline => {
                    return airline.name.toLowerCase().includes(this.filterString.toLowerCase())
                })
            } else {
                return this.getAirlinesList
            }
        }
    },
    created() {
        this.callGetAirlinesList()
    },
    methods: {
        ...mapActions('airline', ['callAddAirline', 'callGetAirlinesList', 'callUpdateAirline']),
        addAirlineButtonHandler() {
            this.airline = {}
            this.showAddAirlineModal = true
        },
        changeAirlineButtonHandler(airline) {
            this.airline = Object.assign({}, airline)
            this.showAddAirlineModal = true
        },
        hideAddAirlineModal(update) {
            this.showAddAirlineModal = false
            if (update === true) {
                this.callGetAirlinesList()
            }
        }
    }
}
</script>

<style lang="stylus">
    .airlines-catalog {
        table {
            td, th {
                &:nth-child(1) {
                    width 35%
                }
                &:nth-child(4) {
                    width 60px
                }
            }
        }
        .no-items {
            padding 16px
            font-size 14px
        }

        .airlines-catalog__edit {
            cursor pointer
        }

    }

</style>
