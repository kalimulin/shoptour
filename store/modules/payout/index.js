////////////////////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////  Getters //////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _getters_getEmployeesPlannedPayout from './_getters/getEmployeesPlannedPayout'
import _getters_getEmployeesActualPayout from './_getters/getEmployeesActualPayout'

////////////////////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////  Actions   ////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _actions_callGetActualPayout from './_actions/callGetActualPayout'
import _actions_callGetPlannedPayout from './_actions/callGetPlannedPayout'
import _actions_callSetPaidOffForEmployee from './_actions/callSetPaidOffForEmployee'

////////////////////////////////////////////////////////////////
////              //////////////////////////////////////////////
////  Mutations   //////////////////////////////////////////////
////              //////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _mutations_employeesPlannedPayout from './_mutations/employeesPlannedPayout'
import _mutations_employeesActualPayout from './_mutations/employeesActualPayout'

import state from '@/store/modules/payout/state'

export default {
    namespaced: true,
    state: state,
    getters: {
        getEmployeesActualPayout: _getters_getEmployeesActualPayout,
        getEmployeesPlannedPayout: _getters_getEmployeesPlannedPayout
    },
    mutations: {
        employeesActualPayout: _mutations_employeesActualPayout,
        employeesPlannedPayout: _mutations_employeesPlannedPayout
    },
    actions: {
        callSetPaidOffForEmployee: _actions_callSetPaidOffForEmployee,
        callGetActualPayout: _actions_callGetActualPayout,
        callGetPlannedPayout: _actions_callGetPlannedPayout
    }
}
