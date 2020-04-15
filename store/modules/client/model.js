class Client {
    constructor(id, fullName, age, gender, contactInfo, registrationDate, referer) {
        this.id = id
        this.fullName = fullName
        this.age = age
        this.gender = gender
        this.contactInfo = contactInfo
        this.registrationDate = registrationDate
        this.referer = referer
    }
}

class Referer {
    constructor(tourAgencyId, employeeId) {
        this.tourAgencyId = tourAgencyId
        this.employeeId = employeeId
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
    Client,
    Referer,
    ContactInfo,
    ContactInfoType
}
