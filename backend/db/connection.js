// backend/db/connection.js
const mysql = require('mysql2');
const DB_NAME = 'userdb';

const initDb = () => {
  return new Promise((resolve, reject) => {
    const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      multipleStatements: true,
    });

    pool.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`, (err) => {
      if (err) return reject(err);

      const db = mysql.createPool({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'root',
        database: DB_NAME,
      });

      const tableSQL = `
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          firstName VARCHAR(50),
          lastName VARCHAR(50),
          company VARCHAR(100),
          role VARCHAR(50),
          country VARCHAR(50)
        );
      `;

      db.query(tableSQL, (err) => {
        if (err) return reject(err);
        console.log('✅ User table ready.');
        resolve(db);
      });
    });
  });
};

module.exports = initDb;
