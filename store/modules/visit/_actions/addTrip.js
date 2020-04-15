import API from 'api'

export default function({commit, dispatch, rootGetters}, payload) {
    return new Promise((resolve, reject) => {
        // console.log(payload)
        commit('loading', {status: true}, {root: true})
        API.AddTrip(payload, data => {
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
            // console.log('AddTrip::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

