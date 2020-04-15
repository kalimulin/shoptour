export default state => agencyId => {
    const tourAgency = state.tourAgenciesList.find(agency => agency.id === agencyId)
    return tourAgency && tourAgency.name ? tourAgency.name : ''
}
