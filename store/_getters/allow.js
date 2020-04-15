export default state => permissionName => {
    return !!(state.userRole && state.userRole.permissions && state.userRole.permissions[permissionName] && state.userRole.permissions[permissionName] === true)
}

