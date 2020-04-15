<template>
    <div class="contact-types-catalog">
        <PreviousPage title="Справочник типов контактов" />
        <div class="container mt-4">
            <div class="d-flex align-items-center justify-content-between">
                <InputSearch
                    v-model="filterString"
                    placeholder="Введите название типа контакта"
                />
                <ButtonAdd
                    text="Добавить тип контакта"
                    @click="addContactInfoTypeHandler"
                />
            </div>
            <div
                v-if="filteredContactInfoTypesList && filteredContactInfoTypesList.length"
                class="mt-4 with-shadow"
            >
                <table>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="item in filteredContactInfoTypesList"
                            :key="item.id"
                        >
                            <td>{{ item.type || item.id }}</td>
                            <td>
                                <img
                                    src="@/assets/images/icons/trash-blue.svg"
                                    class="contact-types-catalog__remove"
                                    @click="deleteContactInfoTypeHandler(item)"
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div
                    v-show="!filteredContactInfoTypesList.length"
                    class="no-items"
                >
                    Не найдено ни одного типа контактов.
                    <a
                        class="link link__underline link__blue"
                        href="#"
                        @click.prevent="addContactInfoTypeHandler"
                    >
                        Добавить
                    </a>
                </div>
            </div>
            <div
                v-else
                class="mt-2"
            >
                Справочник пуст
            </div>
        </div>
        <AddContactInfoTypeModal
            v-if="showAddContactInfoTypeModal"
            @close="hideAddContactInfoTypeModal"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import PreviousPage from '@/components/common/PreviousPage.vue'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import InputSearch from '@/components/common/inputs/InputSearch.vue'
import AddContactInfoTypeModal from '@/components/Catalogs/ContactInfoTypes/AddContactInfoTypeModal.vue'

export default {
    name: "ContactInfoTypesCatalog",
    components: {
        PreviousPage,
        ButtonAdd,
        InputSearch,
        AddContactInfoTypeModal
    },
    data() {
        return {
            showAddContactInfoTypeModal: false,
            filterString: '',
        }
    },
    computed: {
        ...mapGetters('contactInfoType', ['getContactInfoTypesList']),
        filteredContactInfoTypesList() {
            if(this.filterString) {
                return this.getContactInfoTypesList.filter(contactInfoType => {
                    return contactInfoType.type.toLowerCase().includes(this.filterString.toLowerCase())
                })
            } else {
                return this.getContactInfoTypesList
            }
        }
    },
    created() {
        this.callGetContactInfoTypeList()
    },
    methods: {
        ...mapActions('contactInfoType', ['callGetContactInfoTypeList', 'callDeleteContactInfoType']),
        addContactInfoTypeHandler() {
            this.showAddContactInfoTypeModal = true
        },
        hideAddContactInfoTypeModal(update) {
            this.showAddContactInfoTypeModal = false
            if (update === true) {
                this.callGetContactInfoTypeList()
            }
        },
        deleteContactInfoTypeHandler(item) {
            // console.log('delete Contact type', item)
            // пока заккоментировал, чтобы случайно не нарушить ссылочную целостность
            // this.callDeleteContactInfoType(item.id).then(() => {
            //     this.callGetContactInfoTypeList()
            //     this.$snotify.success('Тип контакта удалён')
            // }).catch(error => {
            //     console.log(error)
            //     this.$snotify.error('Ошибка выполнения запроса')
            // })
        }
    }
}
</script>

<style lang="stylus">
    .contact-types-catalog {
        table {
            td, th {
                &:last-child(1) {
                    width 30%
                }
            }
        }

        .no-items {
            padding 16px
            font-size 14px
        }

        .contact-types-catalog__remove {
            cursor pointer
        }
    }
</style>
