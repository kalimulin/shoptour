////////////////////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////  Getters //////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _getters_getClientsList from './_getters/getClientsList'
import _getters_getClientById from './_getters/getClientById'
import _getters_getClientsCard from './_getters/clientsCard'
import _getters_client from './_getters/client'
import _getters_purchasesList from './_getters/purchasesList'

////////////////////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////  Actions   ////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _actions_callGetClientsList from './_actions/callGetClientsList'
import _actions_callAddClient from './_actions/callAddClient'
import _actions_updateClientFullName from './_actions/updateClientFullName'
import _actions_updateClientAge from './_actions/updateClientAge'
import _actions_updateClientGender from './_actions/updateClientGender'
import _actions_updateClientContactInfo from './_actions/updateClientContactInfo'
import _actions_getClient from './_actions/getClient'
import _actions_callClientbyCard from './_actions/callClientByCard'
import _actions_addCardForClient from './_actions/addCardForClient'
import _actions_addPurchase from './_actions/addPurchase'
import _actions_getPurchasesByClientId from './_actions/getPurchasesByClientId'

////////////////////////////////////////////////////////////////
////              //////////////////////////////////////////////
////  Mutations   //////////////////////////////////////////////
////              //////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _mutation_clientsList from './_mutations/clientsList'
import _mutation_clientsCard from './_mutations/clientsCard'
import _mutation_client from './_mutations/client'
import _mutation_purchasesList from './_mutations/purchasesList'

import state from './state'


export default {
    namespaced: true,
    state: state,
    getters: {
        getClientsList: _getters_getClientsList,
        getClientById: _getters_getClientById,
        clientsCard: _getters_getClientsCard,
        client: _getters_client,
        purchasesList: _getters_purchasesList
    },
    mutations: {
        clientsList: _mutation_clientsList,
        clientsCard: _mutation_clientsCard,
        client: _mutation_client,
        purchasesList: _mutation_purchasesList
    },
    actions: {
        callGetClientsList: _actions_callGetClientsList,
        callAddClient: _actions_callAddClient,
        callUpdateClientFullName: _actions_updateClientFullName,
        callUpdateClientAge: _actions_updateClientAge,
        callUpdateClientGender: _actions_updateClientGender,
        callUpdateClientContactInfo: _actions_updateClientContactInfo,
        callGetClient: _actions_getClient,
        callClientByCard: _actions_callClientbyCard,
        callAddCardForClient: _actions_addCardForClient,
        callAddPurchase: _actions_addPurchase,
        callGetPurchasesByClientId: _actions_getPurchasesByClientId
    }
}
