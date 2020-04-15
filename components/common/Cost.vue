<template>
    <div class="d-flex cost">
        <input
            v-model="cost.amount"
            type="number"
            pattern="[0-9]*"
            min="0"
            @input="$emit('input', cost)"
        >
        <Select
            v-model="cost.currency"
            :options="currencySelectOptions"
            track-by="value"
            label="label"
            @input="$emit('input', cost)"
        />
    </div>
</template>

<script>
import Select from '@/components/common/Select'


export default {
    name: "Cost",
    components: {
        Select
    },
    props: {
        value: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            cost: {
                amount: null,
                currency: {}
            },
            currencySelectOptions: [
                {
                    label: '$, USD',
                    value: 'USD'
                },
                {
                    label: '€, EUR',
                    value: 'EUR'
                },
                {
                    label: '₽, RUB',
                    value: 'RUB'
                }
            ],
        }
    },
    created() {
        this.cost.amount = (this.value && !Number.isNaN(+this.value.amount)) ? +this.value.amount : null
        this.cost.currency = (this.value && this.value.currency) ? this.currencySelectOptions.find(cur => cur.value.toUpperCase() === (this.value.currency || '').toUpperCase()) || {} : {}
    }
}
</script>

<style lang="stylus">
    .cost
        .dropdown-toggle {
            width 120px
            height 48px
        }
        .multiselect {
            min-width 105px
        }
        input[type=number] {
            min-width 107px
            margin-right 8px
        }
        .multiselect__tags {
            /*border-top 0*/
            /*border-right 0*/
            /*border-left 0*/
        }
</style>
