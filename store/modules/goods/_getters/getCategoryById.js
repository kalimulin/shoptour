export default state => categoryId => {
    if (state.categoriesList.length) {
        let category = state.categoriesList.find(cat => cat.id === categoryId)
        return category ? category : {}
    }
    return {}
}
