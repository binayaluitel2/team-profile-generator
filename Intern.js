const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}


const intern = new Intern('binaya Intern', 1, 'intern@test.com', 'Hello State University');
console.log(intern);

module.exports = Intern;
