class EmployeePayout {
    constructor(payout, employee) {
        this.payout = payout
        this.employee = employee
    }
}

class Payout {
    constructor(id, month, year, earnings, paidOff, completed) {
        this.id = id
        this.month = month
        this.year = year
    }
}

class ActualPayout extends Payout {
    constructor(id, month, year, paidOff, completed) {
        super()
        this.id = id
        this.month = month
        this.year = year
        this.paidOff = paidOff
        this.completed = completed
    }
}

class PlannedPayout extends Payout {
    constructor(id, month, year, earnings) {
        super()
        this.id = id
        this.month = month
        this.year = year
        this.earnings = earnings
    }
}

class Employee {
    constructor(id, fullName, email) {
        this.id = id
        this.fullName = fullName
        this.email = email
    }
}

export default {
    Employee,
    Payout,
    EmployeePayout,
    ActualPayout,
    PlannedPayout
}
