<template>
    <div class="client-page__purchases mt-4">
        <div class="with-shadow mt-4 client-page__purchases-table">
            <table v-if="purchasesList.length">
                <thead>
                    <tr>
                        <th>Название товара</th>
                        <!--<th>Количество</th>-->
                        <th>Дата</th>
                        <th>Наличные</th>
                        <th>Карта</th>
                        <th>Доставка</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="purchase in purchasesList"
                        :key="purchase.Id"
                    >
                        <td>{{ ((getGoodById(purchase.GoodId) || {}).name || {}).RU || '' }}</td>
                        <!--<td>3 шт</td>-->
                        <td>{{ getDateFromDatetimeString(purchase.Date) }}</td>
                        <td>{{ purchase.Cash.Amount }} {{ purchase.Cash.Currency }}</td>
                        <td>1{{ purchase.Card.Amount }} {{ purchase.Card.Currency }}</td>
                        <td>{{ purchase.Delivery.Amount }} {{ purchase.Delivery.Currency }}</td>
                        <td class="shop__table-actions" />
                    </tr>
                </tbody>
            </table>
            <div
                v-else
                class="text-center p-2"
            >
                Покупок нет
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "ClientPurchases",
    props: {
        client: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        ...mapGetters({
            purchasesList: 'client/purchasesList',
            goodsList: 'goods/goodsList',
        }),
    },
    // created() {
    //     this.callGetPurchasesByClientId(this.client.id)
    // },
    methods: {
        ...mapActions('client', ['callGetPurchasesByClientId']),
        getGoodById(id) {
            return this.goodsList.find(good => good.id === id) || {}
        },
        getDateFromDatetimeString(datetime) {
            if (datetime) {
                const arr = datetime.split('T')
                return arr ? arr[0] : ''
            }
        }
    },
}
</script>

