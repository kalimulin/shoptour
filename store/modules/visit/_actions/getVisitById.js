import API from 'api'
import propsNameToCamelCase from '@/utils/propsNameToCamelCase'

export default function({commit, dispatch, rootGetters}, id) {
    return new Promise((resolve, reject) => {
        commit('visit', {})
        commit('loading', {status: true}, {root: true})
        let visit = {}
        API.GetVisitById ({VisitId: id}, data => {
            commit('loading', {status: false}, {root: true})
            visit = (propsNameToCamelCase(data))
        }, error => {
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error) {
                console.error('Request error', error)
            }
            commit('visit', visit)
            resolve(visit)
        }, status => {
            // console.log('Visit::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

