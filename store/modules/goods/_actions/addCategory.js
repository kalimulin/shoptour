import API from 'api'

export default function({commit, dispatch, rootGetters}, name) {
    // console.log(name)
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        API.AddCategory({
            Name: {
                RU: name.RU
            }
        }, data => {
            commit('loading', {status: false}, {root: true})
            resolve(data)
        }, error => {
            // console.log('Add category::done', error)
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            }
            reject(error)
        }, status => {
            // console.log('Add category::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

