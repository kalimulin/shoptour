import API from 'api'

export default function({commit, dispatch, rootGetters}, {payoutId, paidOff, completed}) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        API.SetPaidOffForEmployee({
            PayoutId: payoutId,
            PaidOff: paidOff,
            Completed: completed
        }, data => {
            commit('loading', {status: false}, {root: true})
            resolve(data)
        }, error => {
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error) {
                console.error('Request error', error)
            }
            reject(error)
        }, status => {
            // console.log('SetPOEmployee::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}
