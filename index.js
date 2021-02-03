const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

const employees = [];

function initApp() {
  startHtml();
  addMember();
}

function addMember() {
  inquirer
    .prompt([
      {
        message: "Please enter team member's name",
        name: "name",
      },
      {
        type: "list",
        message: "Please select team member's role",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role",
      },
      {
        message: "Pleasenter team member's id",
        name: "id",
      },
      {
        message: "Please nter team member's email address",
        name: "email",
      },
    ])
    .then(function ({ name, role, id, email }) {
      let roleType = "";
      if (role === "Engineer") {
        roleType = "GitHub username";
      } else if (role === "Intern") {
        roleType = "school name";
      } else {
        roleType = "office number";
      }
      inquirer
        .prompt([
          {
            message: `Please enter team member's ${roleType}`,
            name: "roleType",
          },
          {
            type: "list",
            message: "Would you like to add more members to the team?",
            choices: ["yes", "no"],
            name: "additionalMembers",
          },
        ])
        .then(function ({ roleType, additionalMembers }) {
          let newMember;
          if (role === "Engineer") {
            newMember = new Engineer(name, id, email, roleType);
          } else if (role === "Intern") {
            newMember = new Intern(name, id, email, roleType);
          } else {
            newMember = new Manager(name, id, email, roleType);
          }
          employees.push(newMember);
          addHtml(newMember).then(function () {
            if (additionalMembers === "yes") {
              addMember();
            } else {
              finishHtml();
            }
          });
        });
    });
}

function startHtml() {
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-primary">
            <!-- Navbar content -->
            <span class="navbar-brand mb-0 h1 w-100 text-center">My Team Profile</span>
        </nav>
        <div class="container " style="background:lightgray;">
            <div class="row">`;
  fs.writeFile("./team.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("start");
}

function addHtml(member) {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    let data = "";
    if (role === "Engineer") {
      const gitHub = member.getGithub();
      data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header" style="background:lightblue;">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
    } else if (role === "Intern") {
      const school = member.getSchool();
      data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header" style="background:lightblue;">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
    } else {
      const officePhone = member.getOfficeNumber();
      data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header" style="background:lightblue;">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`;
    }
    console.log("adding team member");
    fs.appendFile("./team.html", data, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

function finishHtml() {
  const html = ` </div>
    </div>
    
</body>
</html>`;

  fs.appendFile("./team.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("end");
}

initApp();
