let mysql = require('mysql2');
let connection = require('../db/assets/connection');

function runquery(){
let sql = `SELECT employee.id, employee.first_name, employee.last_name, company_role.title, department.name_ AS department, company_role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
FROM employee
LEFT JOIN employee manager on manager.id = employee.manager_id
INNER JOIN company_role ON (company_role.id = employee.role_id)
INNER JOIN department ON (department.id = company_role.department_id)
ORDER BY employee.id;`;
connection.query(sql, (error, results,) => {
  if (error) {
    return console.error(error.message);
  }
  console.log('\n');
  console.log('VIEW ALL EMPLOYEES');
  console.log('\n');
  console.table(results);
  console.log('\n');
  console.log('Press Spacebar to Continue')
  console.log('\n');
  console.log('\n');
  console.log('\n');
});
}

module.exports = runquery
