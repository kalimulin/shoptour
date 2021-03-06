////////////////////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////  Getters //////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _getters_getAirlinesList from './_getters/getAirlinesList'


////////////////////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////  Actions   ////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _actions_callGetAirlinesList from './_actions/callGetAirlinesList'
import _actions_callAddAirline from './_actions/callAddAirline'
import _actions_callUpdateAirline from './_actions/callUpdateAirline'


////////////////////////////////////////////////////////////////
////              //////////////////////////////////////////////
////  Mutations   //////////////////////////////////////////////
////              //////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _mutations_airlinesList from './_mutations/airlinesList'


import state from './state'

export default {
    namespaced: true,
    state: state,
    getters: {
        getAirlinesList: _getters_getAirlinesList
    },
    mutations: {
        airlinesList: _mutations_airlinesList
    },
    actions: {
        callGetAirlinesList: _actions_callGetAirlinesList,
        callAddAirline: _actions_callAddAirline,
        callUpdateAirline: _actions_callUpdateAirline
    }
}
