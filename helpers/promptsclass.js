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
                    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role', 'EXIT'],
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
                if (answers.whatsup == 'Update employee role') {
                    this.updateRole()

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
                    }
                }
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
                        }
                    }
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
                        }
                    }
                console.log(`
                ____________________________________________________
                A new role has been added
                ____________________________________________________                
                `)
                this.overview()

            });
    };
    updateRole() {
        let query = "SELECT * FROM employee";
        let employees = [];
        connection.query(query, (err, res) => {
            if (err) throw err;

            for (let i = 0; i < res.length; i++) {
                employees.push({
                    name: res[i].first_name + " " + res[i].last_name,
                    value: res[i].id,
                });
            }

            let roles = [];
            let query =
                "SELECT company_role.id, company_role.title, company_role.salary, department.name_ from company_role inner JOIN department on company_role.department_id = department.id;";
            connection.query(query, (err, res) => {
                if (err) throw err;
                for (let i = 0; i < res.length; i++) {
                    roles.push({
                        name: res[i].title,
                        value: res[i].id,
                    });
                }
            });
            inquirer
                .prompt([
                    {
                        type: "list",
                        name: "upemp",
                        message: "Which employee would you like to update?",
                        choices: employees,
                    },
                    {
                        type: "list",
                        name: "uprole",
                        message: "Which role would you like to assign?",
                        choices: roles,
                    },
                ])
                .then((answers) => {
                    console.log(answers);
                    let query = "UPDATE employee SET ? WHERE ?";
                    connection.query(
                        query,
                        [
                            {
                                role_id: answers.uprole,
                            },
                            {
                                id: answers.upemp,
                            },
                        ],

                        function (err, res) {
                            if (err) throw err;
                            console.log('\n');
                            console.log('~~~~~Role has been updated!~~~~~');
                            console.log('\n');
                            console.log('\n');
                            console.log('\n');
                            console.log('PRESS SPACEBAR TO CONTINUE')
                            console.log('\n');
                            console.log('\n');


                        }

                    );
                    this.overview()
                });
        });
    }




}



module.exports = Companyoverview

