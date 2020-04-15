////////////////////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////  Getters //////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _getters_getProfile from './_getters/getProfile'
import _getters_isProfileLoaded from './_getters/isProfileLoaded'
import _getters_getUserList from './_getters/getUsersList'
import _getters_getManagersList from './_getters/getManagerssList'
import _getters_getRoles from './_getters/getRoles'

////////////////////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////  Actions   ////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _actions_userRequest from './_actions/userRequest'
import _actions_callAddUser from './_actions/callAddUser'
import _actions_callGetUsersList from './_actions/callGetUsersList'
import _actions_callUpdateFullName from './_actions/callUpdateFullName'
import _actions_callUpdateEmail from './_actions/callUpdateEmail'

////////////////////////////////////////////////////////////////
////              //////////////////////////////////////////////
////  Mutations   //////////////////////////////////////////////
////              //////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _mutation_userRequest from './_mutations/userRequest'
import _mutation_userSuccess from './_mutations/userSuccess'
import _mutation_userError from './_mutations/userError'
import _mutation_authLogout from './_mutations/authLogout'
import _mutation_userProfile from './_mutations/userProfile'
import _mutation_userList from './_mutations/userList'
import _mutation_managerList from './_mutations/managerList'
import _mutation_roles from './_mutations/roles'

import state from './state'
import {USER_ERROR, USER_REQUEST, USER_SUCCESS} from '@/store/_actions/user'

export default {
    namespaced: true,
    state: state,
    getters: {
        userProfile: _getters_getProfile,
        isProfileLoaded: _getters_isProfileLoaded,
        getUsersList: _getters_getUserList,
        getManagersList: _getters_getManagersList,
        getRoles: _getters_getRoles

    },
    mutations: {
        [USER_REQUEST]: _mutation_userRequest,
        [USER_SUCCESS]: _mutation_userSuccess,
        [USER_ERROR]: _mutation_userError,
        AUTH_LOGOUT: _mutation_authLogout,
        userProfile: _mutation_userProfile,
        usersList: _mutation_userList,
        managersList: _mutation_managerList,
        roles: _mutation_roles
    },
    actions: {
        [USER_REQUEST]: _actions_userRequest,
        callAddUser: _actions_callAddUser,
        callGetUsersList: _actions_callGetUsersList,
        callUpdateFullName: _actions_callUpdateFullName,
        callUpdateEmail: _actions_callUpdateEmail
    }
}
