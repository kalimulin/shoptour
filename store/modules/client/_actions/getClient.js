import API from 'api'
import propsNameToCamelCase from '@/utils/propsNameToCamelCase'

import model from '@/store/modules/client/model'

const Client = model.Client
const Referer = model.Referer
const ContactInfo = model.ContactInfo
const ContactInfoType = model.ContactInfoType

export default function({commit, dispatch, rootGetters}, clientId) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        let client = {}
        API.GetClientById({ClientId: clientId}, data => {
            commit('loading', {status: false}, {root: true})
            client = propsNameToCamelCase(new Client(
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
            commit('client', client)
            resolve(client)
        }, error => {
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error) {
                console.error('Request error', error)
                reject(error)
            }
        }, status => {
            // console.log('GetClientById::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })

        let clientsCard = {}
        API.GetCardByClient({ClientId: clientId}, data => {
            commit('loading', {status: false}, {root: true})
            clientsCard = propsNameToCamelCase(data)
        }, error => {
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error && error.code !== 5) {
                console.error('Request error', error)
            }
            commit('clientsCard', clientsCard)
        }, status => {
            // console.log('GetClientById::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })

    })
}

