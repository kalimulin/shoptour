<template>
    <div class="label-with-popover">
        <label>
            <slot name="label" />
        </label>
        <v-popover
            offset="16"
        >
            <img
                class="ml-1"
                src="@/assets/images/icons/question-circle.png"
                alt=""
            >

            <template slot="popover">
                <a
                    v-close-popover
                    class="tooltip-close"
                >
                    <img
                        src="@/assets/images/icons/close.svg"
                        alt=""
                    >
                </a>
                <slot name="popoverText" />
            </template>
        </v-popover>
    </div>
</template>

<script>
export default {
    name: "LabelWithPopover",
}
</script>

<style lang="stylus">
.label-with-popover
    display flex
    align-items center
    img
        max-height 16px
        margin-bottom 0.5rem
.tooltip
    max-width 600px

a, img
    cursor: pointer
</style>
