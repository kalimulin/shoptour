import API from 'api'
import propsNameToCamelCase from '@/utils/propsNameToCamelCase'

export default function({commit, dispatch, rootGetters}, clientId) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        //commit('visitsList', [])
        let visitsList = []
        API.GetVisitsByClient({ClientId: clientId}, data => {
            commit('loading', {status: false}, {root: true})
            if (data.Visit) {
                visitsList.push(propsNameToCamelCase(data.Visit))
            } else if (data.Client) {
                visitsList.forEach(visit => {
                    if (visit.clientId === data.Client.Id) {
                        visit.client = propsNameToCamelCase(data.Client)
                    }
                })
            } else if (data.TourAgency) {
                visitsList.forEach(visit => {
                    if (visit.referer.TourAgencyId === data.TourAgency.Id) {
                        visit.tourAgency = propsNameToCamelCase(data.TourAgency)
                    }
                })
            } else {
                visitsList.push(propsNameToCamelCase(data))
            }
        }, error => {
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                reject(error)
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error) {
                console.error('Request error', error)
                reject(error)
            } else {
                const visits = visitsList.sort((a,b) => {
                    if (a.checkInTime > b.checkInTime) {
                        return -1
                    }
                    if (a.checkInTime < b.checkInTime) {
                        return 1
                    }
                    return 0
                })
                //commit('visitsList', visits)
                resolve(visits)
            }
        }, status => {
            // console.log('GetVisitsByClient::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

