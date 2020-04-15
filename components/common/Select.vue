<template>
    <multiselect
        v-model="selected"
        :options="options"
        :multiple="multiple"
        :close-on-select="closeOnSelect"
        :clear-on-select="false"
        :hide-selected="false"
        :preserve-search="true"
        :placeholder="placeholder"
        :label="label"
        :track-by="trackBy"
        :preselect-first="false"
        select-label=""
        deselect-label=""
        :show-labels="false"
        :allow-empty="allowEmpty"
        @input="onSelect"
    />
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
    name: "Select",
    components: {
        Multiselect
    },
    props: {
        value: {
            type: [Object, Array],
            default: () => ({})
        },
        multiple: {
            type: Boolean,
            default: false
        },
        options: {
            type: Array,
            default: () => ([])
        },
        placeholder: {
            type: String,
            default: 'Выберите'
        },
        label: {
            type: String,
            default: 'name'
        },
        trackBy: {
            type: String,
            default: 'id'
        },
        allowEmpty: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            selected: {},
        }
    },
    computed: {
        closeOnSelect() {
            return !this.multiple
        }
    },
    watch: {
        value() {
            this.selected = this.multiple ? [...this.value] : Object.assign({}, this.value)
        }
    },
    created() {
        this.selected = this.multiple ? [...this.value] : Object.assign({}, this.value)
    },
    methods: {
        onSelect() {
            this.$emit('input', this.selected)
        }
    }
}
</script>

<style lang="stylus">
    fieldset[disabled]
        .multiselect
            pointer-events none
    .multiselect
        height 48px

        .multiselect__tags input[type=text] {
            border 0 !important
            font-size 14px
            height 40px
            box-sizing border-box
            padding 0 0 0 14px !important
            margin 0
            background-color transparent
        }
    .multiselect__spinner
        position absolute
        right 1px
        top 1px
        width 48px
        height 35px
        background #fff
        display block
        &:before
            animation spinning 2.4s cubic-bezier(.41,.26,.2,.62)
            animation-iteration-count infinite
        &:after
            animation spinning 2.4s cubic-bezier(.51,.09,.21,.8)
            animation-iteration-count infinite
    .multiselect__spinner:after,.multiselect__spinner:before
        position absolute
        content ""
        top 50%
        left 50%
        margin -8px 0 0 -8px
        width 16px
        height 16px
        border-radius 100%
        border 2px solid transparent
        border-top-color #4a90e2
        box-shadow 0 0 0 1px transparent
    .multiselect__loading-enter-active,.multiselect__loading-leave-active
        transition opacity .4s ease-in-out
        opacity 1
    .multiselect__loading-enter,.multiselect__loading-leave-active
        opacity 0
    .multiselect,.multiselect__input,.multiselect__single
        font-family inherit
        font-size 14px
        -ms-touch-action manipulation
        touch-action manipulation
    .multiselect
        box-sizing border-box
        display block
        position relative
        width 100%
        min-height 40px
        text-align left
        border 1px solid #d8d8d8
        color #35495e
        *
            box-sizing border-box
        &:focus
            outline nonemultiselect__single
    .multiselect--disabled
        background #ededed
        pointer-events none
        opacity .6
    .multiselect--active
        z-index 50
        .multiselect__select
            transform rotate(180deg)
        .multiselect__placeholder
            display none
    .multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags
        border-bottom-left-radius 0
        border-bottom-right-radius 0
    .multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags
        border-top-left-radius 0
        border-top-right-radius 0
    .multiselect__input,.multiselect__single
        position relative
        display inline-block
        min-height 20px
        line-height 30px
        border none
        border-radius 5px
        background #fff
        padding 0 0 0 5px
        width 100%
        transition border .1s ease
        box-sizing border-box
        margin-bottom 8px
        vertical-align top
    .multiselect__input
        &:-ms-input-placeholder
            color #35495e
        &::placeholder
            color #35495e
    .multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single
        width auto
    .multiselect__input:hover,.multiselect__single:hover
        border-color #cfcfcf
    .multiselect__input:focus,.multiselect__single:focus
        border-color #a8a8a8
        outline none
    .multiselect__single
        box-sizing border-box
        display flex
        padding 0 0 0 14px !important
        align-items center
        height 40px
        margin 0
    .multiselect__tags-wrap
        display inline
    .multiselect__tags
        min-height 46px
        display block
        padding 5px 0 0 5px
        border-radius 0
        background #fff
        font-size 14px
    .multiselect__tag
        position relative
        display inline-block
        padding 4px 26px 4px 10px
        border-radius 5px
        margin-right 10px
        color #fff
        line-height 1
        background #4a90e2
        margin-bottom 5px
        white-space nowrap
        overflow hidden
        max-width 100%
        text-overflow ellipsis
    .multiselect__tag-icon
        cursor pointer
        margin-left 7px
        position absolute
        right 0
        top 0
        bottom 0
        font-weight 700
        font-style normal
        width 22px
        text-align center
        line-height 22px
        transition all .2s ease
        border-radius 5px
        &:after
            content "\D7"
            color #266d4d
            font-size 14px
    .multiselect__tag-icon:focus,.multiselect__tag-icon:hover
        background #4a90e2
    .multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after
        color #fff
    .multiselect__current
        min-height 40px
        overflow hidden
        padding 8px 30px 0 12px
        white-space nowrap
        border-radius 5px
        border 1px solid #d8d8d8
    .multiselect__current,.multiselect__select
        line-height 16px
        box-sizing border-box
        display block
        margin 0
        text-decoration none
        cursor pointer
    .multiselect__select
        position absolute
        width 40px
        height 100%
        right 1px
        top 1px
        padding 4px 8px
        text-align center
        transition transform .2s ease
        z-index 65
        &:before
            position relative
            right 0
            top 50%
            color #999
            margin-top 4px
            border-color #999 transparent transparent
            border-style solid
            border-width 5px 5px 0
            content ""
    .multiselect__placeholder
        color #adadad
        display inline-block
        margin-bottom 10px
        padding-top 2px
    .multiselect__content-wrapper
        position absolute
        display block
        background #fff
        width 100%
        max-height 240px
        overflow auto
        border 1px solid #d8d8d8
        border-top none
        border-bottom-left-radius 5px
        border-bottom-right-radius 5px
        z-index 50
        -webkit-overflow-scrolling touch
    .multiselect__content
        list-style none
        display inline-block
        padding 0
        margin 0
        min-width 100%
        vertical-align top
        &::webkit-scrollbar
            display none
    .multiselect--above
        .multiselect__content-wrapper
            bottom 100%
            border-bottom-left-radius 0
            border-bottom-right-radius 0
            border-top-left-radius 5px
            border-top-right-radius 5px
            border-bottom none
            border-top 1px solid #d8d8d8
    .multiselect__element
        display block
    .multiselect__option
        display block
        padding 12px
        min-height 40px
        line-height 16px
        text-decoration none
        text-transform none
        vertical-align middle
        position relative
        cursor pointer
        white-space nowrap
        &:after
            top 0
            right 0
            position absolute
            line-height 40px
            padding-right 12px
            padding-left 20px
            font-size 13px
    .multiselect__option--highlight
        background rgba(74, 144, 226, .7)
        outline none
        color #fff
        &:after
            content attr(data-select)
            background #4a90e2
            color #fff
    .multiselect__option--selected
        background rgba(74, 144, 226, 1)
        color #ffffff
        font-weight 700
        &:after
            content attr(data-selected)
            color silver
        &.multiselect__option--highlight
            background rgba(74, 144, 226, .7)
            color #fff
            &:after
                background #ff6a6a
                content attr(data-deselect)
                color #fff
    .multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select
        background #ededed
        color #a6a6a6
    .multiselect__option--disabled
        background #ededed!important
        color #a6a6a6!important
        cursor text
        pointer-events none
        &.multiselect__option--highlight
            background #dedede
    .multiselect__option--group
        background #ededed
        color #35495e
        &.multiselect__option--highlight
            background #35495e
            color #fff
            &:after
                background #35495e
    .multiselect__option--group-selected
        &.multiselect__option--highlight
            background #ff6a6a
            color #fff
            &:after
                background #ff6a6a
                content attr(data-deselect)
                color #fff
    .multiselect-enter-active,.multiselect-leave-active
        transition all .15s ease
    .multiselect-enter,.multiselect-leave-active
        opacity 0
    .multiselect__strong
        margin-bottom 8px
        line-height 20px
        display inline-block
        vertical-align top
    [dir=rtl]
        .multiselect
            text-align right
        .multiselect__select
            right auto
            left 1px
        .multiselect__tags
            padding 8px 8px 0 40px
        .multiselect__content
            text-align right
        .multiselect__option
            &:after
                right auto
                left 0
        .multiselect__clear
            right auto
            left 12px
        .multiselect__spinner
            right auto
            left 1px
    @keyframes spinning
        0%
            transform rotate(0)
        to
            transform rotate(2turn)
</style>
