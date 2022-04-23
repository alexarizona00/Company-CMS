var inquirer = require('inquirer');
const viewDept = require('../queries/viewalldept')
const viewRoles = require('../queries/viewroles')
const viewEmps = require('../queries/viewemps')
class Companyoverview {
    overview() {
        inquirer
            .prompt([
                {
                    type: 'list',
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
                if (answers.whatsup == 'EXIT'){
                    console.log("thanks for checking in!")
                    process.exit(0)
                }
            })
    }




}

module.exports = Companyoverview

