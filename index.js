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
    type: "list",
    name: "role",
    message:
      "What is the employee's role at the company?",
    choices: ["Manager", "Engineer", "Intern"]
  },
]

let employeesArray = []

// FUNCTION TO INITIALIZE THE APP
const addEmployee = async () => {
  const answers = await inquirer.prompt(questions);
    let employee;

    if (answers.role === "Manager") {
      const officeNumberAnswer = await inquirer.prompt([
        {
          type: "input",
          name: "officeNumber",
          message: "What is the manager's office number?"
        }
      ]);
      employee = new Manager(
        answers.name,
        answers.id,
        answers.email,
        officeNumberAnswer.officeNumber
      );
    } else if (answers.role === "Engineer") {
      const githubAnswer = await inquirer.prompt([
        {
          type: "input",
          name: "github",
          message: "What is the engineer's Github username?"
        }
      ]);
      employee = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        githubAnswer.github
      );
    } else if (answers.role === "Intern") {
      const schoolAnswer = await inquirer.prompt([
        {
          type: "input",
          name: "school",
          message: "What is the intern's school?"
        }
      ]);
      employee = new Intern(
        answers.name,
        answers.id,
        answers.email,
        schoolAnswer.school
      );
    } else {
      employee = new Employee(answers.name, answers.id, answers.email);
    }
    employeesArray.push(employee); //WHY IS IT TELLING ME EMPLOYEES IS NOT DEFINED?
    
    // prompting to add another employee or be done
    const addAnotherEmployee = await inquirer.prompt([
      {
        type: "confirm",
        name: "addAnother",
        message: "Would you like to add another employee?"
      }
    ]);
    if (addAnotherEmployee.addAnother) {
      addEmployee();
    } 
    else {
console.log("test")
      // fs.writeFile("index.html", JSON.stringify(employees), err => { //the html needs to link to the dist folder?
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     console.log("Success!");
      //   }
      // });
    }
  };
console.log(employeesArray)
addEmployee()



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