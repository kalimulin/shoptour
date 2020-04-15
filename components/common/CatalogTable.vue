<template>
    <div
        v-if="itemsList.length"
        class="catalog-table"
    >
        <table>
            <thead />
            <tbody>
                <tr
                    v-for="item in items"
                    :key="item.id"
                />
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "CatalogTable",
    props: {
        items: {
            type: Array,
            default: () => ([])
        },
        filterString: {
            type: String,
            default: ''
        }
    },
    computed: {
        itemsList() {
            return this.items.filter(cat => {
                if (cat.name.RU.toLowerCase().indexOf(this.filterString.toLowerCase()) > -1) {
                    return true
                }
                return false
            })
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"

</style>
