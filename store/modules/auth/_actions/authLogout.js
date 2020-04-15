export default function({commit}) {
    return new Promise((resolve) => {
        commit('AUTH_LOGOUT')
        commit('userRole', {}, {root: true})
        commit('user/roles', [], {root: true})
        localStorage.removeItem('auth.token')
        localStorage.removeItem('user.roles')
        resolve()
    })
}
