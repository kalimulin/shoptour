<template>
    <Modal
        class="set-category-percent"
        title="Установить процент на категорию"
        :thin="true"
        @close="$emit('close')"
        @submit="setPercent"
    >
        <div slot="body">
            <div class="mt-2">
                <input
                    v-model="newPercent"
                    type="number"
                    pattern="[0-9]*"
                    min="0"
                    max="100"
                >
            </div>
        </div>
    </Modal>
</template>

<script>
import Modal from '@/components/common/Modal.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'SetPercentInStorePopup',
    components: {
        Modal,
    },
    props: {
        category: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            newPercent: 0
        }
    },
    computed: {
        ...mapGetters('goods', ['categoriesList'])
    },
    created() {
        this.newPercent = this.category.percent
    },
    methods: {
        ...mapActions('store', ['callGetStore', 'callSetPercentInStore']),
        setPercent() {
            this.callSetPercentInStore({storeId: this.category.storeId, id: this.category.id, percent: this.newPercent}).then(data => {
                if (data.Id) {
                    this.$emit('close', true)
                    this.form = {}
                    this.$snotify.success('Процент установлен')
                } else {
                    this.$snotify.error('Ошибка установки процента')
                }
            }).catch(error => {
                console.log(error)
                this.$snotify.error('Ошибка выполнения запроса')
            })
        }
    }
}
</script>

<style lang="stylus">
    .set-category-percent
        input
            border 1px solid #d8d8d8
            font-size 14px
            width 100%
            height 48px
        .dropdown-toggle
            height 44px
</style>
