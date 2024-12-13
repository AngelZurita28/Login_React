const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "181117",
  database: "practica",
});

module.exports = pool;
