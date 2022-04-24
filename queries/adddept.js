let mysql = require('mysql2');
let connection = require('../db/assets/connection');

function runquery(first,last,role_id,manager_id){
let sql = `INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES (${first},${last},${role_id},${manager_id}),`;
connection.query(sql, (error, results) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(`
  ---------------------------------------------
  Your department name was created successfully!
  ---------------------------------------------`)
 
  console.table(results);
});
}

module.exports = runquery
