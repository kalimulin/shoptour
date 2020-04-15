class City {
    constructor(id, countryId, name) {
        this.id = id
        this.countryId = countryId
        this.name = name
    }
}

class Country {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

export default {
    City,
    Country
}
