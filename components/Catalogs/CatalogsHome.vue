<template>
    <div class="container mt-4">
        <div class="catalogs-page">
            <h1>Каталог справочников</h1>
            <div class="grid">
                <div class="grid-row">
                    <div
                        v-for="catalog in catalogsList"
                        :key="catalog.path"
                        class="grid-col-3"
                    >
                        <router-link :to="`/catalogs/${catalog.path}`">
                            <div class="with-shadow catalog">
                                <img
                                    class="mr-1"
                                    src="@/assets/images/icons/iconfinder_Streamline-52_185072.svg"
                                    alt=""
                                >
                                <div>{{ catalog.name }}</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <nav />
        </div>
    </div>
</template>

<script>

export default {
    name: 'CatalogsHome',
    data() {
        return {
            catalogsList: [
                {
                    name: 'Товары и категории',
                    path: 'goods'
                },
                {
                    name: 'Города и страны',
                    path: 'cities'
                },
                {
                    name: 'Отели',
                    path: 'hotels'
                },
                {
                    name: 'Магазины',
                    path: 'stores'
                },
                {
                    name: 'Турагентства',
                    path: 'tour-agencies'
                },
                {
                    name: 'Авиакомпании',
                    path: 'airlines'
                },
                {
                    name: 'Партнеры по турам',
                    path: 'tour-partners'
                },
                {
                    name: 'Типы контактов',
                    path: 'contact-info-types'
                },
            ]
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"

    .catalogs-page
        h1
            line-height 24px
            font-size 20px;
            color #333333
        .catalog
            display flex
            align-items center
            padding indent(2)
            line-height 18px
            font-size 12px
            color color-darkgray
            margin 0
</style>
