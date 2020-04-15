export default state => visitObjectiveId => {
    return state.visit.objectives ? state.visit.objectives.find(objective => objective.Id === visitObjectiveId) || {} : {}
}
