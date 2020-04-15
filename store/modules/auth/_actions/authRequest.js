import API from 'api'
import propsNameToCamelCase from '@/utils/propsNameToCamelCase'

import model from '@/store/modules/user/model'

const Role = model.Role

export default function({commit, dispatch}, user) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: false},{root: true})
        API.Authenticate({
            Email: user.login,
            Password: user.password
        }, data => {
            // console.log('Authenticate::data', data)
            if (data.SessionToken) {
                // console.warn('data', data)
                commit('AUTH_SUCCESS', propsNameToCamelCase(data))
                commit('user/userProfile', {...data.IdentityData, Id: data.Id}, {root: true})
                commit('user/roles', (_ => data.Roles.map(role => new Role(role.Name, role.Context) ))(), {root: true})
            }
            resolve(propsNameToCamelCase(data))
        }, error => {
            if (error) {
                console.error('Request error', error)
                commit('AUTH_ERROR', error)
            }
            commit('loading', {status: false},{root: true})
            reject(error)
        }, status => {
            // console.log('Authenticate::status', status)
            commit('AUTH_ERROR', status)
        })
    })
}

