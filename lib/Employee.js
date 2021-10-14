class Employee {
    constructor(data) {
        this.name = data.name;
        this.id = 12;
        this.email = data.email;
    }
  getName(){};
  getId(){};
  getEmail(){};
  getRoles(){
      return 'Employee'
  }
}

module.exports = Employee