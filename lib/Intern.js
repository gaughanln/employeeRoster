const Employee = require ('./Employee')

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school
  }
getRole() {
  return "intern"
}
getSchool() {
  console.log(`The intern currently attends ${this.school}`)
}
}

module.exports = Intern

