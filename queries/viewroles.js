let mysql = require('mysql2');
let connection = require('../db/assets/connection');

function runquery(){
let sql = `SELECT * FROM company_role`;
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

}

module.exports = runquery
