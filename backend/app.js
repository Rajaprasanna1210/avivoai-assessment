// backend/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');  // <---- import cors
const app = express();
const userRoutes = require('./routes/userRoutes');
const initDb = require('./db/connection');

app.use(cors());

app.use(express.json());

initDb()
  .then((db) => {
    app.locals.db = db; // store db connection in app context

    // Pass db to routes via middleware
    app.use((req, res, next) => {
      req.db = db;
      next();
    });

    app.use('/users', userRoutes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ DB Init Error:', err);
  });
