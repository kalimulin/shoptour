<template>
    <div class="partners-page">
        <div
            v-if="$route.meta.nav === true"
            class="container mt-4"
        >
            <div class="partners__top-row">
                <Tabs
                    :tabs-list="tabsList"
                    :selected-tab="activeTab"
                    @change="changeTabHandler"
                />
            </div>
        </div>
        <div class="partners__tabs-content">
            <transition
                name="fade"
                mode="out-in"
            >
                <router-view />
            </transition>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Tabs from '@/components/common/Tabs.vue'

export default {
    name: 'PartnersHome',
    components: {
        Tabs,
    },
    data() {
        return {
            countriesList: [
                {
                    name: 'Турция'
                },
                {
                    name: 'Индия'
                },
                {
                    name: 'Малайзия'
                },
                {
                    name: 'Китай'
                },
                {
                    name: 'Вьетнам'
                },
            ],
            selectedCountry: {},
        }
    },
    computed: {
        ...mapGetters(['allow', 'currentUserRole']),
        tabsList() {
            let tabs = []
            if (this.allow('viewTourAgencies')) {
                tabs.push({
                    name: 'TourAgencies',
                    label: this.$t('partners.travelAgencies')
                })
            }
            if (this.allow('viewStores')) {
                tabs.push({
                    name: 'Stores',
                    label: this.$t('partners.shops')
                })
            }
            return tabs
        },
        activeTab() {
            return this.tabsList.find(tab => tab.name === this.$route.name) || this.tabsList[0]
        },
    },
    watch: {
        '$route'() {
            this.onVisitPage()
        }
    },
    mounted() {
        this.onVisitPage()
    },
    methods: {
        changeTabHandler(tab) {
            this.$router.push({name: tab.name})
        },
        changeCountry() {
            // console.log('changeCountry', this.selectedCountry)
        },
        onVisitPage() {
            if (((this.$route.params || {}).id !== this.currentUserRole.context) && this.currentUserRole && this.currentUserRole.name && this.currentUserRole.context) {
                if (this.currentUserRole.name === 'tour-agency-manager' || this.currentUserRole.name === 'tour-agency-employee') {
                    this.$router.push(`/partners/tour-agencies/${this.currentUserRole.context}`)
                } else if (this.currentUserRole.name === 'hosting-party-manager') {
                    if (this.$route.path.indexOf('/partners/stores') === -1) {
                        this.$router.push('/partners/stores')
                    }
                } else if (this.currentUserRole.name === 'controller') {
                    if (this.$route.path.indexOf('/partners/stores') === -1) {
                        this.$router.push('/partners/stores')
                    }
                }
            }
        }
    },
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"

    .partners-page {
        .partners__top-row {
            display flex
            justify-content space-between
            align-items center
        }

        .partners__sort-and-filter {
            padding indent(2)
            display flex
            align-items center
            justify-content space-between
            line-height 21px
            font-size 14px
            color #9BA6AF

            .sort-by-category {
                min-width 180px
                margin-right auto
                margin-left indent(2)

                .dropdown-toggle {
                    color color-darkgray
                    padding 0
                    width 100%

                    .caret {
                        position: absolute;
                        right: 0;
                    }
                }

                .dropdown-menu {
                    padding 0
                    width 100%

                    li {
                        height 25px

                        &:hover {
                            background-color rgba(74, 144, 226, 0.1);
                        }

                        a {
                            padding 0 indent(1) indent(1)
                            line-height 25px

                            &:last-child {
                                padding-bottom 0
                            }
                        }
                    }
                }
            }

            .filter-input {
                display flex

                img {
                    margin-left indent(2)
                }
            }
        }
        .dropdown-toggle {
            font-size 14px
            line-height 21px
            color color-darkgray
            padding 0 indent(1)
        }
        .dropdown-menu {
            width 100%
        }
        .btn-group {
            border-bottom: 1px solid rgba(155, 166, 175, 0.4)
        }
    }
</style>
