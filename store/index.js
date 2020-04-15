import Vue from 'vue'
import Vuex from 'vuex'
import _modules_user from './modules/user'
import _modules_auth from './modules/auth'
import _modules_store from './modules/store'
import _modules_tourAgency from './modules/tourAgency'
import _modules_goods from './modules/goods'
import _modules_visit from './modules/visit'
import _modules_city from './modules/city'
import _modules_hotel from './modules/hotel'
import _modules_client from './modules/client'
import _modules_airline from './modules/airline'
import _modules_tourPartner from './modules/tourPartner'
import _modules_report from './modules/report'
import _modules_payout from '@/store/modules/payout'
import _modules_contactInfoType from '@/store/modules/contactInfoType'

import _getters_loading from './_getters/loading'
import _getters_usersRoles from './_getters/usersRoles'
import _getters_userRole from './_getters/userRole'
import _getters_permissions from './_getters/permissions'
import _getters_allow from './_getters/allow'
import _getters_currentUserRole from './_getters/currentUserRole'
import _getters_genders from './_getters/genders'

import _mutations_loading from './_mutations/loading'
import _mutations_userRole from './_mutations/userRole'

import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    key: 'vuex_user',
    reducer: state => {
        return {
            auth: {
                token: state.auth.token
            },
            user: {
                profile: state.user.profile,
                roles: state.user.roles
            }
        }
    },
    storage: window.localStorage
})

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const roles = [
    {
        label: 'Выберите роль',
        name: ''
    },
    {
        label: 'Главный менеджер (ТОП)',
        name: 'top-manager',
        permissions: {
            addAndDeleteGoodsInStore: true,
            addAndDeleteVisitObjectives: true,
            addingStore: true,
            addingTourAgency: true,
            addTourAgencyEmployee: true,
            addTourAgencyManager: true,
            changeClientInfo: true,
            changeStoreInfo: true,
            changeTourAgencyInfo: true,
            changeTourAgencyPercents: true,
            viewCatalogs: true,
            viewClients: true,
            viewHotels: true,
            viewGoods: true,
            viewReports: true,
            viewStoreAnalytics: true,
            viewStorePercents: true,
            viewStorePurchases: true,
            viewStores: true,
            viewTotalProfitReport: true,
            viewTourAgencies: true,
            viewTourAgencyEmployers: true,
            viewTourAgencyGoodsCategories: true,
            viewTourAgencyPurchases: true,
            viewTourAgencyVisits: true,
            viewVisitsLink: true, // отображение ссылки список всех выездов в главном меню
            viewVisitsPage: true, // возможность просмотра списка всех выездов
            viewVisitTripsAndPurchases: true,
            viewWorkWithClient: true,
        }
    },
    {
        label: 'Менеджер Выпускающей Стороны (МВС)',
        name: 'dispatching-party-manager',
        permissions: {
            addAndDeleteVisitObjectives: true,
            addingTourAgency: true,
            addTourAgencyManager: true,
            changeTourAgencyInfo: true,
            viewTourAgencies: true,
            viewTourAgencyEmployers: true,
            viewWorkWithClient: true,
        }
    },
    {
        label: 'Менеджер ТурАгенства (МТА)',
        name: 'tour-agency-manager',
        permissions: {
            addAndDeleteVisitObjectives: true,
            addTourAgencyEmployee: true,
            addTourAgencyManager: true,
            viewClients: true,
            viewEmployeesPayout: true,
            viewGoods: true,
            viewPayouts: true,
            viewTourAgencies: true,
            viewTourAgencyEmployers: true,
            viewTourAgencyGoodsCategories: true,
            viewTourAgencyPurchases: true,
            viewTourAgencyVisits: true,
        }
    },
    {
        label: 'Сотрудник ТурАгенства (СТА)',
        name: 'tour-agency-employee',
        permissions: {
            addAndDeleteVisitObjectives: true,
            viewClients: true,
            viewGoods: true,
            viewTourAgencies: true,
            viewTourAgencyEmployeePurchases: true,
            viewTourAgencyVisits: true,
        }
    },
    {
        label: 'Менеджер Принимающей Стороны (МПС)',
        name: 'hosting-party-manager',
        permissions: {
            addAndDeleteGoodsInStore: true,
            addAndDeleteVisitObjectives: true,
            viewGoods: true,
            viewStores: true,
            viewTourAgencyVisits: true,
            viewVisitTripsAndPurchases: true,
        }
    },
    {
        label: 'Контроллер (К)',
        name: 'controller',
        permissions: {
            viewGoods: true,
            viewStores: true,
            viewWorkWithClient: true,
            addAndDeleteGoodsInStore: true,

        }
    }
]

const genders = [
    {
        id: 1,
        name: 'Мужской'
    },
    {
        id: 2,
        name: 'Женский'
    }
]


export default new Vuex.Store({
    state: {
        loading: false,
        usersRoles: roles,
        userRole: roles[0],
        genders: genders,
    },
    getters: {
        loading: _getters_loading,
        usersRoles: _getters_usersRoles,
        userRole: _getters_userRole,
        permissions: _getters_permissions,
        allow: _getters_allow,
        currentUserRole: _getters_currentUserRole,
        genders: _getters_genders
    },
    mutations: {
        loading: _mutations_loading,
        userRole: _mutations_userRole
    },
    modules: {
        user: _modules_user,
        auth: _modules_auth,
        store: _modules_store,
        tourAgency: _modules_tourAgency,
        goods: _modules_goods,
        visit: _modules_visit,
        city: _modules_city,
        hotel: _modules_hotel,
        client: _modules_client,
        airline: _modules_airline,
        tourPartner: _modules_tourPartner,
        report: _modules_report,
        payout: _modules_payout,
        contactInfoType: _modules_contactInfoType
    },
    plugins: [vuexLocal.plugin],
    strict: debug,
})
