<template>
    <Modal
        class="add-tourPartner"
        :title="newTourPartner && newTourPartner.id ? 'Изменить партнера' : 'Добавить партнера'"
        @close="$emit('close')"
        @submit="submitForm"
    >
        <div slot="body">
            <div class="mt-2">
                <Label>
                    <template slot="label">
                        Название
                    </template>
                    <template slot="popoverText">
                        <pre>{{ $t('help.partnerName') }}</pre>
                    </template>
                </Label>
                <input
                    v-model="newTourPartner.name"
                    type="text"
                    placeholder="Название"
                >
            </div>
            <div class="mt-2">
                <Label>
                    <template slot="label">
                        Контакты
                    </template>
                    <template slot="popoverText">
                        <pre>
                            {{ $t('help.contacts') }}
                        </pre>
                    </template>
                </Label>
                <Contact
                    v-model="newTourPartner.contactInfo"
                    :contacts="newTourPartner.contactInfo"
                />
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapActions} from 'vuex'

import Modal from '@/components/common/Modal.vue'
import Label from '@/components/common/LabelWithPopover.vue'
import Contact from '@/components/common/Contact.vue'

export default {
    name: "AddTourPartnerModal",
    components: {
        Modal,
        Label,
        Contact
    },
    props: {
        tourPartner: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            newTourPartner: {}
        }
    },
    created() {
        this.newTourPartner = Object.assign({}, this.tourPartner)
    },
    methods: {
        ...mapActions('tourPartner', ['callAddTourPartner', 'callUpdateTourPartner']),
        submitForm() {
            this.newTourPartner && this.newTourPartner.id ? this.updateTourPartner() : this.addTourPartner()
        },
        addTourPartner() {
            if(this.validateForm()) {
                this.callAddTourPartner(this.newTourPartner).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Партнер по турам добавлен')
                    } else {
                        this.$snotify.error('Ошибка добавления партнера')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        updateTourPartner() {
            if(this.validateForm()) {
                this.callUpdateTourPartner(this.newTourPartner).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Партнер по турам обновлен')
                    } else {
                        this.$snotify.error('Ошибка обновления партнера')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        validateForm() {
            if(!this.newTourPartner.name) {
                this.$snotify.warning('Введите название партнера')
            } else if(this.newTourPartner.contactInfo.every(i => {return i === null})) {
                this.$snotify.warning('Укажите хотя бы один контакт')
            } else if(this.newTourPartner.contactInfo.some(i => {
                if(!!i) {
                    return !i.value
                }
                return false
            })) {
                this.$snotify.warning('Полностью заполните указанные контакты')
            } else {
                return true
            }
            return false
        }
    }
}
</script>

<style lang="stylus">
    .add-tourPartner
        input[type=text], input[type=email]
            width 100%
            height 48px
</style>
