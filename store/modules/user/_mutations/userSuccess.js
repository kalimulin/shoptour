import Vue from 'vue'

export default function(state, resp) {
    state.status = 'success'
    Vue.set(state, 'profile', resp)
}
