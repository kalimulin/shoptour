class ProfitByStore {
    constructor(goodId, totalCost, clientId, date, storePersent, profit, agency, employeeId) {
        this.goodId = goodId
        this.totalCost = totalCost
        this.clientId = clientId
        this.date = date.toString().split('T')[0]
        this.storePersent = storePersent
        this.profit = profit
        this.agency = agency
        this.employeeId = employeeId
    }


    get getDatefromString() {
        return this.date.toString().split('T')[0]
    }
}


class Cost {
    constructor(amount, currency) {
        this.amount = Math.floor(amount)
        this.currency = currency
    }
}

class Store {
    constructor(id, cityId, countryId, name, contactInfo, goodIds, percents) {
        this.id = id
        this.cityId = cityId
        this.countryId = countryId
        this.name = name
        this.contactInfo = contactInfo
        this.goodIds = goodIds
        this.percents = percents
    }
}

class TourAgency {
    constructor(id, cityId, countryId, name, contactInfo) {
        this.id = id
        this.cityId = cityId
        this.countryId = countryId
        this.name = name
        this.contactInfo = contactInfo
    }
}

class ContactInfo {
    constructor(type, value) {
        this.type = type
        this.value = value
    }
}

class ContactInfoType {
    constructor(id, type) {
        this.id = id
        this.type = type
    }
}

class Percent {
    constructor(categoryId, percent) {
        this.categoryId = categoryId
        this.percent = percent
    }
}

export default {
    ProfitByStore,
    Cost,
    Store,
    ContactInfo,
    Percent,
    TourAgency,
    ContactInfoType
}
