export default (state, getters) => id => {
    return this.getCitiesList.filter(city => {
        if (this.store.country && this.store.country.id) {
            return city.countryId === this.store.country.id
        }
        return true
    })
}
