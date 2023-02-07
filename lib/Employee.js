

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email
  }
  getName() {
    console.log(`employees name is ${this.name}`)
  }
  getId() {
    console.log(`Employee's ID is ${this.id}`)
  } 
  getRole() {
    return 'Employee title' 
  }
}

module.exports = Employee;


