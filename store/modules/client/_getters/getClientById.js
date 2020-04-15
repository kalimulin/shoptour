export default state => clientId => {
    return state.clientsList.find(client => client.id === clientId)
}
