import API from 'api'

export default function({commit, dispatch, rootGetters}, clientId) {
    commit('loading', {status: true}, {root: true})
    let purchasesList = []
    commit('purchasesList', [])
    API.GetPurchasesByClientId({ClientId: clientId}, data => {
        commit('loading', {status: false}, {root: true})
        purchasesList.push(data)
    }, error => {
        commit('loading', {status: false},{root: true})
        if (error && error.code === 16) {
            dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
        } else if (error && error.code !== 5) {
            console.error('Request error', error)
        }
        commit('purchasesList', purchasesList.sort((a,b) => {
            if (a.Date > b.Date) {
                return -1
            }
            if (a.Date < b.Date) {
                return 1
            }
            return 0
        }))
    }, status => {
        // console.log('GetPurchasesByClientId::status', status)
    }, {
        sessionToken: rootGetters['auth/sessionToken']
    })
}
