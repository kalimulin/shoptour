import API from 'api'

import model from '@/store/modules/tourAgency/model'

const TourAgency = model.TourAgency
const Percent = model.Percent
const ContactInfo = model.ContactInfo
const ContactInfoType = model.ContactInfoType

export default function({commit, dispatch, rootGetters}, {context}) {
    commit('loading', {status: true}, {root: true})
    let tourAgenciesList = []
    return new Promise((resolve, reject) => {
        API.GetTourAgencies({
            CityId: (context && context !== 'top') ? context : undefined
        }, data => {
            tourAgenciesList.push(new TourAgency(
                data.Id,
                data.CityId,
                data.CountryId,
                data.Name,
                data.Percents = data.Percents.map(p => new Percent(p.CategoryId, p.Percent)),
                data.ContactInfo.map(p => new ContactInfo(new ContactInfoType(p.Type.Id, p.Type.Type), p.Value)),
            ))
            commit('loading', {status: false},{root: true})
        }, error => {
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error) {
                reject(error)
                console.error('Request error', error)
            }
            resolve(tourAgenciesList)
            commit('tourAgenciesList', tourAgenciesList)
        }, status => {
            // console.log('TourAgencies::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

