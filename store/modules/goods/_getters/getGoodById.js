export default state => goodId => {
    const good = state.goodsList.find(good => good.id === goodId)
    return good ? good : {}
}
