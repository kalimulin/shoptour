import API from 'api'

export default function({commit, dispatch, rootGetters}, type) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        API.AddContactInfoType({
            Type: type,
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
            // console.log('AddContactInfoType::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}
