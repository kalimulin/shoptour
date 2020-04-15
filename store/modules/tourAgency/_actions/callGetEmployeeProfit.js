import API from 'api'

import model from '@/store/modules/tourAgency/model'

const ProfitByEmployee = model.ProfitByEmployee
const Cost = model.Cost
const Store = model.Store
const ContactInfo = model.ContactInfo
const ContactInfoType = model.ContactInfoType

export default function({commit, dispatch, rootGetters}, {dates, employeeId}) {
    if(dates && employeeId) {
        commit('loading', {status: true}, {root: true})
        let purchases = []
        return new Promise((resolve, reject) => {
            API.GetEmployeeProfit({
                StartDate: dates.startDate,
                EndDate: dates.endDate,
                EmployeeId: employeeId
            }, data => {
                purchases.push(new ProfitByEmployee(
                    data.GoodId,
                    new Cost(data.TotalCost.Amount, data.TotalCost.Currency),
                    data.ClientId,
                    data.Date,
                    data.EmployeePersent,
                    new Cost(data.EmployeeProfit.Amount, data.EmployeeProfit.Currency),
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
                commit('tourAgencyEmployeePurchaseList', purchases)
            }, status => {
                // console.log('TourAgencyEmployeePurchases::status', status)
            }, {
                sessionToken: rootGetters['auth/sessionToken']
            })
        })
    }
}
