<template>
    <div class="payouts">
        <div
            class="container mt-4"
        >
            <div class="payouts__top-row">
                <Tabs
                    :tabs-list="tabsList"
                    :selected-tab="activeTab"
                    @change="changeTabHandler"
                />
            </div>
            <div class="payouts__tabs-content">
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
    name: 'Payouts',
    components: {
        Tabs
    },
    data() {
        return {
            activeTab: {
                name: 'EmployeesPayout',
                label: 'Выплаты сотрудникам'
            }
        }
    },
    computed: {
        ...mapGetters(['userRole', 'permissions', 'allow']),
        tabsList() {
            let tabs = []
            if(this.allow('viewEmployeesPayout')) {
                tabs.push({
                    name: 'EmployeesPayout',
                    label: 'Выплаты сотрудникам'
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
    .payouts
        .payouts__tabs-content
            input[type=text]
                border 0
        .payouts__top-row
            display flex
            justify-content space-between
            align-items center
</style>
