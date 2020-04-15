////////////////////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////  Getters //////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _getters_getStoresList from './_getters/getStoresList'
import _getters_getStore from './_getters/store'
import _getters_getStorePurchaseList from './_getters/getStorePurchaseList'
import _getters_getStoreById from './_getters/getStoreById'

////////////////////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////  Actions   ////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _actions_getStores from './_actions/getStores'
import _actions_getStore from './_actions/callGetStore'
import _actions_addStore from './_actions/addStore'
import _actions_updateStore from './_actions/updateStore'
import _actions_addGoodToStore from './_actions/addGoodToStore'
import _actions_setPercentInStore from './_actions/setPercentInStore'
import _actions_deleteGoodFromStore from './_actions/deleteGoodFromStore'
import _actions_callGetProfitByStore from './_actions/callGetProfitByStore'

////////////////////////////////////////////////////////////////
////              //////////////////////////////////////////////
////  Mutations   //////////////////////////////////////////////
////              //////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _mutation_storesList from './_mutations/storesList'
import _mutation_store from './_mutations/store'
import _mutation_storePurchaseList from './_mutations/storePurchaseList'

import state from './state'

export default {
    namespaced: true,
    state: state,
    getters: {
        storesList: _getters_getStoresList,
        store: _getters_getStore,
        getStorePurchaseList: _getters_getStorePurchaseList,
        getStoreById: _getters_getStoreById
    },
    mutations: {
        storesList: _mutation_storesList,
        store: _mutation_store,
        storePurchaseList: _mutation_storePurchaseList
    },
    actions: {
        callGetStores: _actions_getStores,
        callGetStore: _actions_getStore,
        callAddStore: _actions_addStore,
        callUpdateStore: _actions_updateStore,
        callAddGoodToStore: _actions_addGoodToStore,
        callSetPercentInStore: _actions_setPercentInStore,
        callDeleteGoodFromStore: _actions_deleteGoodFromStore,
        callGetProfitByStore: _actions_callGetProfitByStore
    }
}
