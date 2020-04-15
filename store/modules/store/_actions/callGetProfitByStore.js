import API from 'api'

import model from '@/store/modules/store/model'

const ProfitByStore = model.ProfitByStore
const Cost = model.Cost
const TourAgency = model.TourAgency
const ContactInfo = model.ContactInfo
const ContactInfoType = model.ContactInfoType

export default function({commit, dispatch, rootGetters}, {dates, storeId}) {
    if (dates && storeId) {
        commit('loading', {status: true}, {root: true})
        let purchases = []
        return new Promise((resolve, reject) => {
            API.GetProfitByStore({
                StartDate: dates.startDate,
                EndDate: dates.endDate,
                StoreId: storeId
            }, data => {
                purchases.push(new ProfitByStore(
                    data.GoodId,
                    new Cost(data.TotalCost.Amount, data.TotalCost.Currency),
                    data.ClientId,
                    data.Date,
                    data.StorePersent,
                    new Cost (data.Profit.Amount, data.Profit.Currency),
                    new TourAgency(
                        data.Agency.Id,
                        data.Agency.CityId,
                        data.Agency.CountryId,
                        data.Agency.Name,
                        data.Agency.ContactInfo.map(p => new ContactInfo(new ContactInfoType(p.Type.Id, p.Type.Type), p.Value)),
                    ),
                    data.EmployeeId
                ))
            }, error => {
                commit('loading', {status: false}, {root: true})
                if (error && error.code === 16) {
                    dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
                } else if (error && error.code !== 5) {
                    reject(error)
                    console.error('Request error', error)
                }
                resolve(purchases)
                commit('storePurchaseList', purchases)
            }, status => {
                // console.log('Store::status', status)
            }, {
                sessionToken: rootGetters['auth/sessionToken']
            })
        })
    }
}
