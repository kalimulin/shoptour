import API from 'api'

import model from '@/store/modules/city/model'
const Country = model.Country

export default function({commit, dispatch, rootGetters}) {
    commit('loading', {status: true}, {root: true})
    let countriesList = []
    API.GetCountriesList({}, data => {
        commit('loading', {status: false}, {root: true})
        countriesList.push(new Country(
            data.Id,
            data.Name
        ))
    }, error => {
        commit('loading', {status: false},{root: true})
        if (error && error.code === 16) {
            dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
        } else if (error) {
            console.error('Request error', error)
        }
        commit('countriesList', countriesList)
    }, status => {
        // console.log('Countries::status', status)
    }, {
        sessionToken: rootGetters['auth/sessionToken']
    })
}
