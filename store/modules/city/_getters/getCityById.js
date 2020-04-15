export default state => cityId => {
    return state.citiesList.find(city => city.id === cityId) || {}
}
