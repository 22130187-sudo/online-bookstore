const mysql = require('mysql2');

// 1. Create the pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',  // ⚠️ If you have a MySQL password, type it inside these quotes!
    database: 'bookstore',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 2. Export the pool (This fixes the 'pool is not defined' error)
module.exports = pool.promise();