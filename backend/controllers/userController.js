// backend/controllers/userController.js
exports.getUsers = (req, res) => {
  const db = req.db;

  db.query('SELECT * FROM users', (err, results) => {
    console.log(results);
    
    if (err) {
      console.error('DB Error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    console.log(results);
    
    res.json(results);
  });
};
