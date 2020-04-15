import API from 'api'

export default function({commit, dispatch, rootGetters}, {employee}) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        const method = (employee.isManager && employee.isManager === true) ? 'AddNewTourAgencyManager' : 'AddNewTourAgencyEmployee'
        API[method]({
            FullName: employee.fullName,
            Email: employee.email,
            TourAgencyId: employee.tourAgencyId
        }, data => {
            commit('loading', {status: false}, {root: true})
            resolve(data)
        }, error => {
            commit('loading', {status: false}, {root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error) {
                console.error('Request error', error)
            }
            reject(error)
        }, status => {
            // console.log(method, '::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}
