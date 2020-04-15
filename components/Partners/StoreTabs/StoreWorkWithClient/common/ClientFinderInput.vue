<template>
    <div class="client-finder-input with-shadow">
        <input
            v-model="model"
            type="number"
            min="1"
            placeholder="Введите имя клиента или номер карты"
        >
    </div>
</template>

<script>
export default {
    name: 'ClientFinderInput',
    props: {
        value: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            model: this.value || ''
        }
    },
    watch: {
        value(val) {
            this.model = val || ''
        },
        model(val) {
            this.$emit('input', val || 0)
        }
    }

}
</script>

<style lang="stylus" scoped>
    @import "~@/assets/variables.styl"
    .client-finder-input
        display flex
        padding indent(2)
        flex-grow 1

        input
            flex-grow 1
            background-color transparent
            border 0
            color color-gray
</style>
