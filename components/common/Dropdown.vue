<template>
    <div
        v-click-outside="hideOptions"
        class="btn-group"
    >
        <li
            v-if="selectedOption && selectedOption.label !== undefined"
            class="dropdown-toggle"
            @click="toggleMenu()"
        >
            {{ selectedOption && selectedOption.label }}
            <span class="caret">
                <img
                    src="../../assets/images/chevron-down.svg"
                    alt=""
                >
            </span>
        </li>

        <li
            v-if="selectedOption && selectedOption.label === undefined"
            class="dropdown-toggle"
            @click="toggleMenu()"
        >
            {{ placeholderText }}
            <span class="caret">
                <img
                    src="../../assets/images/chevron-down.svg"
                    alt=""
                >
            </span>
        </li>

        <ul
            v-if="showMenu"
            class="dropdown-menu"
        >
            <li
                v-for="(option, $index) in options"
                :key="$index"
            >
                <a
                    href="#"
                    @click.prevent="updateOption(option)"
                >
                    {{ option.label }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: [Array, Object],
            default: () => {
                return []
            }
        },
        value: {
            type: [Object],
            default: () => {
                return {}
            }
        },
        placeholder: {
            type: [String],
            default: 'Select...'
        },
    },
    data() {
        return {
            selectedOption: {
                label: '',
            },
            showMenu: false,
            placeholderText: 'Please select an item',
        }
    },
    mounted() {
        if ((this.value || {}).name) {
            this.selectedOption = this.value
        } else {
            this.selectedOption = this.options[0]
        }
        this.$emit('change', this.selectedOption)
        if (this.placeholder) {
            this.placeholderText = this.placeholder
        }
    },

    methods: {
        hideOptions() {
            this.showMenu = false
        },
        updateOption(option) {
            this.selectedOption = option
            this.showMenu = false
            this.$emit('change', this.selectedOption)
        },

        toggleMenu() {
            this.showMenu = !this.showMenu
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"

    .btn-group
        min-width 160px
        position relative
        display inline-flex
        width 100%
    a
        &:hover
            text-decoration none
    .dropdown-toggle
        display: flex
        width 100%
        justify-content space-between
        align-items center
        min-width: 100px
        padding 0 indent(2)
        text-transform none
        font-weight 300
        border 0
        background-color transparent
        transition background 0s ease-out
        float none
        box-shadow none
        border-radius 0
        &:hover
            cursor pointer
    .dropdown-menu
        position absolute
        top 100%
        left 0
        z-index 1000
        float left
        min-width 160px
        padding 5px 0
        margin 2px 0 0
        list-style none
        font-size 12px
        text-align left
        background-color #fff
        border 1px solid #ccc
        border-radius 4px
        box-shadow 0 6px 12px rgba(0, 0, 0, 0.175)
        background-clip padding-box
        & > li
            overflow hidden
            width 100%
            position relative
            margin 0
            & > a
                padding 10px 30px
                display block
                clear both
                font-weight normal
                line-height 1.6
                color #333333
                white-space nowrap
                text-decoration none
                &:hover
                    background #efefef
                    color #409FCB
    .caret
        position relative
        margin-left 2px
        float right
    li
        list-style none

</style>
