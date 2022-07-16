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


}