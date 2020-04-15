export default state => countryId => {
    return state.countriesList.find(country => country.id === countryId) || {}
}
