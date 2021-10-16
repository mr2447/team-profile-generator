const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, email, id,  officeNumber) {
      //call parent constructor here
      super(name, id, email);
      this.officeNumber = officeNumber
    }

    getRoles() {
        return `Manager`
    }

    getOfficeNumber() {
        return `${officeNumber}`
    }
}

module.exports = Manager