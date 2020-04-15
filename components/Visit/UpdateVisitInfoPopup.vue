<template>
    <Modal
        class="update-visit"
        title="Изменить выезд"
        @close="$emit('close')"
        @submit="updateVisitInfoHandler"
    >
        <div slot="body">
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-33">
                        <Label>
                            <template slot="label">
                                Количество взрослых
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.adultsAmount') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="updatedVisit.info.AmountOfAdults"
                            type="number"
                            pattern="[0-9]*"
                            min="1"
                        >
                    </div>
                    <div class="form-group w-33">
                        <Label>
                            <template slot="label">
                                Количество детей
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.kidsAmount') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="updatedVisit.info.AmountOfChildren"
                            type="number"
                            pattern="[0-9]*"
                            min="0"
                        >
                    </div>
                    <div class="form-group w-33">
                        <Label>
                            <template slot="label">
                                Количество младенцев
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.babiesAmount') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="updatedVisit.info.AmountOfInfants"
                            type="number"
                            pattern="[0-9]*"
                            min="0"
                        >
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-50">
                        <Label>
                            <template slot="label">
                                Партнёры по туру
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.tourPartners') }}</pre>
                            </template>
                        </Label>
                        <Select
                            v-model="partners"
                            :options="getTourPartnersList"
                            :multiple="true"
                            @input="changeTourPartnerHandler"
                        />
                        <!--<input-->
                        <!--v-model="updatedVisit.info.TourPartnerIds"-->
                        <!--type="text"-->
                        <!--&gt;-->
                    </div>
                    <div class="form-group w-50">
                        <Label>
                            <template slot="label">
                                Последний выезд
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.lastVisit') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="updatedVisit.info.LastTimeBeenHere"
                            type="text"
                        >
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-50">
                        <Label>
                            <template slot="label">
                                Ранее посещенные страны
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.visitedCountries') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="updatedVisit.info.LastVisitedCountries"
                            type="text"
                        >
                    </div>
                    <div class="form-group w-50">
                        <Label>
                            <template slot="label">
                                Ежемесячный доход
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.monthlyIncome') }}</pre>
                            </template>
                        </Label>
                        <Cost v-model="monthlyIncome" />
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-70">
                        <Label>
                            <template slot="label">
                                Выберите авиакомпанию
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.chooseAlialine') }}</pre>
                            </template>
                        </Label>
                        <Select
                            v-model="airline"
                            :options="getAirlinesList"
                        />
                    </div>
                    <div class="form-group w-30">
                        <Label>
                            <template slot="label">
                                Номер рейса
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.flightNumber') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="updatedVisit.info.FlightNumber"
                            type="text"
                        >
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-100">
                        <Label>
                            <template slot="label">
                                Местный контакт
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.methodOfCommunication') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="updatedVisit.info.MethodOfCommunication"
                            type="text"
                        >
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-100">
                        <Label>
                            <template slot="label">
                                Психологический портрет:
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.psychologicalPicture') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="updatedVisit.info.PsychologicalPicture"
                            type="text"
                        >
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <div class="row">
                    <div class="form-group w-100">
                        <Label>
                            <template slot="label">
                                Внешность клиента:
                            </template>
                            <template slot="popoverText">
                                <pre>{{ $t('help.clientsAppearance') }}</pre>
                            </template>
                        </Label>
                        <input
                            v-model="updatedVisit.info.Appearance"
                            type="text"
                        >
                    </div>
                </div>
            </div>
        </div>
    </Modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Select from '@/components/common/Select'
import Modal from '@/components/common/Modal.vue'
import Cost from '@/components/common/Cost.vue'
import Label from '@/components/common/LabelWithPopover.vue'
import deepCopy from '@/utils/deepCopy'
import removeDuplicates from '@/utils/removeDuplicates'

export default {
    name: 'UpdateVisitInfoPopup',
    components: {
        Modal,
        Cost,
        Label,
        Select
    },
    props: {
        visit: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            objective: {},
            updatedVisit: {},
            airline: {},
            monthlyIncome: {},
            partners: []
        }
    },
    computed: {
        ...mapGetters('client', ['getClientsList']),
        ...mapGetters('goods', ['goodsList']),
        ...mapGetters('airline', ['getAirlinesList']),
        ...mapGetters('tourPartner', ['getTourPartnersList', 'getTourPartnerById']),
    },
    created() {
        this.updatedVisit = deepCopy(this.visit)
        this.monthlyIncome = {
            amount: this.visit.info.MonthlyIncome.Amount,
            currency: this.visit.info.MonthlyIncome.Currency
        }
        this.airline = this.getAirlinesList.find(airline => airline.id === this.visit.info.AirlineId)
        this.partners = this.visit.info.TourPartnerIds.map(item => this.getTourPartnerById(item))
    },
    methods: {
        ...mapActions('visit', ['callUpdateVisitInfo', 'callGetVisitById']),
        ...mapActions('tourPartner', ['callGetTourPartnersList']),
        updateVisitInfoHandler() {
            this.updatedVisit.info.MonthlyIncome = {Amount: this.monthlyIncome.amount, Currency: this.monthlyIncome.currency.value}
            this.updatedVisit.info.AirlineId = (this.airline || {}).id || ''
            if(((this.updatedVisit || {}).info || {}).AmountOfAdults < 1) {
                this.$snotify.warning('В выезде должен быть хотя-бы один взрослый')
            } else if(!((this.updatedVisit || {}).info || {}).Appearance) {
                this.$snotify.warning('Опишите внешность клиента')
            } else if (+((this.updatedVisit.info.MonthlyIncome || {}).amount || 0) && !((this.updatedVisit.info.MonthlyIncome || {}).currency || {}).value) {
                this.$snotify.warning('Выберите валюту дохода')
            } else if(!((this.updatedVisit || {}).info || {}).FlightNumber) {
                this.$snotify.warning('Укажите номер рейса')
            } else {
                this.callUpdateVisitInfo(this.updatedVisit).then(data => {
                    if (data.Id) {
                        this.$emit('close', true)
                        this.callGetVisitById(this.updatedVisit.id)
                        this.$snotify.success('Выезд обновлён')

                    } else {
                        this.$snotify.error('Ошибка обновления выезда')
                    }
                }).catch(error => {
                    console.log(error)
                    this.$snotify.error('Ошибка выполнения запроса')
                })
            }
        },
        changeTourPartnerHandler() {
            const selectedPartner = this.partners.map(item => item.id)
            this.updatedVisit.info.TourPartnerIds = removeDuplicates(selectedPartner).filter(item => !!(item))
        }
    }
}
</script>

<style lang="stylus">
    .update-visit {
        .multiselect {
            height auto
        }
        .row {
            margin-left -8px
            margin-right -8px
            & > div {
                padding 8px
            }
        }
    }

</style>
