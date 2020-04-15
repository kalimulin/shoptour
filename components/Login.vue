<template>
    <div class="login-page">
        <div class="login-page__logo">
            <img
                src="../assets/images/logo-with-text.svg"
                alt=""
            >
        </div>
        <div class="login-page__form with-shadow">
            <h1>Авторизация</h1>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label v-if="authForm.login.length > 0 && !authStatus">
                        Логин
                    </label>
                    <label v-if="authStatus && authStatus.code">
                        <span
                            v-if="authStatus.code === 5"
                            class="text-red"
                        >
                            Неверный логин или пароль
                        </span>
                    </label>
                    <input
                        ref="loginInput"
                        v-model="authForm.login"
                        type="text"
                        placeholder="Введите логин"
                    >
                </div>
                <div class="form-group">
                    <label v-if="authForm.password.length > 0">
                        Пароль
                    </label>
                    <input
                        ref="passwordInput"
                        v-model="authForm.password"
                        type="password"
                        placeholder="Введите пароль"
                    >
                </div>
                <button
                    class="button-blue"
                    @click.prevent="login"
                >
                    Войти
                </button>
            </form>
        </div>
        <div class="login-page__contacts">
            Техподдержка: +24 567 89089, support@shoptour.com {{ authStatus && authStatus.code }}
        </div>
        <transition name="fade">
            <Preloader
                v-show="loading === true"
            />
        </transition>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Preloader from '@/components/common/Preloader.vue'

export default {
    name: "Login",
    components: {
        Preloader
    },
    data() {
        return {
            from: 'Home',
            authForm: {
                login: '',
                password: ''
            },
            loading: false
        }
    },
    computed: {
        ...mapGetters(['currentUserRole']),
        ...mapGetters('auth', ['authStatus'])
    },
    created() {
        if (this.$route.params.routeName) {
            this.from = this.$route.params.routeName
        }
    },
    mounted() {
        this.$refs.loginInput.focus()
    },
    methods: {
        ...mapActions({
            authReguest: `auth/AUTH_REQUEST`
        }),
        login() {
            this.loading = true
            this.authReguest({login: this.authForm.login, password: this.authForm.password}).then(data => {
                this.loading = false
                if (this.currentUserRole.name === 'tour-agency-manager' || this.currentUserRole.name === 'tour-agency-employee') {
                    this.$router.push(`/partners/tour-agencies/${this.currentUserRole.context}`)
                } else if (this.currentUserRole.name === 'controller' || this.currentUserRole.name === 'hosting-party-manager') {
                    this.$router.push('/partners/stores')
                } else if (this.currentUserRole.name === 'dispatching-party-manager') {
                    this.$router.push(`/partners/tour-agencies`)
                } else if (data.sessionToken) {
                    this.$router.push({name: this.from})
                }
            }).catch(error => {
                this.loading = false
                console.log(error)
                if (error && error.code === 5) {
                    this.$snotify.error('Неверный логин или пароль')
                } else {
                    this.$snotify.error('Ошибка выполнения запроса')
                }
            })
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"

    .login-page
        position fixed
        z-index 20
        width 100%
        height 100%
        top 0
        left 0
        background-color #283E6A
        display flex
        flex-direction column
        justify-content space-between
        padding 50px
        .login-page__logo
            animation: bounceInDown 0.5s
        .login-page__contacts
            color rgba(155, 166, 175, 0.5)
            line-height 21px
            font-size 14px
        .login-page__form
            animation: bounceInDown 1s;
            padding indent(4)
            width 287px
            align-self center
            form
                text-align right
            h1
                margin-top 0
                margin-bottom 0
                line-height 28px
                font-size 20px
                color: #333333
                font-weight bold
            .form-group
                position relative
                padding-top indent(3)
                label
                    position absolute
                    left 0
                    top 0
                    margin-bottom 0
                    font-size: 10px
                    line-height 24px
                input
                    height 48px
                    line-height 48px
                    width 100%
                    padding 0 indent(2)
            .button-blue
                margin-top indent(2)
                margin-left auto
</style>
