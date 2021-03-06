
import inquirer from "inquirer";
import db from "./connection.js";



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
            viewbyDepartment();
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


function viewbyDepartment() {
    let dbquery="SELECT * FROM department"
    db.query(dbquery, function(err, res) {
        if (err) throw err;
console.table(res);
        firstQuestion();
    })
}
function viewEmployee() {
    let dbquery="SELECT * FROM employee"
    db.query(dbquery, function(err, res) {
        if (err) throw err;
console.table(res);
        firstQuestion();
    })
}

function viewRoles() {
    let dbquery="SELECT * FROM role"
    db.query(dbquery, function(err, res) {
        if (err) throw err;
console.table(res);
        firstQuestion();
    })
}

function addEmployee() {
    let dbquery="SELECT * FROM role"
    db.query(dbquery, function(err, res) {
        if (err) throw err;
        inquirer.prompt([
            {
                type:"input", 
                name:"firstName",
                message:"What is the new Employee's first name?"
            },
            {
                type:"input", 
                name:"lastName",
                message:"What is the new Employee's last name?"
            },
            {
                type:"list", 
                name:"role",
                message:"What is the new Employee's role?",
                choices: res.map(role => role.title)
            },

        ]).then(
            data => {
                let title = res.find(role => role.title===data.role)
                let dbquery = "INSERT INTO employee SET ?"
                db.query (dbquery, {
                    first_name: data.firstName,
                    last_name: data.lastName,
                    role_id: title.id
                })
                firstQuestion();
            }
        )
    })
}
 function addDepartment() {
    inquirer.prompt([
        {
            type:"input", 
            name:"addDepartment",
            message:"What is the Department you would like to add?"
        }
    ])
    .then (data => {
        let dbquery = "INSERT INTO department SET ?"
        db.query (dbquery, {
            name: data.addDepartment
        })
        firstQuestion();
    })
 } 


 function addRole() {
    let dbquery="SELECT * FROM department"
    db.query(dbquery, function(err, res) {
        if (err) throw err;
        inquirer.prompt([
            {
                type:"input", 
                name:"title",
                message:"What is the title of the new role?"
            },
            {
                type:"input", 
                name:"salary",
                message:"What is the new Employee's salary?"
            },
            {
                type:"list", 
                name:"department",
                message:"What department handles this role?",
                choices: res.map(department => department.name)
            },

        ]).then(
            data => {
                let departmentName = res.find(department => department.name===data.department)
                let dbquery = "INSERT INTO role SET ?"
                db.query (dbquery, {
                    title: data.title,
                    salary: data.salary,
                    department_id: departmentName.id
                })
                firstQuestion();
            }
        )
    })
}

