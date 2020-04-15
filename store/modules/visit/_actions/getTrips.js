import API from 'api'
import propsNameToCamelCase from '@/utils/propsNameToCamelCase'

export default function({commit, dispatch, rootGetters}, payload) {
    commit('loading', {status: true}, {root: true})
    let tripsList = []
    // console.log(payload.clientId)
    API.GetTrips({CLientId: payload.clientId}, data => {
        commit('loading', {status: false}, {root: true})
        tripsList.push(propsNameToCamelCase(data))
    }, error => {
        commit('loading', {status: false},{root: true})
        if (error && error.code === 16) {
            dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
        } else if (error) {
            console.error('Request error', error)
        }
        commit('tripsList', tripsList)
    }, status => {
        // console.log('Trips::status', status)
    }, {
        sessionToken: rootGetters['auth/sessionToken']
    })
}

