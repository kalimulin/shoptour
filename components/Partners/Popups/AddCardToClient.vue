<template>
    <Modal
        title="Добавить/изменить карту клиента"
        class="add-card-to-client"
        @close="$emit('close')"
        @submit="addCartToClient"
    >
        <div slot="body">
            <div class="mt-2">
                <div class="d-flex">
                    <div class="card-number">
                        <input
                            v-model="clientCardNumber"
                            type="text"
                            placeholder="Введите номер карты"
                            @change="changeClientCardNumber"
                        >
                    </div>
                    <div
                        class="scan-qr"
                        @click="showQrReader = true"
                    >
                        <img
                            src="@/assets/images/icons/iconfinder_qr_code_2639895.svg"
                            alt=""
                        >
                        <span>Отсканируйте QR-код</span>
                    </div>
                </div>
            </div>
            <QrCodeStream
                v-if="showQrReader"
                @close="showQrReader = false"
                @decode="decodedQR"
            />
        </div>
    </Modal>
</template>

<script>
import Modal from '@/components/common/Modal.vue'
import QrCodeStream from '@/components/common/QrCodeStream.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'AddCardToClient',
    components: {
        Modal,
        QrCodeStream
    },
    props: {
        client: {
            type: Object,
            default: () => ({})
        },
        card: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            form: {},
            clientCardNumber: null,
            showQrReader: false
        }
    },
    computed: {
        ...mapGetters('goods', ['goodsList', 'categoriesList']),
        goodsSelectOptions() {
            return this.goodsList.map(good => ({...good, label: ((good || {}).name || {}).RU || '---'}))
        }
    },
    created() {
        this.clientCardNumber = (this.card || '').toString()
    },
    methods: {
        ...mapActions('client', ['callAddCardForClient', 'callGetClient']),
        changeClientCardNumber() {
            // this.decodedQR(this.clientCardNumber)
        },
        decodedQR(code) {
            // console.log(code)
            this.clientCardNumber = code
            if (code.length) {
                this.addCartToClient()
            }
        },
        addCartToClient() {
            if (this.card !== this.clientCardNumber) {
                const cardData = {
                    ClientId: this.client.id,
                    CardNumber: this.clientCardNumber
                }
                this.callAddCardForClient(cardData).then(data => {
                    if (data) {
                        this.callGetClient(this.client.id)
                        this.$snotify.success('Карта добавлена')
                        this.$emit('close')
                    } else {
                        this.$snotify.error('Ошибка добавления карты')
                    }
                }).catch(error => {
                    console.log(error)
                    if (error && error.code === 2) {
                        this.$snotify.warning('Карта уже привязана к другому клиенту')
                    } else {
                        this.$snotify.error('Ошибка выполнения запроса')
                    }
                })
            }
        },
    },
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"

    .add-card-to-client
        input[type=text]
            border 1px solid #d8d8d8
            font-size 14px
            width 100%
            height auto
        .dropdown-toggle
            height 44px
        .scan-qr {
            margin-left indent(2)
            display flex
            align-items center
            background-color color-blue
            padding indent(2)
            color color-white
            cursor pointer
            img {
                margin-right indent(1)
            }
        }
        .card-number {
            display flex
            flex-grow 1
        }
</style>
