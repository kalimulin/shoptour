class Hotel {
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

export default {
    Hotel,
    ContactInfo,
    ContactInfoType
}
