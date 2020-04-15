class TourPartner {
    constructor(id, name, contactInfo) {
        this.id = id
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
    TourPartner,
    ContactInfo,
    ContactInfoType
}
