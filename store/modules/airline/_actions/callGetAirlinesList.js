import API from 'api'

import model from '@/store/modules/airline/model'

const Airline = model.Airline
const ContactInfo = model.ContactInfo
const ContactInfoType = model.ContactInfoType

export default function({commit, dispatch, rootGetters}) {
    commit('loading', {status: true}, {root: true})
    let airlines = []
    API.GetAirlinesList({}, data => {
        airlines.push(new Airline(
            data.Id,
            data.Name,
            data.ContactInfo.map(p => new ContactInfo(new ContactInfoType(p.Type.Id, p.Type.Type), p.Value)),
        ))
    }, error => {
        commit('loading', {status: false}, {root: true})
        if (error && error.code === 16) {
            dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
        } else if (error) {
            console.error('Request error', error)
        }
        commit('airlinesList', airlines)
    }, status => {
        // console.log('Airlines::status', status)
    }, {
        sessionToken: rootGetters['auth/sessionToken']
    })
}
