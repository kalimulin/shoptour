import API from 'api'

import model from '@/store/modules/contactInfoType/model'

const ContactInfoType = model.ContactInfoType

export default function({commit, dispatch, rootGetters}) {
    commit('loading', {status: true}, {root: true})
    let contactInfoTypes = []
    API.GetContactInfoTypes({}, data => {
        contactInfoTypes.push(new ContactInfoType(
            data.Id,
            data.Type,
        ))
    }, error => {
        commit('loading', {status: false}, {root: true})
        if (error && error.code === 16) {
            dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
        } else if (error) {
            console.error('Request error', error)
        }
        commit('contactInfoTypesList', contactInfoTypes)
    }, status => {
        // console.log('GetContactInfoTypes::status', status)
    }, {
        sessionToken: rootGetters['auth/sessionToken']
    })
}
