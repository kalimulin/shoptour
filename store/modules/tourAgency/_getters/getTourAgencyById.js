export default state => agencyId => {
    return state.tourAgenciesList.find(agency => agency.id === agencyId)
}
