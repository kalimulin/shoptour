import API from 'api'
import log from '@/utils/log'

export default function({commit, dispatch, rootGetters}, visit) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        // console.log({
        //     VisitId: visit.id,
        //     Info: visit.info
        // })
        API.UpdateInfoInVisit({
            VisitId: visit.id,
            Info: visit.info
        }, data => {
            commit('loading', {status: false}, {root: true})
            resolve(data)
        }, error => {
            log('UpdateInfoInVisit::done', error)
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            }
            reject(error)
        }, status => {
            log('UpdateInfoInVisit::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

