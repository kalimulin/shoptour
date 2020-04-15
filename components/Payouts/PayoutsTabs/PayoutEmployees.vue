<template>
    <div class="payout_tab-content">
        {{ getEmployeesPlannedPayout }}
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "PayoutEmployees",
    data() {
        return {
            month: this.$moment().month()
        }
    },
    computed: {
        ...mapGetters('payout', ['getEmployeesPlannedPayout']),
    },
    created() {
        this.callGetPlannedPayout(this.month)
    },
    methods: {
        ...mapActions('payout', ['callGetPlannedPayout']),
    }

}
</script>

