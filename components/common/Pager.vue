<template>
    <div class="pager with-shadow">
        <div
            class="pager-item"
            @click="setCurrentPage('prev')"
        >
            <img
                src="../../assets/images/prev-page.svg"
                alt=""
            >
        </div>
        <div
            v-for="number in pagesNumber"
            :key="number"
            class="pager-item"
            :class="{active: number === currentPage}"
            @click="setCurrentPage(number)"
        >
            {{ number }}
        </div>
        <div
            class="pager-item"
            @click="setCurrentPage('next')"
        >
            <img
                src="../../assets/images/next-page.svg"
                alt=""
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pager',
    props: {
        pagesNumber: {
            type: Number,
            default: 1
        },
        currentPageNumber: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            currentPage: 1
        }
    },
    created() {
        this.currentPage = this.currentPageNumber
    },
    methods: {
        setCurrentPage(n) {
            const currentPageNumber = this.currentPage
            if (Number.isNaN(Number(n))) {
                switch (n) {
                case 'next':
                    if (this.currentPage < this.pagesNumber) {
                        this.currentPage = currentPageNumber + 1
                    }
                    break
                case 'prev':
                    if (this.currentPage > 1) {
                        this.currentPage = currentPageNumber - 1
                    }
                    break
                default:
                    this.currentPage = 1
                }
            } else {
                this.currentPage = n
            }
            if (currentPageNumber !== this.currentPage) {
                this.$emit('change', this.currentPage)
            }
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"
    .pager {
        display inline-flex
        height 30px

        .pager-item {
            width 30px
            border-right 1px solid rgba(110, 146, 172, 0.270352)
            text-align center
            font-size 12px
            line-height 30px
            color #333843
            display flex
            flex-direction column

            &:last-child {
                border-right 0
            }

            &.active {
                background-color color-blue
                color white
            }

            img {
                margin auto
            }
        }
    }

</style>
