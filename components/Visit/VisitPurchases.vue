<template>
    <div class="visit-page__tab-content">
        <div class="visit-page__purchases mt-4">
            <div
                v-if="purchasesList.length > 0"
                class="with-shadow mt-4 visit-page__purchases-table"
            >
                <table>
                    <thead>
                        <tr>
                            <th>Название товара</th>
                            <!--<th>Количество</th>-->
                            <th>Дата</th>
                            <th>Магазин</th>
                            <th>Наличные</th>
                            <th>Карта</th>
                            <th>Доставка</th>
                            <!--<th />-->
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="p in purchasesList"
                            :key="p.id"
                        >
                            <td>{{ getGoodById(p.goodId).name.RU }}</td>
                            <!--<td>3 шт</td>-->
                            <td>{{ $moment(p.date).utc().format('YYYY-MM-DD hh:mm') }}</td>
                            <td>
                                <div>
                                    <v-popover>
                                        <div class="tooltip-link">
                                            {{ (getStoreById(p.storeId) || {}).name }}
                                        </div>
                                        <template slot="popover">
                                            <a
                                                v-close-popover
                                                class="tooltip-close"
                                            >
                                                <img
                                                    src="@/assets/images/icons/close.svg"
                                                    alt=""
                                                >
                                            </a>
                                            <div>
                                                <p><strong>Название:</strong> {{ (getStoreById(p.storeId) || {}).name }}</p>
                                                <p><strong>Страна:</strong> {{ getCountryById((getStoreById(p.storeId) || {}).countryId).name }}</p>
                                                <p><strong>Город:</strong> {{ getCityById((getStoreById(p.storeId) || {}).cityId).name }}</p>
                                                <template v-if="getStoreById(p.storeId).contactInfo">
                                                    <p
                                                        v-for="(contact, $i) in getStoreById(p.storeId).contactInfo"
                                                        :key="$i"
                                                    >
                                                        <strong>{{ contact.type.type }}:</strong> {{ contact.value }}
                                                    </p>
                                                </template>
                                            </div>
                                        </template>
                                    </v-popover>
                                </div>
                            </td>
                            <td>{{ p.cash.Amount }} {{ p.cash.Currency }}</td>
                            <td>{{ p.card.Amount }} {{ p.card.Currency }}</td>
                            <td>{{ p.delivery.Amount }} {{ p.delivery.Currency }}</td>
                            <!--<td>-->
                            <!--<img-->
                            <!--src="../../assets/images/icons/iconfinder_edit-3_2561260.svg"-->
                            <!--alt=""-->
                            <!--&gt;-->
                            <!--</td>-->
                        </tr>
                    </tbody>
                </table>
            </div>
            <div
                v-else
                class="with-shadow visit-purchases__no-data"
            >
                <h1>Нет покупок</h1>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "VisitPurchases",
    props: {
        visit: {
            type: Object,
            default: () => ({})
        },
        client: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        ...mapGetters('goods', ['goodsList', 'getGoodById']),
        ...mapGetters({
            purchasesList: 'visit/getClientPurchases'
        }),
        ...mapGetters('store', ['storesList', 'getStoreById']),
        ...mapGetters('city', ['getCityById']),
        ...mapGetters('city', ['getCountryById'])
    },

}
</script>

<style lang="stylus">
    .visit-purchases__no-data
        margin-top 15px
        padding 5px
        text-align center
        h1
            margin 0
            padding 0
</style>


