import API from 'api'

export default function({commit, dispatch, rootGetters}, form) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        API.AddGoodInStore({
            StoreId: form.storeId,
            GoodId: form.good.id
        }, data => {
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
            // console.log('Add hotel::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

