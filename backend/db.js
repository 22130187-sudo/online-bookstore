const mysql = require('mysql2');

// We use direct values to ensure we connect to YOUR phpMyAdmin

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'your_local_password',
    database: process.env.DB_NAME || 'bookstore'
});

module.exports = pool.promise();