import API from 'api'

import model from '@/store/modules/hotel/model'

const Hotel = model.Hotel
const ContactInfo = model.ContactInfo
const ContactInfoType = model.ContactInfoType

export default function({commit, dispatch, rootGetters}) {
    commit('loading', {status: true}, {root: true})
    let hotelsList = []
    API.GetHotelsList({}, data => {
        commit('loading', {status: false}, {root: true})
        hotelsList.push(new Hotel(
            data.Id,
            data.CityId,
            data.CountryId,
            data.Name,
            data.ContactInfo.map(p => new ContactInfo(new ContactInfoType(p.Type.Id, p.Type.Type), p.Value)),
        ))
    }, error => {
        commit('loading', {status: false},{root: true})
        if (error && error.code === 16) {
            dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
        } else if (error) {
            console.error(error)
        }
        commit('hotelsList', hotelsList)
    }, status => {
        // console.log('GetHotelsList::status', status)
    }, {
        sessionToken: rootGetters['auth/sessionToken']
    })
}

