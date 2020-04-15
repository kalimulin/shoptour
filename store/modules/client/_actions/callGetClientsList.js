import API from 'api'

import model from '@/store/modules/client/model'

const Client = model.Client
const Referer = model.Referer
const ContactInfo = model.ContactInfo
const ContactInfoType = model.ContactInfoType

export default function({commit, dispatch, rootGetters}) {
    commit('loading', {status: true}, {root: true})
    let clientsList = []
    return new Promise((resolve, reject) => {
        API.GetClientsList({}, data => {
            commit('loading', {status: false}, {root: true})
            clientsList.push(new Client(
                data.Id,
                data.FullName,
                data.Age,
                data.Gender,
                data.ContactInfo.map(p => new ContactInfo(new ContactInfoType(p.Type.Id, p.Type.Type), p.Value)),
                data.RegistrationDate,
                new Referer(
                    data.Referer.TourAgencyId,
                    data.Referer.EmployeeId
                )
            ))
        }, error => {
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error && error.code !== 5) {
                reject(error)
                console.error('Request error', error)
            }
            resolve(clientsList)
            commit('clientsList', clientsList)
        }, status => {
            // console.log('Clients::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}
