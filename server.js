const fs = require('fs')
var inquirer = require('inquirer');

// placing various objects and arrays here for reference in prompts later

const mainPrompt = [
    {
        type: 'checkbox',
        message: 'What can I help you with?',
        name: 'whatToDo',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
    },
];

