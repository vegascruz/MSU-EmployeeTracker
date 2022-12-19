const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const start = () => {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What would you like to do? ",
          choices: [
            "View all employees",
            "View all departments",
            "View all roles",
            "Add employee",
            "Add department",
            "Add role",
            "Quit",
          ],
          name: "choice",
        },
      ])
      .then((response) => {
        switch (response.choice) {
            case 'View all employees':
              viewAllEmployees();
              break;
            case 'View all departments':
              viewAllDepartments();
              break;
            case 'View all roles':
              viewAllRoles();
              break;
            case 'Add employee':
              addEmployee();
              break;
            case 'Add department':
              addDepartment();
              break;
            case 'Add role':
              addRole();
              break;
            case 'Quit':
              connection.end();
              break;
            default:
              throw new Error('invalid initial user choice');
          }
      });
};

//view a table of all employees using cTable to show in the console
function viewAllEmployees(){

}
//view a table of all depts using cTable to show in the console
function viewAllDepartments(){

}
//view a table of all roles using cTable to show in the console
function viewAllRoles(){

}
//add employee
function addEmployee(){

}
//add a new dept
function addDepartment(){

}
//add a new role
function addRole(){

}

start();