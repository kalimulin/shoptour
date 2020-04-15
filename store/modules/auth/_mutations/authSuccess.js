export default function(state, resp) {
    // console.log('------ auth success ------')
    state.status = 'success'
    state.token = resp.sessionToken
    state.hasLoadedOnce = true
}
