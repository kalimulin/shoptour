import API from 'api'

export default function({commit, dispatch, rootGetters}, payload) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        API.AddCardForClient(payload, data => {
            commit('loading', {status: false}, {root: true})
            resolve(data)
        }, error => {
            // console.log('AddCardForClient::done', error)
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            }
            reject(error)
        }, status => {
            // console.log('AddCardForClient::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

