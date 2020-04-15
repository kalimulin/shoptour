<template>
    <Modal
        class="add-contact-info-type"
        title="Добавить тип контакта"
        @close="$emit('close')"
        @submit="addContactInfoType"
    >
        <div slot="body">
            <div class="mt-2">
                <Label>
                    <template slot="label">
                        Название
                    </template>
                    <template slot="popoverText">
                        <pre>{{ $t('help.airlineName') }}</pre>
                    </template>
                </Label>
                <input
                    v-model="newContactInfoType.type"
                    type="text"
                    placeholder="Название"
                >
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapActions} from 'vuex'

import Modal from '@/components/common/Modal.vue'
import Label from '@/components/common/LabelWithPopover.vue'

export default {
    name: "AddContactInfoTypeModal",
    components: {
        Modal,
        Label,
    },
    data() {
        return {
            newContactInfoType: {}
        }
    },
    methods: {
        ...mapActions('contactInfoType', ['callAddContactInfoType']),
        validateForm() {
            if(!this.newContactInfoType.type) {
                this.$snotify.warning('Введите название типа контакта')
                return false
            }
            return true
        },
        addContactInfoType() {
            if(this.validateForm()) {
                this.callAddContactInfoType(this.newContactInfoType.type).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.newContactInfoType = {}
                        this.$snotify.success('Тип контакта добавлен')
                    } else {
                        this.$snotify.error('Ошибка добавления типа контакта')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
    }
}
</script>

<style lang="stylus">
    .add-contact-info-type
        input[type=text], input[type=email]
            width 100%
            height 48px
</style>
