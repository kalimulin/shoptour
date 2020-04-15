<template>
    <div class="reports">
        <div
            class="container mt-4"
        >
            <div class="reports__top-row">
                <Tabs
                    :tabs-list="tabsList"
                    :selected-tab="activeTab"
                    @change="changeTabHandler"
                />
            </div>
            <div class="reports__tabs-content">
                <transition
                    name="fade"
                    mode="out-in"
                >
                    <router-view />
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

import Tabs from '@/components/common/Tabs.vue'
export default {
    name: 'Reports',
    components: {
        Tabs
    },
    data() {
        return {
            activeTab: {
                name: 'TotalProfitReport',
                label: 'Покупки'
            }
        }
    },
    computed: {
        ...mapGetters(['userRole', 'permissions', 'allow']),
        tabsList() {
            let tabs = []
            if(this.allow('viewTotalProfitReport')) {
                tabs.push({
                    name: 'TotalProfitReport',
                    label: 'Покупки'
                })
            }
            return tabs
        }
    },
    methods: {
        changeTabHandler(tab) {
            this.activeTab = tab
            this.$router.push({name: tab.name})
        },
    }
}
</script>
<style lang="stylus">
    .reports
        .reports__tabs-content
            input[type=text]
                border 0
        .reports__top-row
            display flex
            justify-content space-between
            align-items center
</style>
