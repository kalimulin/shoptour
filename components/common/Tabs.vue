<template>
    <div class="tabs">
        <div
            v-for="(tab, $index) in tabsList"
            :key="$index"
            class="tab"
            :class="{ active: activeTab === tab }"
            @click="tabClickHandler(tab)"
        >
            {{ tab.label }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    props: {
        tabsList: {
            type: Array,
            default: () => ([])
        },
        selectedTab: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            activeTab: {}
        }
    },
    watch: {
        tabsList() {
            this.setActiveTab()
        }
    },
    created() {
        this.setActiveTab()
    },
    methods: {
        tabClickHandler(tab) {
            this.activeTab = tab
            this.$emit('input', tab)
            this.$emit('change', tab)
        },
        setActiveTab() {
            if (this.tabsList.length && this.selectedTab && this.selectedTab.name) {
                this.activeTab = this.tabsList.find(tab => tab.name === this.selectedTab.name)
            } else if (this.tabsList.length) {
                this.activeTab = this.tabsList[0]
            }
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"

    .tabs {
        display flex
        flex-wrap wrap
        .tab {
            line-height 24px
            font-size 19px
            color #333333
            font-weight bold
            position relative
            margin-right indent(4)
            cursor pointer
            transition 300ms
            margin-bottom 16px

            &:last-child {
                margin-right 0
            }

            &.active {
                color color-blue

                &::after {
                    content: ""
                    position absolute
                    width 100%
                    height 5px
                    background-color color-blue
                    left 0
                    bottom: -5px
                }
            }
        }

    }
</style>
