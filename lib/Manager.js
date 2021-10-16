const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, email, id,  officeNumber) {
      //call parent constructor here
      super(name, id, email);
      this.officeNumber = officeNumber
    }

    getRole() {
        return `Manager`
    }

    getOfficeNumber() {
        return `${this.officeNumber}`
    }
}

module.exports = Manager