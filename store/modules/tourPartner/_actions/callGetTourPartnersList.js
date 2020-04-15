import API from 'api'

import model from '@/store/modules/tourPartner/model'

const TourPartner = model.TourPartner
const ContactInfo = model.ContactInfo
const ContactInfoType = model.ContactInfoType

export default function({commit, dispatch, rootGetters}) {
    commit('loading', {status: true}, {root: true})
    let tourPartners = []

    return new Promise((resolve, reject) => {
        API.GetTourPartnersList({}, data => {
            tourPartners.push(new TourPartner(
                data.Id,
                data.Name,
                data.ContactInfo.map(p => new ContactInfo(new ContactInfoType(p.Type.Id, p.Type.Type), p.Value)),
            ))
        }, error => {
            commit('loading', {status: false}, {root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error && error.code !== 5) {
                reject(error)
                console.error('Request error', error)
            }
            resolve(tourPartners)
            commit('tourPartnersList', tourPartners)
        }, status => {
            // console.log('Tour partners::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}
