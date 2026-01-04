const mysql = require('mysql2');

// We use direct values to ensure we connect to YOUR phpMyAdmin
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Empty password for XAMPP/Localhost
  database: 'bookstore', // Matches your screenshot
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();