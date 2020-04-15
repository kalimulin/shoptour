////////////////////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////  Getters //////////////////////////////////////////////////
////          //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _getters_getCitiesList from './_getters/getCitiesList'
import _getters_getCountriesList from './_getters/getCountriesList'
import _getters_getCityById from './_getters/getCityById'
import _getters_getCountryById from './_getters/getCountryById'

////////////////////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////  Actions   ////////////////////////////////////////////////
////            ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _actions_callGetCitiesList from './_actions/callGetCitiesList'
import _actions_callGetCountriesList from './_actions/callGetCountriesList'
import _actions_callAddCountry from './_actions/callAddCountry'
import _actions_callUpdateCountry from './_actions/callUpdateCountry'
import _actions_callAddCity from './_actions/callAddCity'
import _actions_callUpdateCity from './_actions/callUpdateCity'

////////////////////////////////////////////////////////////////
////              //////////////////////////////////////////////
////  Mutations   //////////////////////////////////////////////
////              //////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import _mutation_citiesList from './_mutations/citiesList'
import _mutation_countriesList from './_mutations/countriesList'

import state from './state'

export default {
    namespaced: true,
    state: state,
    getters: {
        getCitiesList: _getters_getCitiesList,
        getCountriesList: _getters_getCountriesList,
        getCityById: _getters_getCityById,
        getCountryById: _getters_getCountryById
    },
    mutations: {
        citiesList: _mutation_citiesList,
        countriesList: _mutation_countriesList
    },
    actions: {
        callGetCitiesList: _actions_callGetCitiesList,
        callGetCountriesList: _actions_callGetCountriesList,
        callAddCountry: _actions_callAddCountry,
        callAddCity: _actions_callAddCity,
        callUpdateCountry: _actions_callUpdateCountry,
        callUpdateCity: _actions_callUpdateCity
    }
}
