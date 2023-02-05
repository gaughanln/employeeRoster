const inquirer = require('inquirer');
const fs = require("fs");

// GIVEN a command-line application that accepts user input

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// link emails + github 


//I am prompted to enter the team manager’s 
//name
//employee ID
//email address
//office number
// const manager = [
//   {
//     type: "input",
//     name: "managerName",
//     message:
//       "What is the manager's name?",
//   },
//   {
//     type: "input",
//     name: "ManagerId",
//     message:
//       "What is their employee ID?",
//   },
//   {
//     type: "input",
//     name: "managerEmail",
//     message:
//       "What is their email address?",
//   },
//   {
//     type: "input",
//     name: "officeNumber",
//     message:
//       "What is the manager's office number?",
//   },
// ]

//THEN I am presented with a menu with the option to add an 
//A. ENGINEER
//name
//ID
//email
//GitHub username
//I am taken back to the menu

// const engineer = [
//   {
//     type: "input",
//     name: "engineerName",
//     message:
//       "What is the engineer's name?",
//   },
//   {
//     type: "input",
//     name: "engineerId",
//     message:
//       "What is their employee ID?",
//   },
//   {
//     type: "input",
//     name: "engineerEmail",
//     message:
//       "What is their email address?",
//   },
//   {
//     type: "input",
//     name: "github",
//     message:
//       "What is their github name?",
//   },
// ]

// OR I CAN CHOOSE

//B. INTERN 
//name
//ID
//email
//school
//I am taken back to the menu
// const intern = [
//   {
//     type: "input",
//     name: "internName",
//     message:
//       "What is the intern's name?",
//   },
//   {
//     type: "input",
//     name: "internId",
//     message:
//       "What is their employee ID?",
//   },
//   {
//     type: "input",
//     name: "internEmail",
//     message:
//       "What is their email address?",
//   },
//   {
//     type: "input",
//     name: "school",
//     message:
//       "What school are they currently attending?",
//   },
// ]
//or to finish building my team

// FUNCTION TO INITIALIZE THE APP
function init() {
  inquirer
    .prompt() //Do i need a new function for each array? Or should they all be in one array?
      .then((employees) => {
        let x = y(employees);

        fs.writeFile('./index.html', x,(err) => {
          if (err) console.log(err);
          else {
            console.log('files written successfully')
          }
        });
      });
}


// CALLING THE FUNCTION 
init();



// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
// HOW DO I ADD MORE OPTIONS OR AN 'ARE YOU DONE?' OPTION?