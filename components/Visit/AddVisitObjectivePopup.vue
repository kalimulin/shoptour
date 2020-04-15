<template>
    <Modal
        class="add-visit-objective"
        title="Добавить цель"
        @close="$emit('close')"
        @submit="addVisitObjectiveHandler"
    >
        <div slot="body">
            <div class="mt-2">
                <Select
                    v-model="objective.good"
                    :options="goodsSelectOptions"
                    label="label"
                    placeholder="Выберите товар"
                />
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Modal from '@/components/common/Modal.vue'
import Select from '@/components/common/Select'

export default {
    name: 'AddVisitObjectivePopup',
    components: {
        Modal,
        Select
    },
    props: {
        visit: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            objective: {}
        }
    },
    computed: {
        ...mapGetters('client', ['getClientsList']),
        ...mapGetters('goods', ['goodsList']),
        goodsSelectOptions() {
            return this.goodsList.map(good => ({...good, label: good.name.RU || good.id})).filter(good => {
                return !this.visit.objectives.some(item => ((item || {}).Objective || {}).GoodId === good.id)
            })
        }
    },
    methods: {
        ...mapActions('visit', ['callAddVisitObjective']),
        addVisitObjectiveHandler() {
            if(this.objective.good) {
                this.callAddVisitObjective({
                    visitId: this.visit.id,
                    goodId: this.objective.good.id
                }).then(data => {
                    if (data.VisitObjective) {
                        this.$emit('close', true)
                        this.objective = {}
                        this.$emit('callVisit')
                        this.$snotify.success('Товар добавлен к целям')
                    } else {
                        this.$snotify.success('Ошибка добавления товара')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            } else {
                this.$snotify.warning('Выберите товар')
            }
        },
    }
}
</script>

<style lang="stylus">
    input[type=text], input[type=email], input[type=number], .vdatetime
        height 48px
        border 1px solid #d8d8d8
        width 100%
</style>
