export default state => partnerId => {
    const result = state.tourPartnersList.find(partner => partner.id === partnerId)
    return result ? result : {}
}
