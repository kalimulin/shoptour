<template>
    <div class="input_search">
        <input
            :value="value"
            type="search"
            :placeholder="placeholder"
            aria-label="search"
            class="input_search"
            @input="$emit('input', $event.target.value)"
        >
        <img
            src="@/assets/images/icons/iconfinder_search_298865.svg"
            alt=""
        >
    </div>
</template>

<script>
export default {
    name: 'InputSearch',
    props: {
        value: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: 'Поиск'
        }
    }
}
</script>

<style lang="stylus" scoped>
.input_search
    display flex
    width 390px
    margin-right auto
    border-bottom 1px solid rgba(155, 166, 175, 0.4)
    input
        border 0
        width 100%
        height 48px
        font-size 14px

</style>
