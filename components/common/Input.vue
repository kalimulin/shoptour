<template>
    <div class="input-group">
        <input
            v-model="content"
            type="text"
            required
            @input="handleInput"
        >
        <span class="highlight" />
        <span class="bar" />
        <label v-if="label">
            {{ label }}
        </label>
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        label: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            content: this.value
        }
    },
    methods: {
        handleInput() {
            this.$emit('input', this.content)
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"

    .input-group
        position relative

        input
            font-size 12px
            padding 10px 10px 10px 5px
            display block
            width 100%
            border none
            border-bottom 1px solid transparent
            background-color transparent

            &:focus
                outline none

                & ~ .highlight
                    -webkit-animation inputHighlighter 0.3s ease
                    -moz-animation inputHighlighter 0.3s ease
                    animation inputHighlighter 0.3s ease

        label
            color #999
            font-size 18px
            font-weight normal
            position absolute
            pointer-events none
            left 5px
            top 10px
            transition 0.2s ease all
            -moz-transition 0.2s ease all
            -webkit-transition 0.2s ease all

        input:focus ~ label, input:valid ~ label
            top -20px
            font-size 14px
            color color-blue

        .bar
            position relative
            display block
            width 300px

            &:before
                left 50%

            &:after
                right 50%

        .bar:before, .bar:after
            content ''
            height 2px
            width 0
            bottom 1px
            position absolute
            background color-blue
            transition 0.2s ease all
            -moz-transition 0.2s ease all
            -webkit-transition 0.2s ease all

        input:focus ~ .bar:before, input:focus ~ .bar:after
            width 50%

        .highlight
            position absolute
            height 60%
            width 100px
            top 25%
            left 0
            pointer-events none
            opacity 0.5


    /* ANIMATIONS ================ */
    @-webkit-keyframes inputHighlighter {
        from {
            background: color-blue;
        }
        to {
            width: 0;
            background: transparent;
        }
    }

    @-moz-keyframes inputHighlighter {
        from {
            background: color-blue;
        }
        to {
            width: 0;
            background: transparent;
        }
    }

    @keyframes inputHighlighter {
        from {
            background: color-blue;
        }
        to {
            width: 0;
            background: transparent;
        }
    }
</style>
