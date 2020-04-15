<template>
    <div
        v-if="allow('viewTourAgencies')"
        class="container tour-agencies"
    >
        <div class="d-flex align-items-center justify-content-end">
            <ButtonAdd
                text="Добавить турагенство"
                @click="addStoreButtonHandler"
            />
        </div>
        <div class="partners__table mt-4 with-shadow">
            <table>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Контактная информация</th>
                        <!--<th>Категории</th>-->
                        <!--<th>Сотрудники</th>-->
                        <!--<th>Выезды</th>-->
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="agency in tourAgenciesList"
                        :key="agency.id"
                        @click="shopRowClickHandler(agency.id)"
                    >
                        <td class="partners-list__shop-name">
                            {{ agency.name || '---' }}
                        </td>
                        <td>
                            <template v-if="agency.contactInfo">
                                <div
                                    v-for="(contact, $i) in agency.contactInfo"
                                    :key="$i"
                                >
                                    {{ contact.type.type }}: {{ contact.value }}
                                </div>
                            </template>
                        </td>
                        <!--<td />-->
                        <!--<td>{{ agency.goodIds && agency.goodIds.length }}</td>-->
                        <!--<td />-->
                        <td>
                            <img
                                src="@/assets/images/icons/chevron-right.svg"
                                alt=""
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
            <div
                v-show="!tourAgenciesList.length"
                class="no-items"
            >
                Не найдено ни одного турагентства для данного представления.
                <a
                    class="link link__underline link__blue"
                    href="#"
                    @click.prevent="addStoreButtonHandler"
                >
                    Добавить
                </a>
            </div>
        </div>
        <AddTourAgencyPopup
            v-if="showStoreAddModal"
            :store="store"
            :role="currentUserRole"
            :cities="getCitiesList"
            :countries="getCountriesList"
            @close="closeStoreAddModal"
        />
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import AddTourAgencyPopup from '@/components/Partners/Popups/AddTourAgencyPopup'

import store from '@/store'

export default {
    name: 'TourAgencies',
    components: {
        ButtonAdd,
        AddTourAgencyPopup
    },
    data() {
        return {
            // думаю, локализации названий категорий должны приходить вместе со списком категорий, потому не стал их переводить
            sortTypesArray: [
                {
                    name: 'Без сортировки'
                },
                {
                    name: 'Шубы'
                },
                {
                    name: 'Особо ценные товары'
                },
                {
                    name: 'Куртки'
                },
                {
                    name: 'Дубленки'
                },
                {
                    name: 'Украшения'
                },
            ],
            selectedSortType: {
                name: 'Без сортировки'
            },
            selectedCountry: {},
            filterString: '',
            showStoreAddModal: false,
            store: {},
            country: {},
            city: {}

        }
    },
    beforeRouteEnter(to, from, next) {
        store.dispatch('tourAgency/callGetTourAgencies', {context: store.getters.currentUserRole.context}).then(() => {
            next()
        })
    },
    computed: {
        ...mapGetters(['allow', 'currentUserRole']),
        ...mapGetters('city', ['getCitiesList', 'getCountriesList']),
        ...mapGetters('tourAgency', ['tourAgenciesList']),
    },
    // mounted() {
    //     this.getTourAgencies()
    // },
    methods: {
        ...mapActions('tourAgency', ['callGetTourAgencies']),
        shopRowClickHandler(id) {
            if (id) {
                this.$router.push(`/partners/tour-agencies/${id}`)
            }
        },
        getTourAgencies() {
            this.callGetTourAgencies({context: this.currentUserRole.context})
        },
        addStoreButtonHandler() {
            this.store = {}
            this.showStoreAddModal = true
        },
        closeStoreAddModal(e) {
            this.showStoreAddModal = false
            if (e === true) {
                this.getTourAgencies()
            }
        }
    }
}
</script>

<style lang="stylus">
    .tour-agencies
        .add-store
            input[type=text] {
                border: 1px solid #d8d8d8;
                font-size: 14px;
            }
            input[type=text], input[type=email]
                width 100%
                height 48px
            .v-select .dropdown-toggle
                height 44px

        .partners__table
            tbody
                tr
                    cursor pointer
                td, th
                    &:nth-child(1)
                        width 40%
                    &:nth-child(3)
                        width 40px
        .no-items {
            padding 16px
            font-size 14px
        }

</style>
