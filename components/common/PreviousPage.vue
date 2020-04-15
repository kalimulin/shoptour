<template>
    <div class="previous-page">
        <div
            class="previous-page__back"
            @click="prevButtonHandler"
        >
            <img
                src="@/assets/images/icons/chevron-left-white.svg"
                alt=""
            >
        </div>
        <div class="d-flex align-items-center">
            <span>{{ title }}</span>
            <img
                v-if="showEdit === true"
                class="ml-1 previous-page__edit"
                src="@/assets/images/icons/iconfinder_edit-3_2561260.svg"
                alt=""
                @click="$emit('edit')"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "PreviousPage",
    props: {
        title: {
            type: String,
            default: ''
        },
        showEdit: {
            type: Boolean,
            default: false
        },
        prev: {
            type: String,
            default: '/'
        }
    },
    methods: {
        prevButtonHandler() {
            if (this.prev && this.prev.length > 1) {
                this.$router.push(this.prev)
            } else if (this.$route.meta && this.$route.meta.prev) {
                this.$router.push(this.$route.meta.prev)
            } else {
                this.$router.go(-1)
            }
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"
    .previous-page {
        height 48px
        background-color #283E6A
        display flex
        align-items center
        color color-white
        line-height 24px
        font-size 14px
        font-weight bold
        .previous-page__back {
            display flex
            height 48px
            width 48px
            background-color #10244B
            cursor pointer
            margin-right indent(2)
            img {
                margin auto
                cursor pointer
            }
        }
        .previous-page__edit {
            cursor pointer
        }
    }
</style>
