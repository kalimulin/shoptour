export default state => storeId => {
    return state.storesList.find(store => store.id === storeId) || {}
}
