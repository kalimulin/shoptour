import API from 'api'

export default function({commit, dispatch, rootGetters}, hotel) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        API.AddHotel({
            Name: hotel.name,
            ContactInfo: hotel.contactInfo.map(contact => {
                return {
                    Type: {
                        Id: contact.type.id,
                        Type: contact.type.type
                    },
                    Value: contact.value
                }
            }),
            CityId: hotel.city.id,
            CountryId: hotel.country.id,
        }, data => {
            commit('loading', {status: false}, {root: true})
            resolve(data)
        }, error => {
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error) {
                console.error('Request error', error)
            }
            reject(error)
        }, status => {
            // console.log('Add hotel::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

