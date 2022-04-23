const fs = require('fs')
var inquirer = require('inquirer');
const mysql = require('mysql2')
const connection = require('./db/assets/connection')
require 

// placing various objects and arrays here for reference in prompts later


inquirer
    .prompt([
        {
            type: 'list',
            name: 'mainlist',
            message: 'What can I help you with?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        },
    ])
    .then((answers) => {
        if (answers.whatToDo == 'View all departments') {
            connection.query("SELECT * FROM department", function (err, result) {
                if (err) throw err;
                console.log(result);
            })
        }})

    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });


// function ({ first_name, last_name, manager }) {
//     connection.query("INSERT INTO employee (first_name, last_name, manager)
//          VALUES ?", ('first_name', 'last_name', 'manager'), function (err, result) {
//         if (err) throw err;