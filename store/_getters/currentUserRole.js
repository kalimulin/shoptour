export default (state, getters, rootState, rootGetters) => {
    return rootGetters['user/getRoles'].find(role => (role || {}).name === (state.userRole || {}).name) || {}
}
