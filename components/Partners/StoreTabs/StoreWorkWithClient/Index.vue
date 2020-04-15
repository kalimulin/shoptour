<template>
    <div class="store-work-with-client">
        <div class="store-work-with-client__client-finder">
            <client-finder-input
                v-model="clientSearchString"
            />
            <ScanQrButton
                class="store-work-with-client__qr-button"
                @click="showQrReader = true"
            />
        </div>
        <div
            v-if="client.Id"
            class="store-work-with-client__client-content with-shadow"
        >
            <div class="store-work-with-client__client-info">
                <div class="store-work-with-client__client">
                    <div class="store-work-with-client__client-photo">
                        <img
                            src="@/assets/images/client-photo.jpg"
                            alt=""
                        >
                    </div>
                    <div>
                        <div class="store-work-with-client__client-name">
                            {{ client.FullName }}
                            <!--                            <img-->
                            <!--                                v-if="allow('changeStoreInfo')"-->
                            <!--                                src="@/assets/images/icons/iconfinder_edit-3_2561260.svg"-->
                            <!--                                alt=""-->
                            <!--                                class="store-work-with-client__edit-client"-->
                            <!--                                @click="editClientHandler"-->
                            <!--                            >-->
                        </div>
                        <div class="store-work-with-client__client-age">
                            {{ client.Age }} лет
                        </div>
                    </div>
                </div>
                <div class="store-work-with-client__client-contacts">
                    <div>Контактная информация</div>
                    <div>{{ client.Phone }}</div>
                    <div v-if="client.Email">
                        <a
                            target="_blank"
                            :href="`mailto:${client.Email}`"
                        >
                            {{ client.Email }}
                        </a>
                    </div>
                </div>
                <div>Покупки: {{ purchasesList.length }}</div>
                <ButtonAdd
                    :text="$t('shop.addPurchase')"
                    @click="showAddPurchaseModal = true"
                />
            </div>
            <div class="store-work-with-client__table mt-2">
                <table v-if="purchasesList.length">
                    <thead>
                        <tr>
                            <th>Название товара</th>
                            <th>Дата</th>
                            <th>Наличные</th>
                            <th>Карта</th>
                            <th>Доставка</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="purchase in purchasesList"
                            :key="purchase.Id"
                        >
                            <td>{{ ((getGoodById(purchase.GoodId) || {}).name || {}).RU || '' }}</td>
                            <td>{{ getDateFromString(purchase.Date) }}</td>
                            <td>{{ purchase.Cash.Amount }} {{ purchase.Cash.Currency }}</td>
                            <td>{{ purchase.Card.Amount }} {{ purchase.Card.Currency }}</td>
                            <td>{{ purchase.Delivery.Amount }} {{ purchase.Delivery.Currency }}</td>
                            <td class="store-work-with-client__table-actions" />
                        </tr>
                    </tbody>
                </table>
                <div
                    v-else
                    class="text-center p-2"
                >
                    Покупок нет
                </div>
            </div>
        </div>
        <QrCodeStream
            v-if="showQrReader"
            @close="showQrReader = false"
            @decode="decodedQR"
        />
        <AddPurchasePopup
            v-if="showAddPurchaseModal"
            :store="store"
            :client="client"
            @close="showAddPurchaseModal = false"
        />
        <!--        <EditClient-->
        <!--            v-show="showEditClientPopup"-->
        <!--            :client="client"-->
        <!--            @close="closeEditClient"-->
        <!--        />-->
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import ClientFinderInput from '@/components/Partners/StoreTabs/StoreWorkWithClient/common/ClientFinderInput'
import ScanQrButton from '@/components/Partners/StoreTabs/StoreWorkWithClient/common/ScanQrButton'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import QrCodeStream from '@/components/common/QrCodeStream.vue'
import AddPurchasePopup from '@/components/Partners/Popups/AddPurchasePopup.vue'
import EditClient from '@/components/Partners/Popups/EditClient.vue'

export default {
    name: 'StoreWorkWithClient',
    components: {
        ClientFinderInput,
        ScanQrButton,
        ButtonAdd,
        QrCodeStream,
        AddPurchasePopup,
    },
    props: {
        store: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            clientSearchString: null,
            showQrReader: false,
            client: {},
            showAddPurchaseModal: false,
            showEditClientPopup: false
        }
    },
    computed: {
        ...mapGetters('client', ['purchasesList']),
        ...mapGetters(['allow']),
        ...mapGetters('goods', ['getGoodById'])
    },
    watch: {
        clientSearchString() {
            this.decodedQR(this.clientSearchString)
        }
    },
    methods: {
        ...mapActions('client', ['callClientByCard', 'callGetPurchasesByClientId']),
        decodedQR(code) {
            // проверяем что число, что положительное
            if (code && !isNaN(+code)) {
                this.clientSearchString = Math.abs(+code)
                this.callClientByCard(code).then(data => {
                    if (data.Id) {
                        this.client = data
                        this.callGetPurchasesByClientId(data.Id)
                    } else {
                        this.client = {}
                        this.$snotify.error('Ошибка получения клиента')
                    }
                }).catch(e => {
                    this.client = {}
                    console.log(e)
                })
            } else if (code && code.toString().length) {
                this.$snotify.warning('Номер карты должен состоять из цифр')
            }
        },
        getDateFromString(datetime) {
            return datetime.toString().split('T')[0] || ''
        },
        editClientHandler() {
            this.showEditClientPopup = true
        },
        closeEditClient() {
            this.showEditClientPopup = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~@/assets/variables.styl"
    .store-work-with-client
        .store-work-with-client__client-finder
            display flex
            justify-content space-between
            font-size 14px
            line-height 21px
        .store-work-with-client__qr-button
            margin-left indent(2)

        .store-work-with-client__client-info {
            line-height 21px
            font-size 12px
            padding indent(2)
            display flex
            justify-content space-between
            a {
                color color-blue
            }
            .store-work-with-client__client {
                display flex
                align-items center
                .store-work-with-client__client-photo {
                    width 50px
                    height 50px
                    border-radius 25px
                    overflow hidden
                    margin-right indent(2)
                    img {
                        width 50px
                        height 50px
                    }
                }
                .store-work-with-client__client-name {
                    line-height 21px
                    font-size 14px
                    color color-darkgray
                    font-weight bold
                    img {
                        cursor pointer
                    }
                }
                .store-work-with-client__client-age {
                    line-height 21px
                    font-size 12px
                }
            }
        }
        .store-work-with-client__client-content {
            margin-top indent(2)
        }
        .store-work-with-client__table {
            color color-darkgray
            thead th {
                border-top-width: 1px
            }
            tbody td {
                padding-top indent(2)
                padding-bottom indent(2)
            }
            .store-work-with-client__table-actions {
                text-align right
                padding-right indent(2)
                img {
                    margin-left indent(3)
                    cursor pointer
                }
            }
        }
</style>
