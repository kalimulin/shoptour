export default function(state, error) {
    state.error = error
    state.hasLoadedOnce = true
}
