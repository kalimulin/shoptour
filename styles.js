import Vue from 'vue'

import 'normalize.css'

import '@/assets/fonts.css'

// https://github.com/FortAwesome/vue-fontawesome
import '@fortawesome/fontawesome-free'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faCheckDouble,
    faThumbtack,
    faGlassCheers,
    faUserNurse
} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(
    faCheckDouble, // SideBar
    faThumbtack, // SideBar
    faGlassCheers, // SideBar
    faUserNurse // SideBar
)

Vue.component('FAIcon', FontAwesomeIcon)
