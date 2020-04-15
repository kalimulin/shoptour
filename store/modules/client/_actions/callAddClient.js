import API from 'api'

export default function({commit, dispatch, rootGetters}, client) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        // console.log(client)
        API.AddClient({
            FullName: client.fullName,
            Age: client.age,
            Gender: client.gender,
            ContactInfo: client.contactInfo.map(contact => {
                return {
                    Type: {
                        Id: contact.type.id,
                        Type: contact.type.type
                    },
                    Value: contact.value
                }
            }),
            TourAgencyId: client.tourAgencyId
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
            // console.log('Add client::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}
