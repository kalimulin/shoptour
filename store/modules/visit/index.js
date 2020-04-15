////////////////////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////  Getters //////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _getters_getVisitsList from './_getters/getVisitsList'
import _getters_getVisit from './_getters/getVisit'
import _getters_getClientPurchases from './_getters/getClientPurchases'
import _getters_getVisitObjective from  './_getters/getVisitObjective'

////////////////////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////  Actions   ////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _actions_getVisits from './_actions/getVisits'
import _actions_callVisitsByClient from './_actions/callVisitsByClient'
import _actions_getVisitsByTourAgency from './_actions/getVisitsByTourAgency'
import _actions_getVisitById from './_actions/getVisitById'
import _actions_addVisit from './_actions/addVisit'
import _actions_getPurchasesByClientId from './_actions/getPurchasesByClientId'
import _actions_deleteVisitObjective from './_actions/deleteVisitObjective'
import _actions_addVisitObjective from './_actions/addVisitObjective'
import _actions_getTrips from './_actions/getTrips'
import _actions_updateVisitInfo from './_actions/updateVisitInfo'
import _actions_addTrip from './_actions/addTrip'
import _actions_updatePlaceAndTimeInTrip from './_actions/updatePlaceAndTimeInTrip'
import _actions_addStoreToTrip from './_actions/addStoreToTrip'
import _actions_deleteStoreFromTrip from './_actions/deleteStoreFromTrip'

////////////////////////////////////////////////////////////////
////              //////////////////////////////////////////////
////  Mutations   //////////////////////////////////////////////
////              //////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _mutation_visitsList from './_mutations/visitsList'
import _mutation_visit from './_mutations/visit'
import _mutation_purchases from './_mutations/purchases'

import state from './state'

export default {
    namespaced: true,
    state: state,
    getters: {
        getVisitsList: _getters_getVisitsList,
        getVisit: _getters_getVisit,
        getClientPurchases: _getters_getClientPurchases,
        getVisitObjective: _getters_getVisitObjective
    },
    mutations: {
        visitsList: _mutation_visitsList,
        visit: _mutation_visit,
        purchases: _mutation_purchases
    },
    actions: {
        callGetVisits: _actions_getVisits,
        callVisitsByClient: _actions_callVisitsByClient,
        callGetVisitsByTourAgency: _actions_getVisitsByTourAgency,
        callGetVisitById: _actions_getVisitById,
        callAddVisit: _actions_addVisit,
        callGetPurchasesByClientId: _actions_getPurchasesByClientId,
        callAddVisitObjective: _actions_addVisitObjective,
        callDeleteVisitObjective: _actions_deleteVisitObjective,
        getTrips: _actions_getTrips,
        callUpdateVisitInfo: _actions_updateVisitInfo,
        callAddTrip: _actions_addTrip,
        callUpdatePlaceAndTimeInTrip: _actions_updatePlaceAndTimeInTrip,
        callAddStoreToTrip: _actions_addStoreToTrip,
        callDeleteStoreFromTrip: _actions_deleteStoreFromTrip
    }
}
