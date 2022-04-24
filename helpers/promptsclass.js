var inquirer = require('inquirer');
let mysql = require('mysql2');
const viewDept = require('../queries/viewalldept')
const viewRoles = require('../queries/viewroles')
const viewEmps = require('../queries/viewemps');
const connection = require('../db/assets/connection');
class Companyoverview {
    overview() {
        inquirer
            .prompt([
                {
                    type: 'rawlist',
                    name: 'whatsup',
                    message: 'What can I help you with?',
                    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'EXIT'],
                },
            ])
            .then((answers) => {
                if (answers.whatsup == 'View all departments') {
                    viewDept()
                    this.overview()
                }
                if (answers.whatsup == 'View all roles') {
                    viewRoles()
                    this.overview()
                }
                if (answers.whatsup == 'View all employees') {
                    viewEmps()
                    this.overview()
                }
                if (answers.whatsup == 'Add a department') {
                    this.addDept()
                }
                if (answers.whatsup == 'Add a role') {
                    this.addRole()

                }
                if (answers.whatsup == 'Add an employee') {
                    this.addEmp()

                }
                if (answers.whatsup == 'Update an Employee') {
                    this.addEmp()

                }
                if (answers.whatsup == 'EXIT') {
                    console.log("thanks for checking in!")
                    process.exit(0)
                }
            })
    }
    addDept() {
        inquirer
            .prompt([
                {
                    type: "input"
                    , message: "What is the name of the new department?"
                    , name: "deptname"
                },
            ]).then(answers => {
                connection.query(`INSERT INTO department (name_) VALUES ("${answers.newDepartName}");`), (error, results) => {
                    if (error) {
                      return console.error(error.message);
                    }}
                console.log(`
                ____________________________________________________
                A new department has been added
                ____________________________________________________                
                `)
                this.overview()
            });
    };
    addEmp() {
        inquirer
            .prompt([
                {
                    type: "input"
                    , message: "what is their first name?"
                    , name: "efname"
                },
                {
                    type: "input"
                    , message: "what is their last name?"
                    , name: "elname"
                },
                {
                    type: "input"
                    , message: "what is their role ID?"
                    , name: "eroleid"
                },
                {
                    type: "input"
                    , message: "what is their manager's ID?"
                    , name: "emanagerid"
                },
            ]).then(answers => {
                connection.query(`INSERT INTO employee (first_name,last_name,role_id,manager_id)
                VALUES ("${answers.efname}","${answers.elname}",${answers.eroleid},${answers.emanagerid});`), (error, results) => {
                    if (error) {
                      return console.error(error.message);
                    }}
                console.log(`
                ____________________________________________________
                A new employee has been added
                ____________________________________________________                
                `)
                this.overview()
            });
    };
    addRole() {
        inquirer
            .prompt([
                {
                    type: "input"
                    , message: "What is the new role title?"
                    , name: "roletitle"
                },
                {
                    type: "input"
                    , message: "how much does this role get paid annually?"
                    , name: "rolesal"
                },
                {
                    type: "input"
                    , message: "Enter the ID for the department?"
                    , name: "deptid"
                },
            ]).then(answers => {
                connection.query(`INSERT INTO company_role (title, salary, department_id)
                VALUES ("${answers.roletitle}",${answers.rolesal}, ${answers.deptid});`), (error, results) => {
                        if (error) {
                            return console.error(error.message);
                        }}
                        console.log(`
                ____________________________________________________
                A new role has been added
                ____________________________________________________                
                `)
                        this.overview()

                    });
    };





}

module.exports = Companyoverview

