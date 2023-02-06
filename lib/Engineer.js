const Employee = require ('./Employee')

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
  }
getRole() {
  return "Engineer"
}
getGithub() {
  console.log(`The engineers github is ${this.github}`)
}
}

module.exports = Engineer

