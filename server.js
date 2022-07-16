const mysql = require("mysql2");
const inquirer = require("inquirer");

const db =mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',

    password: "",
    database: "employeesDB"
});


db.connect(function (err){
    if (err) throw err;
firstQuestion();
})

function firstQuestion() {

    inquirer
    .prompt({
      type: "list",
      name: "operation",
      message: "Would you like to accomplish?",
      choices: [
        "View Employees",
        "View Departments",
        "View Roles",
        "Add new Employee",
        "Update Employee Role",
        "Add Role",
        "Add new Department",
        "End"]
    })
    .then(function ({ operation }) {
        switch (operation) {
          case "View Employees":
            viewEmployee();
            break;
  
          case "View Departments":
            viewByDepartment();
            break;
        
          case "View Roles":
            viewRoles();
            break;
  
          case "Add new Employee":
            addEmployee();
            break;
  
          case "Update Employee Role":
            updateEmployee();
            break;
  
          case "Add Role":
            addRole();
            break;

            case "Add new Department":
                addDepartment();
                break;
  
          case "End":
            connection.end();
            break;
        }
});
}