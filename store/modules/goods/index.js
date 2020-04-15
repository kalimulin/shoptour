////////////////////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////  Getters //////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _getters_getGoodsList from './_getters/getGoodsList'
import _getters_getCategoriesList from './_getters/getCategoriesList'
import _getters_getGoodById from  './_getters/getGoodById'
import _getters_getCategoryById from  './_getters/getCategoryById'
import _getters_getCategoryNameById from  './_getters/getCategoryNameById'

////////////////////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////  Actions   ////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _actions_getGoods from './_actions/getGoods'
import _actions_getCategories from './_actions/getCategories'
import _actions_addCategory from './_actions/addCategory'
import _actions_updateCategory from './_actions/updateCategory'
import _actions_addGood from './_actions/addGood'
import _actions_updateGood from './_actions/updateGood'

////////////////////////////////////////////////////////////////
////              //////////////////////////////////////////////
////  Mutations   //////////////////////////////////////////////
////              //////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _mutation_goodsList from './_mutations/goodsList'
import _mutation_categoriesList from './_mutations/categoriesList'

import state from './state'

export default {
    namespaced: true,
    state: state,
    getters: {
        goodsList: _getters_getGoodsList,
        categoriesList: _getters_getCategoriesList,
        getGoodById: _getters_getGoodById,
        getCategoryById: _getters_getCategoryById,
        getCategoryNameById: _getters_getCategoryNameById
    },
    mutations: {
        goodsList: _mutation_goodsList,
        categoriesList: _mutation_categoriesList
    },
    actions: {
        callGetGoods: _actions_getGoods,
        callGetCategories: _actions_getCategories,
        callAddCategory: _actions_addCategory,
        callAddGood: _actions_addGood,
        callUpdateCategory: _actions_updateCategory,
        callUpdateGood: _actions_updateGood
    }
}
