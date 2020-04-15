<template>
    <div
        class="scan-qr with-shadow"
        v-on="$listeners"
    >
        <img
            src="@/assets/images/icons/iconfinder_qr_code_2639895.svg"
            alt=""
        >
        <span>Отсканируйте QR-код</span>
    </div>
</template>
<script>
export default {
    name: 'ScanQrButton'
}
</script>
<style lang="stylus" scoped>
    @import "~@/assets/variables.styl"
    .scan-qr
        display flex
        align-items center
        background-color color-blue
        padding indent(2)
        color color-white
        cursor pointer
        img {
            margin-right indent(1)
        }
</style>
