class baseProfit {
    constructor(goodId, totalCost, clientId, date, store) {
        this.goodId = goodId
        this.totalCost = totalCost
        this.clientId = clientId
        this.date = date
        this.storeId = store
    }

    get getDateFromString() {
        return this.date.toString().split('T')[0]
    }
}

class ProfitByAgency extends baseProfit {
    constructor(goodId, totalCost, clientId, date, agencyPersent, agencyProfit, store, employeeId) {
        super()
        this.goodId = goodId
        this.totalCost = totalCost
        this.clientId = clientId
        this.date = date.toString().split('T')[0]
        this.agencyPersent = agencyPersent
        this.agencyProfit = agencyProfit
        this.store = store
        this.employeeId = employeeId
    }
}

class ProfitByEmployee extends baseProfit {
    constructor(goodId, totalCost, clientId, date, employeePersent, employeeProfit, store) {
        super()
        this.goodId = goodId
        this.totalCost = totalCost
        this.clientId = clientId
        this.date = date.toString().split('T')[0]
        this.employeePersent = employeePersent
        this.employeeProfit = employeeProfit
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
    constructor(id, cityId, countryId, name, percents, contactInfo) {
        this.id = id
        this.cityId = cityId
        this.countryId = countryId
        this.name = name
        this.percents = percents
        this.contactInfo = contactInfo
    }
}

class Percent {
    constructor(categoryId, percent) {
        this.categoryId = categoryId
        this.percent = percent
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

export default {
    ProfitByAgency,
    ProfitByEmployee,
    Cost,
    Store,
    TourAgency,
    Percent,
    ContactInfo,
    ContactInfoType
}
