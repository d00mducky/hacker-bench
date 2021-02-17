const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mvp_db'
})

connection.connect()
console.log('Connected to MySQL database!')

module.exports = connection;