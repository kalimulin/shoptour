<template>
    <div
        class="tour-agency__tab-content"
    >
        <div class="tour-agency__about with-shadow">
            <div>
                <div><strong>Местоположение</strong></div>
                <div>
                    {{ ((tourAgency || {}).country || {}).name }}, {{ ((tourAgency || {}).city || {}).name }}, {{ tourAgency.address }}
                    <img
                        v-if="allow('changeTourAgencyInfo')"
                        src="@/assets/images/icons/iconfinder_edit-3_2561260.svg"
                        class="ml-1 tour-agency__tab-content_edit"
                        @click="editTourAgencyHandler"
                    >
                </div>
            </div>
            <div class="ml-5">
                <div><strong>Контакты</strong></div>
                <template v-if="tourAgency.contactInfo">
                    <div
                        v-for="(contact, $i) in tourAgency.contactInfo"
                        :key="$i"
                    >
                        {{ (contact.type || {}).type }}: {{ contact.value }}
                    </div>
                </template>
            </div>
        </div>
        <div
            v-if="allow('viewTourAgencyGoodsCategories')"
            class="tour-agency__categories mt-4"
        >
            <h1>Категории</h1>
            <div class="d-flex align-items-center">
                <InputSearch
                    v-model="filterString"
                    placeholder="Введите название категории"
                />
                <ButtonAdd
                    v-if="allow('changeTourAgencyPercents')"
                    class="ml-2"
                    text="Добавить категорию"
                    @click="addCategoryHandler"
                />
            </div>
            <div
                v-if="tourAgency && tourAgency.percents"
                class="with-shadow mt-4 tour-agency__categories-table"
            >
                <table>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        <template
                            v-for="cat in tourAgencyPercents"
                        >
                            <tr
                                v-if="cat.categoryId"
                                :key="cat.categoryId"
                            >
                                <td class="tour-agency__category-name">
                                    {{ getCategoryNameById(cat.categoryId) }}
                                </td>
                                <td>
                                    {{ cat.percent }}%
                                    <img
                                        v-if="allow('changeTourAgencyPercents')"
                                        class="ml-1 tour-agency__tab-content_edit"
                                        src="@/assets/images/icons/iconfinder_edit-3_2561260.svg"
                                        @click="setCategoryPercentHandler(cat)"
                                    >
                                    <!--<img-->
                                    <!--class="ml-1"-->
                                    <!--src="@/assets/images/icons/trash-blue.svg"-->
                                    <!--alt=""-->
                                    <!--@click="deleteCategoryPercentHandler(cat)"-->
                                    <!--&gt;-->
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
        <UpdateTourAgencyPopup
            v-if="showEditTourAgencyModal"
            :tour-agency="tourAgency"
            @close="showEditTourAgencyModal = false"
        />
        <SetPercentInTourAgencyPopup
            v-if="!!showCategoryAddModal"
            :category="category"
            :tour-agency-percents="tourAgencyPercents"
            @close="showCategoryAddModal = false"
        />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

import UpdateTourAgencyPopup from '@/components/Partners/Popups/EditTourAgencyPopup.vue'
import SetPercentInTourAgencyPopup from '@/components/Partners/Popups/SetPercentInTourAgencyPopup.vue'
import InputSearch from '@/components/common/inputs/InputSearch.vue'
import ButtonAdd from '@/components/common/buttons/ButtonAdd'
export default {
    name: 'TourAgencyInfo',
    components: {
        UpdateTourAgencyPopup,
        SetPercentInTourAgencyPopup,
        InputSearch,
        ButtonAdd
    },
    data() {
        return {
            showEditTourAgencyModal: false,
            filterString: '',
            showCategoryAddModal: false
        }
    },
    computed: {
        ...mapGetters({
            allow: 'allow'
        }),
        ...mapGetters('tourAgency', ['getTourAgency']),
        ...mapGetters('city', ['getCountriesList', 'getCitiesList']),
        ...mapGetters('goods', ['getCategoryNameById']),
        tourAgency() {
            let tourAgency = Object.assign({}, this.getTourAgency)
            tourAgency.country = this.getCountriesList.find(item => item.id === tourAgency.countryId)
            tourAgency.city = this.getCitiesList.find(item => item.id === tourAgency.cityId)
            return tourAgency
        },
        tourAgencyPercents() {
            return this.getTourAgency.percents.filter(per => this.getCategoryNameById(per.categoryId).toLowerCase().includes(this.filterString.toLowerCase()))
        }
    },
    methods: {
        editTourAgencyHandler() {
            this.showEditTourAgencyModal = true
        },
        addCategoryHandler() {
            this.category = {
                category: {}
            }
            this.showCategoryAddModal = true
        },
        setCategoryPercentHandler(category) {
            this.category = category
            this.showCategoryAddModal = true
        },
        deleteCategoryPercentHandler(category) {
            // console.log(category)
        }
    }
}
</script>

<style lang="stylus">
    @import "~@/assets/variables.styl"
    .tour-agency__about
        display flex
        padding indent(3) indent(2)
        flex-grow 1

        .shop__about__categories
            color rgba(93, 125, 163, 0.8)

    .tour-agency__tab-content_edit
        cursor pointer
</style>
