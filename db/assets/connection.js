const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'QqK!afjk3&MFTE',
  database: 'potato_factory_db'
})

module.exports = connection