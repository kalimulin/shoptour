// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Snotify from 'vue-snotify'
import Datetime from 'vue-datetime'
import moment from 'moment'
import VTooltip from 'v-tooltip'

import App from './App'
import router from '@/router'
import store from './store/index'
import locales from './locales'
import clickOutside from './directives/clickOutside'

import './assets/normalize.css'
import './assets/fonts/fonts.css'
import './assets/ui.styl'
import './assets/popover.styl'
import "vue-snotify/styles/material.css"
import 'vue-datetime/dist/vue-datetime.css'
import Vuebar from 'vuebar'

Object.defineProperty(Vue.prototype, '$moment', {value: moment})

Vue.use(VueI18n)
Vue.use(Datetime)
Vue.use(VTooltip)
Vue.use(Vuebar)

Vue.config.productionTip = false

const messages = locales

const i18n = new VueI18n({
    locale: 'ru', // set locale
    messages, // set locale messages
})

Vue.use(Snotify, {
    toast: {
        position: 'centerTop',
        showProgressBar: false
    }
})

Vue.directive('click-outside', clickOutside)

router.beforeEach((from, to, next) => {
    store.commit('loading', {status: true})
    next()
})

router.afterEach(() => {
    store.commit('loading', {status: false})
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    components: {App},
    template: '<App/>',

})
