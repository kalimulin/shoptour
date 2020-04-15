<template>
    <div class="contact">
        <div
            v-for="(c, index) in contactsList"
            :key="index"
            class="d-flex row mb-1"
        >
            <Select
                v-model="c.type"
                class="contact-info-type-select"
                :options="getContactInfoTypesList"
                placeholder="Тип контакта"
                label="type"
            />
            <input
                v-model="c.value"
                type="text"
                class="ml-1"
                @input="sendContact"
            >
            <img
                src="@/assets/images/icons/trash-blue.svg"
                class="ml-1"
                @click="deleteContactInput(index)"
            >
        </div>
        <ButtonAdd
            text="Контакт"
            @click="addContactInput"
        />
    </div>
</template>

<script>
import ButtonAdd from '@/components/common/buttons/ButtonAdd'
import {mapGetters} from 'vuex'
import Select from '@/components/common/Select.vue'

export default {
    name: 'Contact',
    components: {
        ButtonAdd,
        Select
    },
    props: {
        contacts: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            contactsList: [],
        }
    },
    computed: {
        ...mapGetters('contactInfoType', ['getContactInfoTypesList']),
    },
    created() {
        this.contactsList = this.contacts.map(item => {
            let contact = Object.assign({}, item)
            if (!contact.type) {
                contact.type = {}
            }
            return contact
        })
        if(this.contactsList.length === 0) {
            this.addContactInput()
        }
    },
    methods: {
        addContactInput() {
            this.contactsList.push({})
        },
        sendContact() {
            let c = this.contactsList.map(item => {
                let i = {}
                i.type = {
                    id: (item.type || {}).id,
                    type: (item.type || {}).type
                }
                i.value = item.value
                return i
            })
            this.$emit('input', c)
        },
        deleteContactInput(item) {
            this.contactsList.splice(item, 1)
            this.sendContact()
        }
    }
}
</script>

<style lang="stylus">
    .contact
        .contact-info-type-select
            min-width 200px
        input[type=text]
            width 100%
            height 48px
            border 1px solid #d8d8d8
        img
            flex-shrink 0
</style>
