<template>
    <div
        v-if="allow('viewStores')"
        class="container stores"
    >
        <div class="d-flex align-items-center justify-content-end">
            <ButtonAdd
                v-if="allow('addingStore')"
                text="Добавить магазин"
                @click="addStoreButtonHandler"
            />
        </div>
        <div class="partners__table mt-4 with-shadow">
            <table>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Контактная информация</th>
                        <th>Товары</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="stor in storesList"
                        :key="stor.id"
                        @click="shopRowClickHandler(stor.id)"
                    >
                        <td class="partners-list__shop-name">
                            {{ stor.name }}
                        </td>
                        <td>
                            <template v-if="stor.contactInfo">
                                <div
                                    v-for="(contact, $i) in stor.contactInfo"
                                    :key="$i"
                                >
                                    {{ contact.type.type }}: {{ contact.value }}
                                </div>
                            </template>
                        </td>
                        <td>{{ stor.goodIds && stor.goodIds.length }}</td>
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
                v-show="!storesList.length"
                class="no-items"
            >
                Не найдено ни одного магазина для данного представления.
                <a
                    class="link link__underline link__blue"
                    href="#"
                    @click.prevent="addStoreButtonHandler"
                >
                    Добавить
                </a>
            </div>
        </div>
        <StoreAddModal
            v-if="showStoreAddModal"
            :store="store"
            @close="hideStoreAddHandler"
        />
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import StoreAddModal from '@/components/Catalogs/Stores/StoreAddModal.vue'

import xstore from '@/store'

export default {
    name: 'Stores',
    components: {
        ButtonAdd,
        StoreAddModal
    },
    data() {
        return {
            store: {},
            city: {},
            showStoreAddModal: false,
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
        }
    },
    beforeRouteEnter(to, from, next) {
        xstore.dispatch('store/callGetStores', xstore.getters.currentUserRole.context).then(() => {
            next()
        })
    },
    computed: {
        ...mapGetters(['allow', 'currentUserRole']),
        ...mapGetters('store', ['storesList']),
        ...mapGetters('city', ['getCountriesList', 'getCitiesList']),
        citiesList() {
            return this.getCitiesList.filter(city => {
                if (this.store.country && this.store.country.id) {
                    return city.countryId === this.store.country.id
                }
                return true
            })
        },
    },
    // created() {
    //     this.callGetStores(this.currentUserRole.context)
    // },
    methods: {
        ...mapActions('store', ['callGetStores']),
        addStoreButtonHandler() {
            this.store = {}
            this.showStoreAddModal = true
        },
        hideStoreAddHandler(update) {
            this.store = {}
            this.showStoreAddModal = false
            if (update === true) {
                this.callGetStores(this.currentUserRole.context)
            }
        },
        shopRowClickHandler(id) {
            if (id) {
                this.$router.push(`/partners/stores/${id}`)
            }
        },
    }
}
</script>

<style lang="stylus">
    .stores {
        .partners__table {
            tbody {
                tr {
                    cursor pointer
                }
            }
        }
        td, th {
            &:nth-child(1) {
                width 35%
            }
            &:nth-child(3) {
                width 80px
            }
            &:nth-child(4) {
                width 40px
            }
        }
        .no-items {
            padding 16px
            font-size 14px
        }
    }


</style>
