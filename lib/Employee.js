class Employee {
    constructor(name) {
        this.name = name;
        this.id = 12;
        this.email = '';
    }
  getName(){};
  getId(){};
  getEmail(){};
  getRoles(){
      return 'Employee'
  }
}

module.exports = Employee