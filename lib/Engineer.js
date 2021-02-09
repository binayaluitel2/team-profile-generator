const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

const engineer = new Engineer('binaya Engineer', 1, 'engineer@test.com', 'engineer.github.com');
console.log(engineer);

module.exports = Engineer;
