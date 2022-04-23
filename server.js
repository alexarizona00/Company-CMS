const fs = require('fs')
var inquirer = require('inquirer');
const mysql = require('mysql2')
const Companyoverview = require('./helpers/promptsclass')
const appStart = new Companyoverview()



// placing various objects and arrays here for reference in prompts later

appStart.overview()
