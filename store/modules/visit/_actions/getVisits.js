import API from 'api'
import propsNameToCamelCase from '@/utils/propsNameToCamelCase'

export default function({commit, dispatch, rootGetters}, payload) {
    // console.log('------------', payload)
    // commit('loading', {status: true}, {root: true})
    commit('visitsList', [])
    let visitsList = []
    return new Promise((resolve, reject) => {
        API.GetVisits({
            Time: (payload && payload.time) || new Date().toISOString(),
            CityId: (payload || {}).cityId !== 'top' ? (payload || {}).cityId : undefined
        }, data => {
            // console.log(data)
            // commit('loading', {status: false}, {root: true})
            if (data.Visit) {
                visitsList.push(propsNameToCamelCase(data.Visit))
            }
            if (data.Client) {
                visitsList.forEach(visit => {
                    if (visit.clientId === data.Client.Id) {
                        visit.client = propsNameToCamelCase(data.Client)
                    }
                })
            }
            if (data.TourAgency) {
                visitsList.forEach(visit => {
                    if (((visit || {}).referer || {}).TourAgencyId === data.TourAgency.Id) {
                        visit.tourAgency = propsNameToCamelCase(data.TourAgency)
                    }
                })
            }
        }, error => {
            // commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/${AUTH_LOGOUT}`, null, {root: true})
            } else if (error) {
                reject(error)
                console.error('Request error', error)
            }

            const sorted = visitsList.sort((a,b) => {
                if (a.checkInTime > b.checkInTime) {
                    return -1
                }
                if (a.checkInTime < b.checkInTime) {
                    return 1
                }
                return 0
            })
            resolve(sorted)
            commit('visitsList', sorted)
        }, status => {
            // console.log('Visits::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

