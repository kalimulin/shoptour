import API from 'api'

import model from '@/store/modules/tourAgency/model'

const ProfitByAgency = model.ProfitByAgency
const Cost = model.Cost
const Store = model.Store
const ContactInfo = model.ContactInfo
const ContactInfoType = model.ContactInfoType

export default function({commit, dispatch, rootGetters}, {dates, tourAgencyId}) {
    if (dates && tourAgencyId) {
        // console.log("Agency Payload", {dates, tourAgencyId})
        commit('loading', {status: true}, {root: true})
        let purchases = []
        API.GetAgencyProfit({
            StartDate: dates.startDate,
            EndDate: dates.endDate,
            TourAgencyId: tourAgencyId
        }, data => {
            purchases.push(new ProfitByAgency(
                data.GoodId,
                new Cost(data.TotalCost.Amount, data.TotalCost.Currency),
                data.ClientId,
                data.Date,
                data.AgencyPersent,
                new Cost(data.AgencyProfit.Amount, data.AgencyProfit.Currency),
                new Store(
                    data.Store.Id,
                    data.Store.CityId,
                    data.Store.CountryId,
                    data.Store.Name,
                    data.Store.ContactInfo.map(p => new ContactInfo(new ContactInfoType(p.Type.Id, p.Type.Type), p.Value)),
                ),
                data.EmployeeId
            ))
        }, error => {
            commit('loading', {status: false}, {root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error) {
                console.error('Request error', error)
            }
            commit('tourAgencyPurchaseList', purchases)
        }, status => {
            // console.log('TourAgencyPurchases::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    }
}
