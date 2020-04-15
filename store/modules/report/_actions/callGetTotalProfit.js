import API from 'api'

import model from '@/store/modules/report/model'

const TotalProfit = model.TotalProfit
const Cost = model.Cost
const Store = model.Store
const TourAgency = model.TourAgency
const ContactInfo = model.ContactInfo
const ContactInfoType = model.ContactInfoType

export default function({commit, dispatch, rootGetters}, dates) {
    if (dates) {
        commit('loading', {status: true}, {root: true})
        const purchases = []
        return new Promise((resolve, reject) => {
            API.GetTotalProfit({
                StartDate: dates.startDate,
                EndDate: dates.endDate
            }, data => {
                purchases.push(new TotalProfit(
                    data.GoodId,
                    new Cost(data.TotalCost.Amount, data.TotalCost.Currency),
                    data.ClientId,
                    data.Date,
                    data.StorePersent,
                    new Cost(data.Profit.Amount, data.Profit.Currency),
                    new TourAgency(
                        data.Agency.Id,
                        data.Agency.CityId,
                        data.Agency.CountryId,
                        data.Agency.Name,
                        data.Agency.ContactInfo.map(p => new ContactInfo(new ContactInfoType(p.Type.Id, p.Type.Type), p.Value)),
                    ),
                    data.EmployeeId,
                    new Store(
                        data.Store.Id,
                        data.Store.CityId,
                        data.Store.CountryId,
                        data.Store.Name,
                        data.Store.ContactInfo.map(p => new ContactInfo(new ContactInfoType(p.Type.Id, p.Type.Type), p.Value)),
                    )
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
                commit('totalProfitList', purchases)
            }, status => {
                // console.log('TotalProfit::status', status)
            }, {
                sessionToken: rootGetters['auth/sessionToken']
            })
        })
    }
}
