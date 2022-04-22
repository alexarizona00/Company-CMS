const fs = require('fs')
var inquirer = require('inquirer');

// placing various objects and arrays here for reference in prompts later

const mainPrompt = [
    {
        type: 'checkbox',
        message: 'Select Licenses',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC License', 'GNU GPLv2',],
    },
];