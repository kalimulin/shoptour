import API from 'api'

import model from '@/store/modules/city/model'
const City = model.City

export default function({commit, dispatch, rootGetters}) {
    commit('loading', {status: true}, {root: true})
    let citiesList = []
    API.GetCitiesList({}, data => {
        commit('loading', {status: false}, {root: true})
        citiesList.push(new City(
            data.Id,
            data.CountryId,
            data.Name
        ))
    }, error => {
        commit('loading', {status: false},{root: true})
        if (error && error.code === 16) {
            dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
        } else if (error) {
            console.error('Request error', error)
        }
        commit('citiesList', citiesList)
    }, status => {
        // console.log('Cities::status', status)
    }, {
        sessionToken: rootGetters['auth/sessionToken']
    })
}
