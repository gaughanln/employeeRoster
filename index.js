const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')


// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// link emails + github 


const questions = [
  {
    type: "input",
    name: "name",
    message:
      "What is the employee's name?",
  },
  {
    type: "input",
    name: "id",
    message:
      "What is their employee ID?",
  },
  {
    type: "input",
    name: "email",
    message:
      "What is their email address?",
  },
  {
    type: "input",
    name: "role",
    message:
      "What is the employee's role at the company?",
    choices: ["Manager", "Engineer", "Intern"]
  },

]

const employeesArray = []
//or to finish building my team

// FUNCTION TO INITIALIZE THE APP
const createEmployee = () => {
  inquirer
    .prompt(questions)
    .then((answers) => {
      let employee;

      if (answers.role === 'Manager') {
        employee = new Manager(
          answers.name,
          answers.id,
          answers.email,
          inquirer.prompt([
            {
              type: "input",
              name: "officeNumber",
              message: "What is the manager's office number?"
            }
          ]).then(officeNumberAnswer => {
            return officeNumberAnswer.officeNumber;
          })
        );
      }
      else if (answers.role === 'Engineer') {
        employee = new Engineer(
          answers.name, 
          answers.id, 
          answers.email,
          inquirer.prompt([
            {
            type: "input",
            name: "github",
            message: "What is the Engineer's github?",
          }
        ]).then((githubAnswer) => {
            return githubAnswer.github
          })
        );
      }
      else if (answers.role === 'Intern') {
        employee = new Intern(
          answers.name, 
          answers.id, 
          answers.email,
          inquirer.prompt([
            {
            type: "input",
            name: "school",
            message: "What school does the intern attend?",
          }
        ]).then((schoolAnswer) => {
            return schoolAnswer.school
          })
        );
      }
      else {
        employee = new Employee(
          answers.name, 
          answers.id, 
          answers.email)
      // }
      return employeesArray.push(employee)
    })
    .then(() => {
      inquirer
        .prompt([{
          type: 'confirm',
          name: 'newEmployee',
          message: 'Would you like to add another employee?'
        }])
        .then((newEmployeeResponse) => {
          if (newEmployeeResponse.newEmployee) {
            // createEmployee()
          }
          else {
          console.log(employeesArray)  
          }
        })
    })
}
console.log(employeesArray)
createEmployee()



//       fs.writeFile('.dist/index.html', employee, (err) => {
//         if (err) console.log(err);
//         else {
//           console.log('files written successfully')
//         }
//       }
//       );
//     });
// }







// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
// HOW DO I ADD MORE OPTIONS OR AN 'ARE YOU DONE?' OPTION?