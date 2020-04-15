<template>
    <div class="modal">
        <div class="modal__modal-mask">
            <div
                class="modal__form-wrapper"
                :class="{'modal__form-wrapper_thin': thin}"
            >
                <form
                    v-click-outside="clickOutside"
                    class="modal__form"
                    @submit.prevent="submitForm"
                >
                    <div class="modal__form-header">
                        <h3>{{ title }}</h3>
                    </div>

                    <div class="modal__form-body">
                        <slot name="body" />
                    </div>

                    <div class="modal__form-footer">
                        <button
                            v-if="closeButton"
                            class="button-blue"
                            type="reset"
                            @click.prevent="closePopup"
                        >
                            {{ closeButtonText }}
                        </button>
                        <button
                            v-if="submitButton"
                            class="button-blue"
                            type="submit"
                        >
                            {{ submitButtonText }}
                        </button>
                    </div>
                    <div
                        class="close-button"
                        @click="closePopup"
                    >
                        <img
                            src="../../assets/images/icons/close.svg"
                            alt=""
                        >
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Popup',
    props: {
        submitButton: {
            type: Boolean,
            default: true
        },
        submitButtonText: {
            type: String,
            default: 'Отправить'
        },
        closeButton: {
            type: Boolean,
            default: true
        },
        closeButtonText: {
            type: String,
            default: 'Закрыть'
        },
        title: {
            type: String,
            default: ''
        },
        thin: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closePopup() {
            this.$emit('close')
        },
        clickOutside(e) {
            // if (e.target.className === 'modal-wrapper') {
            //     this.closePopup()
            // }
        },
        submitForm() {
            this.$emit('submit')
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"
    .modal {
        position fixed
        z-index 999
        top 0
        left 0
        width 100%
        height 100%
        background-color rgba(0, 0, 0, .5)
        overflow auto

        .modal__modal-mask {
            padding-top 16px
            padding-bottom 16px
            display flex
            height 100vh
            overflow auto
        }

        .modal__form-wrapper {
            position relative
            margin auto
            width 640px
            background-color white
            padding 32px
            border-radius 4px
        }

        .modal__form-wrapper_thin {
            width 500px
        }

        .modal__form {
            width 100%
        }
        .modal__form-header {
            h3 {
                margin-top indent(2)
                margin-bottom indent(2)
                color #333333
                font-size 20px
                line-height 28px
            }
        }
        .modal__form-footer {
            margin-top indent(2)
            text-align right
            button {
                display inline-block
                margin-left 16px
                min-width 100px
            }
        }
        .close-button {
            width 12px
            height 12px
            position absolute
            right indent(2)
            top indent(2)
            cursor pointer
            img {
                width 100%
                height 100%
                vertical-align top
            }
        }
    }
</style>
