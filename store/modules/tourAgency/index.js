////////////////////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////  Getters //////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _getters_getTourAgenciesList from './_getters/getTourAgenciesList'
import _getters_getTourAgency from './_getters/getTourAgency'
import _getters_getTourAgencyPurchaseList from './_getters/getTourAgencyPurchaseList'
import _getters_getTourAgencyById from './_getters/getTourAgencyById'
import _getters_getTourAgencyNameById from './_getters/getTourAgencyNameById'
import _getters_getTourAgencyEmployeePurchaseList from './_getters/getTourAgencyEmployeePurchaseList'

////////////////////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////  Actions   ////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _actions_callGetTourAgencies from './_actions/callGetTourAgencies'
import _actions_callGetTourAgency from './_actions/callGetTourAgency'
import _actions_callAddTourAgency from './_actions/callAddTourAgency'
import _actions_updateTourAgency from './_actions/updateTourAgency'
import _actions_addPercentCategory from './_actions/addPercentCategory'
import _actions_callGetAgencyProfit from './_actions/callGetAgencyProfit'
import _actions_callGetEmployeeProfit from './_actions/callGetEmployeeProfit'

////////////////////////////////////////////////////////////////
////              //////////////////////////////////////////////
////  Mutations   //////////////////////////////////////////////
////              //////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _mutation_tourAgenciesList from './_mutations/tourAgenciesList'
import _mutation_tourAgency from './_mutations/tourAgency'
import _mutation_tourAgencyPurchaseList from './_mutations/tourAgencyPurchaseList'
import _mutation_tourAgencyEmployeePurchaseList from './_mutations/tourAgencyEmployeePurchaseList'

import state from './state'

export default {
    namespaced: true,
    state: state,
    getters: {
        tourAgenciesList: _getters_getTourAgenciesList,
        getTourAgency: _getters_getTourAgency,
        getTourAgencyPurchaseList: _getters_getTourAgencyPurchaseList,
        getTourAgencyById: _getters_getTourAgencyById,
        getTourAgencyNameById: _getters_getTourAgencyNameById,
        getTourAgencyEmployeePurchaseList: _getters_getTourAgencyEmployeePurchaseList
    },
    mutations: {
        tourAgenciesList: _mutation_tourAgenciesList,
        tourAgency: _mutation_tourAgency,
        tourAgencyPurchaseList: _mutation_tourAgencyPurchaseList,
        tourAgencyEmployeePurchaseList: _mutation_tourAgencyEmployeePurchaseList
    },
    actions: {
        callGetTourAgencies: _actions_callGetTourAgencies,
        callGetTourAgency: _actions_callGetTourAgency,
        callAddTourAgency: _actions_callAddTourAgency,
        callUpdateTourAgency: _actions_updateTourAgency,
        callAddPercentCategory: _actions_addPercentCategory,
        callGetAgencyProfit: _actions_callGetAgencyProfit,
        callGetEmployeeProfit: _actions_callGetEmployeeProfit
    }
}
