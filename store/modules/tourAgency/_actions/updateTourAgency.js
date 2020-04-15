import API from 'api'

export default function({commit, dispatch, rootGetters}, tourAgency) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        const requestData = {
            TourAgencyId: tourAgency.id,
            CityId: tourAgency.cityId,
            CountryId: tourAgency.countryId,
            Name: tourAgency.name,
            ContactInfo: tourAgency.contactInfo.map(contact => {
                return {
                    Type: {
                        Id: contact.type.id,
                        Type: contact.type.type
                    },
                    Value: contact.value
                }
            })
        }
        API.UpdateTourAgency(requestData, data => {
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
            // console.log('Update tour agency::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

