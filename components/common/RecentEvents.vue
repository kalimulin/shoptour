<template>
    <div class="recent-events">
        <h1>Новые события за неделю</h1>
        <div class="recent-events__row">
            <div class="recent-events__col">
                <div class="recent-events__count">
                    12
                </div>
                <div class="recent-events__title">
                    Новых туроператоров добавлено
                </div>
            </div>
            <div class="recent-events__col">
                <div class="recent-events__count">
                    3
                </div>
                <div class="recent-events__title">
                    Новых магазинов добавлено
                </div>
            </div>
            <div class="recent-events__col">
                <div class="recent-events__count">
                    22
                </div>
                <div class="recent-events__title">
                    Новых клиентов добавлено
                </div>
            </div>
            <div class="recent-events__col">
                <div class="recent-events__count">
                    12
                </div>
                <div class="recent-events__title">
                    Выездов завершено с достижением цели
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecentEvents'
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"

    .recent-events {
        h1 {
            line-height 24px
            font-size 20px
            color #333333
        }
        .recent-events__row {
            display flex
            justify-content space-between
            margin-right indent(-1)
            margin-left indent(-1)
            .recent-events__col {
                position relative;
                width 100%;
                min-height 1px;
                margin 0 7px
                height 80px
                padding indent(2)
                display flex
                align-items center
                justify-content center
                background-color #FCFCFC;
                box-shadow -1px 2px 4px rgba(110, 146, 172, 0.270352);
                border-radius 4px
                box-sizing border-box
                .recent-events__count {
                    color color-blue
                    font-size 40px
                    line-height 19px
                    margin-right indent(1)
                }
                .recent-events__title {
                    line-height 18px
                    font-size 12px
                }
            }
        }
    }

</style>
