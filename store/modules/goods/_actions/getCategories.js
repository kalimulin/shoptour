import API from 'api'
import propsNameToCamelCase from '@/utils/propsNameToCamelCase'


export default function({commit, dispatch, rootGetters}) {
    commit('loading', {status: true}, {root: true})
    let categoriesList = []
    API.GetCategories({}, data => {
        commit('loading', {status: false}, {root: true})
        categoriesList.push(propsNameToCamelCase(data))
    }, error => {
        commit('loading', {status: false},{root: true})
        if (error && error.code === 16) {
            dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
        } else if (error) {
            console.error('Request error', error)
        }
        commit('categoriesList', categoriesList)
    }, status => {
        // console.log('Categories::status', status)
    }, {
        sessionToken: rootGetters['auth/sessionToken']
    })
}

