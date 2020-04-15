<template>
    <div class="p-2">
        <h1>Test</h1>
        <hr>
        <h2>AddNewTourAgencyEmployee</h2>
        <form @submit.prevent="FormAddNewTourAgencyEmployeeSubmit">
            <div class="mt-2">
                <input
                    v-model="FormAddNewTourAgencyEmployee.FullName"
                    type="text"
                    placeholder="FullName"
                >
            </div>
            <div class="mt-2">
                <input
                    v-model="FormAddNewTourAgencyEmployee.Email"
                    type="email"
                    placeholder="Email"
                >
            </div>
            <div class="mt-2">
                <input
                    v-model="FormAddNewTourAgencyEmployee.TourAgencyId"
                    type="text"
                    placeholder="TourAgencyId"
                >
            </div>
            <div class="mt-2">
                <input type="submit">
            </div>
        </form>
        <hr>
        <h2>AddPurchase</h2>
        <form @submit.prevent="addPurchaseFormSubmit">
            <div class="mt-2">
                <input type="submit">
            </div>
        </form>
        <hr>
        <h2>AddVisitObjective</h2>
        <form @submit.prevent="AddVisitObjective">
            <div class="mt-2">
                <input type="submit">
            </div>
        </form>
        <hr>
        <h2>AddTrip</h2>
        <form @submit.prevent="AddTrip">
            <div class="mt-2">
                <input type="submit">
            </div>
        </form>
        <hr>
        <h2>AddGoodInStore</h2>
        <form @submit.prevent="AddGoodInStore">
            <div class="mt-2">
                <input type="submit">
            </div>
        </form>
        <hr>
        <h2>AddCardForClient</h2>
        <form @submit.prevent="AddCardForClient">
            <div class="mt-2">
                <input
                    v-model="clientCardNumber"
                    type="text"
                >
                <input type="submit">
            </div>
        </form>
        <hr>
        <h2>GetClientByCard</h2>
        <form @submit.prevent="GetClientByCard">
            <div class="mt-2">
                <input
                    v-model="clientCardNumber"
                    type="text"
                >
                <input type="submit">
            </div>
        </form>
        <hr>
        <h2>SetPercentInStore</h2>
        <form @submit.prevent="SetPercentInStore">
            <div class="mt-2">
                <input type="submit">
            </div>
        </form>
        <hr>
        <h2>UpdateTourAgency</h2>
        <form @submit.prevent="UpdateTourAgency">
            <div class="mt-2">
                <input type="submit">
            </div>
        </form>
        <hr>
        <h2>UpdateStore</h2>
        <form @submit.prevent="UpdateStore">
            <div class="mt-2">
                <input type="submit">
            </div>
        </form>
        <hr>
        <h2>UpdateHotel</h2>
        <form @submit.prevent="UpdateHotel">
            <div class="mt-2">
                <input type="submit">
            </div>
        </form>
        <hr>
        <h2>UpdateAirline</h2>
        <form @submit.prevent="UpdateAirline">
            <div class="mt-2">
                <input type="submit">
            </div>
        </form>
        <hr>
        <h2>UpdateTourPartner</h2>
        <form @submit.prevent="UpdateTourPartner">
            <div class="mt-2">
                <input type="submit">
            </div>
        </form>
        <hr>
        <h2>UpdateClientContactInfo</h2>
        <form @submit.prevent="UpdateClientContactInfo">
            <div class="mt-2">
                <input type="submit">
            </div>
        </form>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import API from 'api'

export default {
    name: 'Test',
    data() {
        return {
            FormAddNewTourAgencyEmployee: {
                FullName: 'employee',
                Email: '',
                TourAgencyId: 'bhr6hq81jc8s5ovg9kkg'
            },
            clientCardNumber: null
        }
    },
    computed: {
        ...mapGetters({
            sessionToken: 'auth/sessionToken'
        })
    },
    created() {
        this.GetTourAgencies()
        this.GetUsersList()
        this.GetClientById()
        this.GetVisitsByClient()
        this.GetPurchasesByClientId()
        this.GetObjectives()
        this.GetGoodsByStore(),
        this.GetPercentsByStore()
    },

    methods: {
        GetTourAgencies: function() {
            let tourAgencies = []
            API.GetTourAgencies({}, data => {
                tourAgencies.push(data)
                // console.log('TourAgencies::data', data)
            }, error => {
                console.log('TourAgencies::done', error)
            }, status => {
                console.log('TourAgencies::data', tourAgencies)
                console.log('TourAgencies::status', status)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        GetUsersList() {
            const UsersRole = {
                Name: 'tour-agency-manager',
                Context: 'bhr6hq81jc8s5ovg9kkg'
            }
            let userlist = []
            API.GetUsersList({
                UsersRole
            }, data => {
                userlist.push(data)
            }, error => {
                console.log('Users list::done', error)
            }, status => {
                console.log('Users list::status', status)
                console.log('Users list::data', userlist)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        FormAddNewTourAgencyEmployeeSubmit() {
            API.AddNewTourAgencyEmployee({
                FullName: this.FormAddNewTourAgencyEmployee.FullName,
                Email: this.FormAddNewTourAgencyEmployee.Email,
                TourAgencyId: this.FormAddNewTourAgencyEmployee.TourAgencyId
            }, data => {
                console.log('TourAgencies::data', data)
            }, error => {
                console.log('TourAgencies::done', error)
            }, status => {
                console.log('TourAgencies::status', status)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        GetClientById() {
            API.GetClientById({
                ClientId: 'bhr6hqg1jc8s5ovg9km0',
            }, data => {
                console.log('Client by id::data', data)
            }, error => {
                console.log('Client by id::done', error)
            }, status => {
                console.log('Client by id::status', status)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        GetVisitsByClient() {
            let visitslist = []
            API.GetVisitsByClient({
                ClientId: 'bhr6hqg1jc8s5ovg9km0',
            }, data => {
                visitslist.push(data)
            }, error => {
                console.log('Visits by client id::done', error)
            }, status => {
                console.log('Visits by client id::status', status)
                console.log('Visits by client id::data', visitslist)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        GetPurchasesByClientId() {
            let visitslist = []
            API.GetPurchasesByClientId({
                ClientId: 'bhr6hqg1jc8s5ovg9km0',
            }, data => {
                visitslist.push(data)
            }, error => {
                console.log('Purchases by client id::done', error)
            }, status => {
                console.log('Purchases by client id::status', status)
                console.log('Purchases by client id::data', visitslist)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        addPurchaseFormSubmit() {
            API.AddPurchase({
                Purchase: {
                    Id: '',
                    GoodId: 'bhr9ep81jc8s0f2hn1fg',
                    Cash: {
                        Amount: '1000',
                        Currency: 'RUB'
                    },
                    Card: {
                        Amount: '2000',
                        Currency: 'RUB'
                    },
                    Delivery: {
                        Amount: '3000',
                        Currency: 'RUB'
                    },
                    StoreId: 'bhr9ep81jc8s0f2hn1fg',
                    ClientId: 'bhvlg981jc8s0m1p9dlg',
                    TourAgencyId: '',
                    VisitId: '',
                    EmployeeId: '',
                    CardId: '123',
                    Date: '2019-03-05T13:10:25'
                },
            }, data => {
                console.log('Add purchase::data', data)
            }, error => {
                console.log('Add purchase::done', error)
            }, status => {
                console.log('Add purchase::status', status)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        GetObjectives() {
            API.GetObjectives({
                ClientId: 'bhvlg981jc8s0m1p9dlg',
            }, data => {
                console.log('Objectives::data', data)
            }, error => {
                console.log('Objectives::done', error)
            }, status => {
                console.log('Objectives::status', status)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        AddVisitObjective() {
            API.AddVisitObjective({
                VisitId: 'bhvlr981jc8sfs8jk7mg',
                ObjectiveType: 'bhufsd81jc8p9gn90teg',
                Comment: {}
            }, data => {
                console.log('Add objective::data', data)
            }, error => {
                console.log('Add objective::done', error)
            }, status => {
                console.log('Add objective::status', status)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        AddTrip() {
            API.AddTrip({
                TransferManagerId: '',
                VisitObjectiveIds: ['bi4fdl81jc8u8d8f7ssg'],
                PlannedTimeStart: '2019-03-05T13:10:25',
                PlannedPlaceStart: 'На остановке перед отелем',
                PlannedTimeEnd: '2019-03-05T18:16:25',
                PlannedPlaceEnd: 'На остановке перед отелем',
                Stores: [{
                    StoreId: 'bhr6hq81jc8s5ovg9kl0',
                    Date: '2019-03-05T18:10:29'
                }]
            }, data => {
                console.log('Add trip::data', data)
            }, error => {
                console.log('Add trip::done', error)
            }, status => {
                console.log('Add trip::status', status)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        AddGoodInStore() {
            API.AddGoodInStore({
                StoreId: 'bhr6hq81jc8s5ovg9kl0',
                GoodId: 'bhr9ep81jc8s0f2hn1fg'
            }, data => {
                console.log('Add good to store::data', data)
            }, error => {
                console.log('Add good to store::done', error)
            }, status => {
                console.log('Add good to store::status', status)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        AddCardForClient() {
            API.AddCardForClient({
                ClientId: 'bi0cjcg1jc8u7s7sbg00',
                CardNumber: this.clientCardNumber
            }, data => {
                console.log('Add card to client::data', data)
            }, error => {
                console.log('Add card to client::done', error)
            }, status => {
                console.log('Add card to client::status', status)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        GetGoodsByStore() {
            API.GetGoodsByStore({
                StoreId: 'bhr6hq81jc8s5ovg9kl0',
            }, data => {
                console.log('Goods by store::data', data)
            }, error => {
                console.log('Goods by store::done', error)
            }, status => {
                console.log('Goods by store::status', status)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        GetPercentsByStore() {
            API.GetPercentsByStore({
                StoreId: 'bhr6hq81jc8s5ovg9kl0',
            }, data => {
                console.log('Percents by store::data', data)
            }, error => {
                console.log('Percents by store::done', error)
            }, status => {
                console.log('Percents by store::status', status)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        GetClientByCard() {
            API.GetClientByCard({
                CardNumber: this.clientCardNumber
            }, data => {
                console.log('GetClientByCard::data', data)
            }, error => {
                console.log('GetClientByCard::done', error)
            }, status => {
                console.log('GetClientByCard::status', status)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        SetPercentInStore() {
            API.SetPercentInStore({
                StoreId: 'bi7bh7hpvrvakmgnn6vg',
                Percent: {
                    CategoryId: 'bi7n78hpvrvakv9ersqg',
                    Percent: '12'
                }
            }, data => {
                console.log('SetPercentInStore::data', data)
            }, error => {
                console.log('SetPercentInStore::done', error)
            }, status => {
                console.log('SetPercentInStore::status', status)
            }, {
                sessionToken: this.sessionToken,
            })
        },
        UpdateTourAgency() {
            const requestData = {
                TourAgencyId: 'bi7bh7hpvrvakmgnn6v0',
                CityId: 'bi7bh7hpvrvakmgnn6u0',
                CountryId: 'bi7bh7hpvrvakmgnn6t0',
                Name: 'Магазин путешествий',
                ContactInfo: [
                    {
                        Key: 'Phone',
                        Value: '999888777'
                    }
                ]
            }
            API.UpdateTourAgency(requestData, data => {
                console.log('UpdateTourAgency::data', data)
            }, error => {
                console.log('UpdateTourAgency::done', error)
            }, status => {
                console.log('UpdateTourAgency::status', status)
            }, {
                sessionToken: this.sessionToken
            })
        },
        UpdateStore() {
            API.UpdateStore ({
                StoreId: 'bi7bh7hpvrvakmgnn6vg',
                CityId: 'bi8cr41pvrvf63lsheig',
                CountryId: 'bi8cqi1pvrvf63lshei0',
                Name: 'Modanisa',
                ContactInfo: [
                    {
                        Key: 'Phone',
                        Value: '555888777'
                    }
                ]
            }, data => {
                console.log('UpdateStore::data', data)
            }, error => {
                console.log('UpdateStore::done', error)
            }, status => {
                console.log('UpdateStore::status', status)
            }, {
                sessionToken: this.sessionToken
            })
        },
        UpdateHotel() {
            API.UpdateHotel ({
                HotelId: 'bi8css1pvrvf63lshej0',
                CityId: 'bi8cr41pvrvf63lsheig',
                CountryId: 'bi8cqi1pvrvf63lshei0',
                Name: 'Akra Hotel',
                ContactInfo: [{
                    Key: 'Phone',
                    Value: '222888777'
                }],
            }, data => {
                console.log('UpdateHotel::data', data)
            }, error => {
                console.log('UpdateHotel::done', error)
            }, status => {
                console.log('UpdateHotel::status', status)
            }, {
                sessionToken: this.sessionToken
            })
        },
        UpdateAirline() {
            API.UpdateAirline ({
                AirlineId: 'biq3lnppvrve41er91r0',
                Name: 'Аэрофлотт',
                ContactInfo: [{
                    Key: 'Phone',
                    Value: '222333777'
                }],
            }, data => {
                console.log('UpdateAirline::data', data)
            }, error => {
                console.log('UpdateAirline::done', error)
            }, status => {
                console.log('UpdateAirline::status', status)
            }, {
                sessionToken: this.sessionToken
            })
        },
        UpdateTourPartner() {
            API.UpdateTourPartner({
                TourPartnerId: 'biq8hmhpvrve41er923g',
                Name: 'Партнер 2',
                ContactInfo: [{
                    Key: 'Phone',
                    Value: '999333777'
                }],
            }, data => {
                console.log('UpdateTourPartner::data', data)
            }, error => {
                console.log('UpdateTourPartner::done', error)
            }, status => {
                console.log('UpdateTourPartner::status', status)
            }, {
                sessionToken: this.sessionToken
            })
        },
        UpdateClientContactInfo() {
            API.UpdateClientContactInfo({
                ClientId: 'bi7bh7ppvrvakmgnn70g',
                ContactInfo: [{
                    Key: 'Phone',
                    Value: '888333777'
                }],
            }, data => {
                console.log('UpdateTourPartner::data', data)
            }, error => {
                console.log('UpdateTourPartner::done', error)
            }, status => {
                console.log('UpdateTourPartner::status', status)
            }, {
                sessionToken: this.sessionToken
            })
        },
    }
}
</script>

