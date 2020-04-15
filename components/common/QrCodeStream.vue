<template>
    <div
        class="qrcode-stream-mask"
    >
        <div class="qrcode-stream-wrapper">
            <qrcode-stream
                @init="onInit"
                @decode="onDecode"
            />
            <div class="corner corner-left corner-top">
                <img
                    src="../../assets/images/corner-blue-left-top.svg"
                    alt=""
                >
            </div>
            <div class="corner corner-right corner-top">
                <img
                    src="../../assets/images/corner-blue-right-top.svg"
                    alt=""
                >
            </div>
            <div class="corner corner-left corner-bottom">
                <img
                    src="../../assets/images/corner-blue-left-bottom.svg"
                    alt=""
                >
            </div>
            <div class="corner corner-right corner-bottom">
                <img
                    src="../../assets/images/corner-blue-right-bottom.svg"
                    alt=""
                >
            </div>
        </div>
        <div
            class="close button-blue blue-fill"
            @click="$emit('close')"
        >
            <span>Закрыть сканирование</span>
            <img
                src="../../assets/images/icons/close-white.svg"
                class="ml-1"
                alt=""
            >
        </div>
        <Modal
            v-if="cameraError"
            :submit-button="false"
            title="Камера недоступна"
            @close="$emit('close')"
        >
            <div slot="body">
                {{ cameraErrorText }}
            </div>
        </Modal>
    </div>
</template>

<script>
import {QrcodeStream} from 'vue-qrcode-reader'
import Modal from '@/components/common/Modal.vue'

export default {
    name: 'QrCodeStream',
    components: {
        QrcodeStream,
        Modal
    },
    data() {
        return {
            show: false,
            cameraError: false,
            cameraErrorText: ''
        }
    },
    methods: {
        async onInit(promise) {
            this.cameraError = false
            try {
                await promise
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                    console.log('User denied camera access permisson')
                    this.cameraErrorText = 'Доступ к камере запрещен в настройках браузера'
                } else if (error.name === 'NotFoundError') {
                    console.log('No suitable camera device installed')
                    this.cameraErrorText = 'Камера не установлена или не подключена'
                } else if (error.name === 'NotSupportedError') {
                    console.log('Page is not served over HTTPS (or localhost)')
                    this.cameraErrorText = 'Страница загружена по протоколу HTTP вместо HTTPS'
                } else if (error.name === 'NotReadableError') {
                    console.log('Maybe camera is already in use')
                    this.cameraErrorText = 'Камера занята'
                } else if (error.name === 'OverconstrainedError') {
                    console.log('Did you requested the front camera although there is none?')
                } else if (error.name === 'StreamApiNotSupportedError') {
                    console.log('Browser seems to be lacking features')
                }
                this.cameraError = true
            }
        },
        onDecode(decodedString) {
            this.$emit('decode', decodedString)
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"

.qrcode-stream-mask
    display flex
    top: 0
    left: 0
    position fixed
    z-index 10
    width 100%
    height 100%
    background-color rgba(0,0,0,0.85)
    .qrcode-stream-wrapper
        position relative
        margin auto
        max-width 75%
        .corner
            position absolute
            &.corner-top
                top: -6px
            &.corner-bottom
                bottom: -6px
            &.corner-left
                left: -6px
            &.corner-right
                right -6px
    .close
        position absolute
        right indent(2)
        top indent(2)
        display flex
        align-items center
</style>
