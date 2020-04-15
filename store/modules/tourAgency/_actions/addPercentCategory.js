import API from 'api'


export default function({commit, dispatch, rootGetters}, payload) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        const requestData = {
            TourAgencyId: payload.tourAgencyId,
            Percent: {
                CategoryId: payload.categoryId,
                Percent: parseFloat(payload.percent)
            }
        }
        // console.log(requestData)
        API.SetPercentInTourAgency(requestData, data => {
            commit('loading', {status: false}, {root: true})
            resolve(data)
        }, error => {
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error) {
                console.error('Request error', error)
                reject(error)
            }
        }, status => {
            // console.log('Update tour agency::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

