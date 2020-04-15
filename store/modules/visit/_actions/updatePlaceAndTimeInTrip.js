import API from 'api'
import log from '@/utils/log'

export default function({commit, dispatch, rootGetters}, payload) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        // console.log(payload)
        API.SetPlaceAndTimeInTrip({
            TripId: payload.tripId,
            PlannedTime: payload.plannedTime,
            PlannedPlace: payload.plannedPlace
        }, data => {
            commit('loading', {status: false}, {root: true})
            resolve(data)
        }, error => {
            log('SetPlaceAndTimeInTrip::done', error)
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            }
            reject(error)
        }, status => {
            log('SetPlaceAndTimeInTrip::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

