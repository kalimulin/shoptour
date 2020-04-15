import API from 'api'

import model from '@/store/modules/payout/model'

const EmployeePayout = model.EmployeePayout
const Payout = model.ActualPayout
const Employee = model.Employee

export default function({commit, dispatch, rootGetters}, month) {
    if(month) {
        commit('loading', {status: true}, {root: true})
        let payoutList = []
        API.GetActualPayout({
            Month: month
        }, data => {
            payoutList.push(new EmployeePayout(
                new Payout(
                    data.Payout.PayoutId,
                    data.Payout.Month,
                    data.Payout.Year,
                    data.Payout.PaidOff,
                    data.Payout.Completed
                ),
                new Employee(data.Employee.Id, data.Employee.IdentityData.FullName, data.Employee.IdentityData.Email)
            ))
        }, error => {
            commit('loading', {status: false}, {root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error) {
                console.error('Request error', error)
            }
            commit('employeesActualPayout', payoutList)
        }, status => {
            // console.log('CallGetActualPayout::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    }
}
