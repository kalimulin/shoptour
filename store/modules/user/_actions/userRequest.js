import {USER_ERROR, USER_REQUEST, USER_SUCCESS} from '@/store/_actions/user'
import apiCall from '../../../../utils/api'

export default function({commit, dispatch}) {
    commit(USER_REQUEST)
    apiCall({url: 'user/me'})
        .then(resp => {
            commit(USER_SUCCESS, resp)
        })
        .catch(resp => {
            commit(USER_ERROR)
            // if resp is unauthorized, logout, to
            dispatch('AUTH_LOGOUT')
        })
}
