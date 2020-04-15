<template>
    <div
        class="button-blue"
        v-on="$listeners"
    >
        <img
            class="img-blue"
            src="@/assets/images/plus-blue.svg"
            alt=""
        >
        {{ text }}
    </div>
</template>

<script>
export default {
    name: 'ButtonAdd',
    props: {
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~@/assets/variables.styl"
</style>
