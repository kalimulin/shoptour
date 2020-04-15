import API from 'api'

import model from '@/store/modules/tourAgency/model'

const TourAgency = model.TourAgency
const Percent = model.Percent
const ContactInfo = model.ContactInfo
const ContactInfoType = model.ContactInfoType

export default function({commit, dispatch, rootGetters}, {agencyId}) {
    commit('loading', {status: true}, {root: true})
    let tourAgency = {}
    commit('tourAgency', tourAgency)
    // console.log('---------', agencyId)
    return new Promise((resolve, reject) => {
        API.GetTourAgency({
            Id: agencyId
        }, data => {
            commit('loading', {status: false},{root: true})
            tourAgency = new TourAgency(
                data.Id,
                data.CityId,
                data.CountryId,
                data.Name,
                data.Percents = data.Percents.map(p => new Percent(p.CategoryId, p.Percent)),
                data.ContactInfo.map(p => new ContactInfo(new ContactInfoType(p.Type.Id, p.Type.Type), p.Value)),
            )
        }, error => {
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error) {
                reject(error)
                console.error('Request error', error)
            }
            resolve(tourAgency)
            commit('tourAgency', tourAgency)
        }, status => {
            // console.log('GetTourAgency::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

