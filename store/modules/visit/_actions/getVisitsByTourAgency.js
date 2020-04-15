import API from 'api'
import propsNameToCamelCase from '@/utils/propsNameToCamelCase'

export default function({commit, dispatch, rootGetters}, TourAgencyId) {
    if (TourAgencyId) {
        commit('loading', {status: true}, {root: true})
        commit('visitsList', [])
        let visitsList = []
        // console.log({TourAgencyId})
        return new Promise((resolve, reject) => {
            API.GetVisitsByTourAgency({TourAgencyId}, data => {
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
                    dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
                } else if (error && error.code !== 5) {
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
                // console.log('GetVisitsByTourAgency::status', status)
            }, {
                sessionToken: rootGetters['auth/sessionToken']
            })
        })
    }
}

