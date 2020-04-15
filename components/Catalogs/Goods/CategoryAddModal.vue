<template>
    <Modal
        class="add-category"
        :title="newCategory && newCategory.id ? 'Изменить категорию' : 'Добавить категорию'"
        @close="$emit('close')"
        @submit="onSubmit"
    >
        <div slot="body">
            <Label>
                <template slot="label">
                    Название категории
                </template>
                <template slot="popoverText">
                    <pre>{{ $t('help.categoryName') }}</pre>
                </template>
            </Label>
            <input
                v-if="newCategory && newCategory.id"
                v-model="newCategory.name.RU"
                type="text"
                placeholder="Название категории (RU)"
            >
            <input
                v-else
                v-model="newCategoryName.RU"
                type="text"
                placeholder="Название категории (RU)"
            >
        </div>
    </Modal>
</template>

<script>
import {mapActions} from 'vuex'
import Modal from '@/components/common/Modal.vue'
import Label from '@/components/common/LabelWithPopover.vue'

export default {
    name: "CategoryAddModal",
    components: {
        Modal,
        Label,
    },
    props: {
        category: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            newCategoryName: {},
            newCategory: {}
        }
    },
    created() {
        this.newCategory = Object.assign({}, this.category)
    },
    methods: {
        ...mapActions('goods', ['callAddCategory', 'callUpdateCategory']),
        onSubmit() {
            this.newCategory && this.newCategory.id ? this.changeCategory() : this.addCategory()
        },
        validateCategory() {
            if(!this.newCategory.name.RU) {
                this.$snotify.warning('Введите имя категории')
            } else {
                return true
            }
            return false
        },
        validateNewCategory() {
            if(!this.newCategoryName.RU) {
                this.$snotify.warning('Введите название категории')
            } else {
                return true
            }
            return false
        },
        addCategory() {
            if(this.validateNewCategory()) {
                // console.log(this.newCategoryName)
                this.callAddCategory(this.newCategoryName).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success(this.$t('messages.addCategorySuccess'))
                    } else {
                        this.$snotify.success(this.$t('messages.addCategoryFail'))
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        changeCategory() {
            if(this.validateCategory()) {
                this.callUpdateCategory(this.newCategory).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.$snotify.success('Категория обновлена')
                    } else {
                        this.$snotify.success('произошла ошибка')
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
    .add-category
        input[type=text]
            width 100%
            height 48px

</style>
