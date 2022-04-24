let mysql = require('mysql2');
let connection = require('../db/assets/connection');

function runquery(){
let sql = `SELECT * FROM company_role`;
connection.query(sql, (error, results) => {
  if (error) {
    return console.error(error.message);
  }
  console.log('\n');
  console.log('VIEW ALL ROLES');
  console.log('\n');
  console.table(results);
  console.log('\n');
  console.log('\n');
  console.log('Press Spacebar to Continue')
  console.log('\n');
  console.log('\n');
});
}

module.exports = runquery
