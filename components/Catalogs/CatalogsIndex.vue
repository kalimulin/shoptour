<template>
    <router-view v-if="allow('viewCatalogs')" />
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'Catalogs',
    computed: {
        ...mapGetters({
            allow: 'allow'
        })
    }
}
</script>
