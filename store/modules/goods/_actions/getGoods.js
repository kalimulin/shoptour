import API from 'api'
import propsNameToCamelCase from '@/utils/propsNameToCamelCase'

export default function({commit, dispatch, rootGetters}) {
    commit('loading', {status: true}, {root: true})
    const goodsList = []
    return new Promise((resolve, reject) => {
        API.GetGoods({}, data => {
            commit('loading', {status: false}, {root: true})
            goodsList.push(propsNameToCamelCase(data))
        }, error => {
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                reject(error)
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error) {
                console.error('Request error', error)
            }
            resolve(goodsList)
            commit('goodsList', goodsList)
        }, status => {
            // console.log('Goods::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

