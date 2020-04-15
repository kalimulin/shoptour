class User {
    constructor(id, identityData, registrationDate, roles, sessionToken, percent) {
        this.id = id
        this.identityData = identityData
        this.registrationDate = registrationDate
        this.roles = roles
        this.sessionToken = sessionToken
        this.percent = percent
    }
}

class IdentityData {
    constructor(fullName, email) {
        this.fullName = fullName
        this.email = email
    }
}

class Role {
    constructor(name, context) {
        this.name = name
        this.context = context
    }
}

export default {
    User,
    IdentityData,
    Role
}
