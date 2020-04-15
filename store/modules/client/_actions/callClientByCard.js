import API from 'api'

export default function({commit, dispatch, rootGetters}, cardNumber) {
    return new Promise((resolve, reject) => {
        // commit('loading', {status: true}, {root: true})
        API.GetClientByCard({
            CardNumber: cardNumber
        }, data => {
            // commit('loading', {status: false}, {root: true})
            resolve(data)
        }, error => {
            // commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error && error.code !== 2) {
                console.error('Request error', error)
            }
            reject(error)
        }, status => {
            // console.log('GetClientByCard::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}
