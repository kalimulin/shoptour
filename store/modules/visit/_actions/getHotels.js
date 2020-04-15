import API from 'api'
import propsNameToCamelCase from '@/utils/propsNameToCamelCase'

export default function({commit, dispatch, rootGetters}) {
    commit('loading', {status: true}, {root: true})
    // console.log('gethotels')
    let hotelsList = []
    API.GetHotelsList({}, data => {
        commit('loading', {status: false}, {root: true})
        hotelsList.push(propsNameToCamelCase(data))
    }, error => {
        commit('loading', {status: false},{root: true})
        if (error && error.code === 16) {
            dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
        } else if (error) {
            console.error('Request error', error)
        }
        commit('hotelsList', hotelsList)
    }, status => {
        // console.log('Hotels::status', status)
    }, {
        sessionToken: rootGetters['auth/sessionToken']
    })
}

