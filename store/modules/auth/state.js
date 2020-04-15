export default {
    token: localStorage.getItem('user-token') || '',
    error: {},
    hasLoadedOnce: false
}
