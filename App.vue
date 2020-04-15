<template>
    <div
        id="app"
    >
        <header class="header">
            <transition
                name="fade"
                mode="out-in"
            >
                <router-link to="/">
                    <div
                        class="header_menu-button"
                        :class="{ active: $route.path === '/' }"
                    >
                        <img
                            v-if="$route.path === '/'"
                            src="./assets/images/logo-white.svg"
                            alt=""
                        >
                        <img
                            v-else
                            src="./assets/images/logo-blue.svg"
                            alt=""
                        >
                    </div>
                </router-link>
            </transition>
            <nav>
                <router-link
                    v-if="allow('viewVisitsLink')"
                    to="/travels"
                >
                    {{ $t("nav.travels") }}
                </router-link>
                <router-link
                    v-if="allow('viewTourAgencies') || allow('viewStores')"
                    to="/partners"
                >
                    {{ $t("nav.partners") }}
                </router-link>
                <router-link
                    v-if="allow('viewCatalogs')"
                    to="/catalogs"
                >
                    {{ $t("nav.catalogs") }}
                </router-link>
                <router-link
                    v-if="allow('viewReports')"
                    to="/reports"
                >
                    {{ $t("nav.reports") }}
                </router-link>
                <!--<router-link-->
                <!--v-if="allow('viewPayouts')"-->
                <!--to="/payouts"-->
                <!--&gt;-->
                <!--{{ $t("nav.payouts") }}-->
                <!--</router-link>-->
            </nav>
            <div class="user-panel">
                <img
                    src="./assets/images/avatar-example.png"
                    alt=""
                >
                <div class="user-panel__usernames">
                    <div class="user-panel__firstname">
                        {{ userName.length ? userName[0] : 'Без имени' }}
                    </div>
                    <div class="user-panel__lastname">
                        <a
                            href="#"
                            @click.prevent="logout"
                        >
                            Выход
                        </a>
                    </div>
                </div>
            </div>
            <div class="role-selector">
                <Dropdown
                    v-if="rolesArray && rolesArray.length"
                    v-model="selectedRole"
                    :options="rolesArray"
                    :placeholder="'Select an Item'"
                    @change="changeRole"
                />
            </div>
            <div class="header-menu">
                <img
                    src="./assets/images/three-dots.svg"
                    alt=""
                >
            </div>
        </header>
        <div>
            <div>
                <RouterView />
            </div>
        </div>
        <transition name="fade">
            <Preloader
                v-show="loading === true"
            />
        </transition>
        <vue-snotify />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Dropdown from '@/components/common/Dropdown.vue'
import Preloader from '@/components/common/Preloader.vue'

export default {
    name: "App",
    components: {
        Dropdown,
        Preloader
    },
    data() {
        return {
            selectedRole: {}
        }
    },
    computed: {
        ...mapGetters(['loading']),
        ...mapGetters(['usersRoles', 'userRole', 'allow', 'currentUserRole']),
        ...mapGetters('user', ['userProfile', 'getRoles']),
        userName() {
            if (this.userProfile.FullName) {
                return this.userProfile.FullName.split(' ')
            }
            return ''
        },
        rolesArray() {
            return this.usersRoles.filter(role => this.getRoles.find(item => item.name === role.name))
        },
    },
    watch: {
        '$route'() {
            this.selectedRole = this.userRole
        },
        selectedRole(role) {
            if (role && role.name) {
                switch (role.name) {
                case 'controller':
                case 'hosting-party-manager':
                    this.$router.push('/partners/stores')
                    break
                case 'tour-agency-manager':
                case 'tour-agency-employee':
                    if (this.$route.path.indexOf('/partners/tour-agencies') !== 0) {
                        this.$router.push(`/partners/tour-agencies/${this.currentUserRole.context}`)
                    }
                    break
                case 'dispatching-party-manager':
                    if (this.$route.path.indexOf('/partners/tour-agencies') !== 0) {
                        this.$router.push(`/partners/tour-agencies`)
                    }
                    break
                }
            }
        }
    },
    created() {
        this.$store.commit('userRole')
        this.selectedRole = {}
        console.warn(`App running in ${process.env.NODE_ENV} mode`)
    },
    mounted() {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'auth/AUTH_SUCCESS' && mutation.payload.id) {
                this.getCatalogs()
            }
        })
        this.getCatalogs()
    },
    methods: {
        ...mapActions({
            authLogout: `auth/AUTH_LOGOUT`
        }),
        ...mapActions('city', ['callGetCountriesList', 'callGetCitiesList']),
        ...mapActions('client', ['callGetClientsList']),
        ...mapActions('goods', ['callGetCategories', 'callGetGoods']),
        ...mapActions('airline', ['callGetAirlinesList']),
        ...mapActions('hotel', ['callGetHotels']),
        ...mapActions('store', ['callGetStores']),
        ...mapActions('contactInfoType', ['callGetContactInfoTypeList']),
        changeRole(option) {
            this.$store.commit('userRole', option)
            this.selectedRole = this.userRole
        },
        logout() {
            this.authLogout(null)
            this.selectedRole = {}
            this.$router.push('/login')
        },
        getCatalogs() {
            const awaits = []

            if(this.allow('viewStores')) {
                awaits.push(this.callGetStores(this.currentUserRole.context))
            }
            if(this.allow('viewHotels')) {
                awaits.push(this.callGetHotels())
            }
            if(this.allow('viewClients')) {
                awaits.push(this.callGetClientsList())
            }
            if(this.allow('viewGoods')) {
                awaits.push(this.callGetGoods())
                awaits.push(this.callGetCategories())
            }
            awaits.push(this.callGetContactInfoTypeList())
            awaits.push(this.callGetAirlinesList())
            awaits.push(this.callGetCountriesList())
            awaits.push(this.callGetCitiesList())

            Promise.all(awaits)
                .then(()=>{
                    this.selectedRole = this.userRole
                })
                .catch((err)=>{
                    if (err.code !== 16) {
                        console.error(err)
                        this.$snotify.error('Ошибка получения данных')
                    }
                })
        }
    }
}
</script>

<style lang="stylus">
    @import "./assets/variables.styl"

    .vb {
        height calc(100vh - 48px)
    }

    .vb > .vb-dragger {
        z-index: 5;
        width: 12px;
        right: 0;
    }

    .vb > .vb-dragger > .vb-dragger-styler {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: rotate3d(0, 0, 0, 0);
        transform: rotate3d(0, 0, 0, 0);
        -webkit-transition: background-color 100ms ease-out,
            margin 100ms ease-out,
            height 100ms ease-out;
        transition: background-color 100ms ease-out,
            margin 100ms ease-out,
            height 100ms ease-out;
        background-color: rgba(48, 121, 244, .1);
        margin: 5px 5px 5px 0;
        border-radius: 20px;
        height: calc(100% - 10px);
        display: block;
    }

    .vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
        background-color: rgba(48, 121, 244, .3);
    }

    .vb > .vb-dragger:hover > .vb-dragger-styler {
        background-color: rgba(48, 121, 244, .5);
        margin: 0px;
        height: 100%;
    }

    .vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
        background-color: rgba(48, 121, 244, .5);
        margin: 0px;
        height: 100%;
    }

    .vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
        background-color: rgba(48, 121, 244, .5);
    }

    .loading {
        position fixed
        bottom calc(50% - 50px)
        right calc(50% - 50px)
        height 100px
        width 100px
        border-radius 50%
        z-index 30
        display flex
        align-items center
        justify-content center
        background-color color-blue
    }

    #app {
        min-height 100vh
        padding-bottom 32px
    }

    body {
        line-height 21px
        font-size 12px
        color color-darkgray
        font-family: 'SF UI Text', sans-serif;
    }

    .header {
        height 48px
        display flex
        justify-content space-between
        align-items center
        font-size 12px
        line-height 21px
        box-shadow -1px 2px 4px rgba(110, 146, 172, 0.270352)

        .header_menu-button {
            height 48px
            width 48px
            /*width 170px*/
            display flex
            align-items center
            background-color color-lightgray
            -webkit-transition all 500ms ease
            -moz-transition all 500ms ease
            -o-transition all 500ms ease
            -ms-transition all 500ms ease
            transition all 500ms ease

            /*&:hover {*/
            //     -webkit-filter invert(100%)
            /*}*/

            &.active {
                background-color color-blue
            }

            img {
                margin auto
                width 20px
            }
        }

        nav {
            display flex
            height 100%
            margin-right auto

            a {
                padding 0 indent(2)
                font-size 12px
                line-height 48px

                &:hover {
                    background-color color-lightgray
                    color color-darkgray
                }

                &.router-link-active {
                    background-color color-blue
                    color white
                }
            }
        }

        .user-panel {
            padding 0 indent(2)
            display flex
            align-items center
            line-height 16px

            img {
                margin-right 8px
                height 36px
            }
        }

        .role-selector {
            max-width 200px

            .dropdown-toggle {
                line-height 16px
                font-size 12px
            }

            .dropdown-menu {
                left auto
                right 0
            }

            .caret {
                margin-left indent(1)
            }
        }

        .header-menu {
            /*display flex*/
            display none
            width 48px
            height 48px
            background-color color-lightgray

            img {
                margin auto
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition opacity .1s
    }

    .fade-enter, .fade-leave-to {
        opacity 0
    }


    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes bounceInDown {
        from,
        60%,
        75%,
        90%,
        to {
            -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, -3000px, 0);
            transform: translate3d(0, -3000px, 0);
        }

        60% {
            opacity: 1;
            -webkit-transform: translate3d(0, 25px, 0);
            transform: translate3d(0, 25px, 0);
        }

        75% {
            -webkit-transform: translate3d(0, -10px, 0);
            transform: translate3d(0, -10px, 0);
        }

        90% {
            -webkit-transform: translate3d(0, 5px, 0);
            transform: translate3d(0, 5px, 0);
        }

        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

</style>
