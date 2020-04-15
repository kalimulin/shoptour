import API from 'api'

export default function({commit, dispatch, rootGetters}, payload) {
    return new Promise((resolve, reject) => {
        if (payload) {
            commit('loading', {status: true}, {root: true})
            const purchase = {
                Purchase: {
                    Id: '',
                    GoodId: ((payload || {}).good || {}).id || '',
                    Cash: {
                        Amount: ((payload || {}).cash || {}).amount || '',
                        Currency: (((payload || {}).cash || {}).currency || {}).value || ''
                    },
                    Card: {
                        Amount: ((payload || {}).card || {}).amount || '',
                        Currency: (((payload || {}).card || {}).currency || {}).value || ''
                    },
                    Delivery: {
                        Amount: ((payload || {}).delivery || {}).amount || '',
                        Currency: (((payload || {}).delivery || {}).currency || {}).value || ''
                    },
                    StoreId: payload.storeId,
                    ClientId: payload.clientId,
                    TourAgencyId: payload.tourAgencyId,
                    VisitId: payload.visitId,
                    EmployeeId: payload.employeeId,
                    Date: payload.date || '',
                    Comment: {
                        EN: payload.comment.EN || '',
                        RU: payload.comment.RU || '',
                        TR: payload.comment.TR || ''
                    }
                }
            }
            API.AddPurchase(purchase, data => {
                commit('loading', {status: false}, {root: true})
                resolve(data)
            }, error => {
                commit('loading', {status: false},{root: true})
                if (error && error.code === 16) {
                    dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
                } else if (error) {
                    console.error('Request error', error)
                }
                reject(error)
            }, status => {
                // console.log('AddPurchase::status', status)
            }, {
                sessionToken: rootGetters['auth/sessionToken']
            })
        } else {
            reject('No payload')
        }
    })
}

