<template>
    <div
        class="mt-4 with-shadow"
    >
        <DoubleTable
            :items-list="mappedItemsList"
            :filter-string="filterString"
            :edit-items="false"
            :edit-categories="false"
            :delete-items="addAndDeleteVisitObjectives"
            @deleteItem="deleteObjective"
        />
        <Modal
            v-if="deleteObjectiveConfirmation"
            title="Удалить цель?"
            submit-button-text="Ok"
            close-button-text="Отмена"
            @close="cancelDeteleObjective"
            @submit="confirmObjectiveGood"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Modal from '@/components/common/Modal.vue'
import DoubleTable from '@/components/common/CatalogDoubleTable.vue'

export default {
    name: 'VisitObjectives',
    components: {
        DoubleTable,
        Modal
    },
    props: {
        objectives: {
            type: Array,
            default: () => {[]}
        },
        filterString: {
            type: String,
            default: ''
        },
        addAndDeleteVisitObjectives: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            deleteObjectiveConfirmation: false,
            objective: {}
        }
    },
    computed: {
        ...mapGetters({
            goodsList: 'goods/goodsList',
            categoriesList: 'goods/categoriesList'
        }),
        mappedItemsList() {
            return this.objectives.map(item => ({
                name: {
                    RU: this.getObjectiveGoodName(item)
                },
                id: ((item || {}).Objective || {}).GoodId,
                categoryId: this.getObjectiveGoodCategoryId(item)
            }))
        }
    },
    methods: {
        ...mapActions('visit', ['callDeleteVisitObjective']),
        deleteObjective(item) {
            this.objective = item
            this.deleteObjectiveConfirmation = true
        },
        cancelDeteleObjective() {
            this.objective = {}
            this.deleteObjectiveConfirmation = false
        },
        getObjectiveGoodName(objective) {
            const good = this.goodsList.find(g => {
                return g.id === ((objective || {}).Objective || {}).GoodId
            })
            return ((good || {}).name || {}).RU || ''
        },
        getObjectiveGoodCategoryId(objective) {
            if (this.goodsList && this.goodsList.length) {
                const good = this.goodsList.find(g => {
                    return g.id === ((objective || {}).Objective || {}).GoodId
                })
                if (good) {
                    const category = this.categoriesList.find(c => {
                        return c.id === good.categoryId
                    })
                    return (category || {}).id || ''
                }
            }
            return ''
        },
        confirmObjectiveGood() {
            const objective = this.objectives.find(obj => obj.Objective.GoodId === this.objective.id)
            if (objective && objective.Id) {
                this.callDeleteVisitObjective(objective.Id).then(data => {
                    if (data && data.Id) {
                        this.deleteObjectiveConfirmation = false
                        this.$emit('callVisit')
                        this.$snotify.success('Цель удалена')
                    } else {
                        this.$snotify.error('Ошибка удаления цели')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        }
    }
}
</script>

