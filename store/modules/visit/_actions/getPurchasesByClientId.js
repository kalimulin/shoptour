import API from 'api'
import propsNameToCamelCase from '@/utils/propsNameToCamelCase'

export default function({commit, dispatch, rootGetters}, id) {
    commit('loading', {status: true}, {root: true})
    let purchases = []

    return new Promise((resolve, reject) => {
        API.GetPurchasesByClientId ({ClientId: id}, data => {
            commit('loading', {status: false}, {root: true})
            purchases.push(propsNameToCamelCase(data))
        }, error => {
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error && error !== 5) {
                reject(error)
                console.error('Request error', error)
            }
            resolve(purchases)
            commit('purchases', purchases)
        }, status => {
            // console.log('Client purchases::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

