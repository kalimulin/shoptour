import API from 'api'

import model from '@/store/modules/user/model'

const User = model.User
const IdentityData = model.IdentityData
const Role = model.Role

export default function({commit, dispatch, rootGetters}, {name, context}) {
    commit('loading', {status: true}, {root: true})
    if (name === 'tour-agency-employee') {
        commit('usersList', [])
    } else {
        commit('managersList', [])
    }
    let usersList = []

    return new Promise((resolve, reject) => {
        API.GetUsersList({
            UsersRole: {
                Name: name,
                Context: context
            }
        }, data => {
            commit('loading', {status: false}, {root: true})
            usersList.push(new User(
                data.Id,
                new IdentityData(
                    data.IdentityData.FullName,
                    data.IdentityData.Email
                ),
                data.RegistrationDate,
                (_ => data.Roles.map(role => new Role(role.Name, role.Context) ))(),
                data.SessionToken,
                data.Percent
            ))
        }, error => {
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error && error.code !== 5) {
                reject(error)
                console.error('Request error', error)
            }
            resolve(usersList)
            if (name === 'tour-agency-employee') {
                commit('usersList', usersList)
            } else {
                commit('managersList', usersList)
            }
        }, status => {
            // console.log('Users::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

