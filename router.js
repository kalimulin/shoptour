import Vue from 'vue'
import Router from 'vue-router'

const Main = () => import('@/components/Main')

const Partners = () => import('@/components/Partners/PartnersIndex')
const Stores = () => import('@/components/Partners/Stores')
const Store = () => import('@/components/Partners/Store')
const TourAgencies = () => import('@/components/Partners/TourAgencies')

const TourAgency = () => import('@/components/Partners/TourAgency')
const TourAgencyVisits = () => import('@/components/Partners/TourAgencyTabs/TourAgencyVisits')
const TourAgencyAbout = () => import('@/components/Partners/TourAgencyTabs/TourAgencyAbout')
const TourAgencyClients = () => import('@/components/Partners/TourAgencyTabs/TourAgencyClients')
const TourAgencyStaff = () => import('@/components/Partners/TourAgencyTabs/TourAgencyStaff')
const TourAgencyPurchases = () => import('@/components/Partners/TourAgencyTabs/TourAgencyPurchases')
const TourAgencyEmployeePurchases = () => import('@/components/Partners/TourAgencyTabs/TourAgencyEmployeePurchases')

const Catalogs = () => import('@/components/Catalogs/CatalogsIndex')
const CatalogsHome = () => import('@/components/Catalogs/CatalogsHome')
const GoodsCatalog = () => import('@/components/Catalogs/Goods/GoodsCatalog')
const CitiesCatalog = () => import('@/components/Catalogs/Cities/CitiesCatalog')
const HotelsCatalog = () => import('@/components/Catalogs/Hotels/HotelsCatalog')
const StoresCatalog = () => import('@/components/Catalogs/Stores/StoresCatalog')
const TourAgenciesCatalog = () => import('@/components/Catalogs/TourAgencies/TourAgenciesCatalog')
const AirlinesCatalog = () => import('@/components/Catalogs/Airlines/AirlinesCatalog')
const TourPartnersCatalog = () => import('@/components/Catalogs/TourPartners/TourPartnersCatalog')
const ContactInfoTypesCatalog = () => import('@/components/Catalogs/ContactInfoTypes/ContactInfoTypesCatalog')

const Client = () => import('@/components/Client/Client')

const Travels = () => import('@/components/Travels')

const Reports = () => import('@/components/Reports/ReportsIndex')

const TotalProfitReport = () => import('@/components/Reports/ReportsTabs/TotalProfitReport')

const Payouts = () => import('@/components/Payouts/PayoutsIndex')
const PayoutEmployees = () => import('@/components/Payouts/PayoutsTabs/PayoutEmployees')

const Visit = () => import('@/components/Visit/Visit')
const EditVisitTrip = () => import('@/components/Visit/EditVisitTrip')

const Login = () => import('@/components/Login')

const Test = () => import('@/components/Test')

import store from './store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters[`auth/isAuthenticated`]) {
        next()
        return
    }
    next('/')
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters[`auth/isAuthenticated`]) {
        next()
        return
    }
    if (to && to.name) {
        next(`/login/${to.name}`)
    } else {
        next('/')
    }
}

const resolveRole = (role) => (to, from, next) => {
    if (store.getters.currentUserRole.name === role) {
        next()
        return
    }
    next('/')
}

const checkAccess = (...args) => (to, from, next) => {
    const stack = [...args]
    const $next = () => {
        if (!stack.length) {
            return next()
        }
        const callee = stack.pop()
        callee(to, from, redirectTo => {
            if (typeof redirectTo !== "undefined") {
                next(redirectTo)
            } else {
                $next()
            }
        })
    }
    $next()
}

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Main,
            beforeEnter: checkAccess(ifAuthenticated), // ifAuthenticated,
        },
        {
            path: '/account',
            name: 'Account',
            component: Main,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/login/:routeName',
            component: Login,
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/partners',
            component: Partners,
            beforeEnter: ifAuthenticated,
            children: [
                {
                    path: '',
                    component: TourAgencies,
                    meta: {
                        nav: true
                    }
                },
                {
                    path: 'tour-agencies',
                    name: 'TourAgencies',
                    component: TourAgencies,
                    meta: {
                        nav: true
                    }
                },
                {
                    path: 'tour-agencies/:id',
                    component: TourAgency,
                    meta: {
                        nav: false,
                        tab: '',
                    },
                    children: [
                        {
                            path: '',
                            name: 'TourAgency',
                            component: TourAgencyAbout,
                            meta: {
                                tab: 'about',
                                prev: '/partners/tour-agencies'
                            }
                        },
                        {
                            path: 'visits',
                            name: 'TourAgencyVisits',
                            component: TourAgencyVisits,
                            meta: {
                                tab: 'visits',
                                prev: '/partners/tour-agencies'
                            }
                        },
                        {
                            path: 'about',
                            name: 'TourAgencyAbout',
                            component: TourAgencyAbout,
                            meta: {
                                tab: 'about',
                                prev: '/partners/tour-agencies'
                            }
                        },
                        {
                            path: 'сlients',
                            name: 'TourAgencyClients',
                            component: TourAgencyClients,
                            meta: {
                                tab: 'сlients',
                                prev: '/partners/tour-agencies'
                            }
                        },
                        {
                            path: 'staff',
                            name: 'TourAgencyStaff',
                            component: TourAgencyStaff,
                            meta: {
                                tab: 'staff',
                                prev: '/partners/tour-agencies'
                            }
                        },
                        {
                            path: 'purchases',
                            name: 'TourAgencyPurchases',
                            component: TourAgencyPurchases,
                            meta: {
                                tab: 'purchases',
                                prev: '/partners/tour-agencies'
                            }
                        },
                        {
                            path: 'employee-purchases',
                            name: 'TourAgencyEmployeePurchases',
                            component: TourAgencyEmployeePurchases,
                            meta: {
                                tab: 'employee-purchases',
                                prev: '/partners/tour-agencies'
                            }
                        }
                    ]
                },
                {
                    path: 'stores',
                    name: 'Stores',
                    component: Stores,
                    meta: {
                        nav: true,
                        prev: '/partners'
                    }
                },
                {
                    path: 'stores/:id',
                    name: 'Store',
                    component: Store,
                    meta: {
                        nav: false,
                        prev: '/partners/stores'
                    }
                }
            ]
        },
        {
            path: '/catalogs',
            component: Catalogs,
            beforeEnter: checkAccess(ifAuthenticated, resolveRole('top-manager')), //ifAuthenticated,
            children: [
                {
                    path: '',
                    name: 'CatalogsHome',
                    component: CatalogsHome,
                },
                {
                    path: 'goods',
                    name: 'ProductsCatalog',
                    component: GoodsCatalog,
                    meta: {
                        prev: '/catalogs'
                    }
                },
                {
                    path: 'hotels',
                    name: 'HotelsCatalog',
                    component: HotelsCatalog,
                    meta: {
                        prev: '/catalogs'
                    }
                },
                {
                    path: 'stores',
                    name: 'StoresCatalog',
                    component: StoresCatalog,
                    meta: {
                        prev: '/catalogs'
                    }
                },
                {
                    path: 'tour-agencies',
                    name: 'TourAgenciesCatalog',
                    component: TourAgenciesCatalog,
                    meta: {
                        prev: '/catalogs'
                    }
                },
                {
                    path: 'cities',
                    name: 'CitiesCatalog',
                    component: CitiesCatalog,
                    meta: {
                        prev: '/catalogs'
                    }
                },
                {
                    path: 'airlines',
                    name: 'AirlinesCatalog',
                    component: AirlinesCatalog,
                    meta: {
                        prev: '/catalogs'
                    }
                },
                {
                    path: 'tour-partners',
                    name: 'TourPartnersCatalog',
                    component: TourPartnersCatalog,
                    meta: {
                        prev: '/catalogs'
                    }
                },
                {
                    path: 'contact-info-types',
                    name: 'ContactInfoTypesCatalog',
                    component: ContactInfoTypesCatalog,
                    meta: {
                        prev: '/catalogs'
                    }
                }
            ]
        },
        {
            path: '/client/:clientId',
            component: Client,
            name: 'Client',
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/visit/:visitId',
            component: Visit,
            name: 'Visit',
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/visit/:visitId/trip/:tripId',
            name: 'EditVisitTrip',
            component: EditVisitTrip,
        },
        {
            path: '/travels',
            component: Travels,
            name: 'Travels',
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/test',
            component: Test,
            name: 'Test',
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/reports',
            component: Reports,
            beforeEnter: ifAuthenticated,
            children: [
                {
                    path: '',
                    component: TotalProfitReport,
                    name: 'Reports',
                },
                {
                    path: 'totalProfitReport',
                    component: TotalProfitReport,
                    name: 'TotalProfitReport',
                }
            ]
        },
        {
            path: '/payouts',
            component: Payouts,
            beforeEnter: ifAuthenticated,
            children: [
                {
                    path: '',
                    component: PayoutEmployees,
                    name: 'Payouts',
                },
                {
                    path: 'payoutEmployees',
                    component: PayoutEmployees,
                    name: 'PayoutEmployees'
                }
            ]
        }
    ]
})
