class TotalProfit {
    constructor(goodId, totalCost, clientId, date, storePersent, profit, agency, employeeId, store) {
        this.goodId = goodId
        this.totalCost = totalCost
        this.clientId = clientId
        this.date = date.toString().split('T')[0]
        this.storePersent = storePersent
        this.profit = profit
        this.agency = agency
        this.employeeId = employeeId
        this.store = store
    }
}

class Cost {
    constructor(amount, currency) {
        this.amount = Math.floor(amount)
        this.currency = currency
    }
}

class Store {
    constructor(id, cityId, countryId, name, contactInfo) {
        this.id = id
        this.cityId = cityId
        this.countryId = countryId
        this.name = name
        this.contactInfo = contactInfo
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
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}

class ContactInfoType {
    constructor(id, type) {
        this.id = id
        this.type = type
    }
}

export default {
    TotalProfit,
    Cost,
    Store,
    TourAgency,
    ContactInfo,
    ContactInfoType
}
