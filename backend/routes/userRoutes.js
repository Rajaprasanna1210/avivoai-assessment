const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');

router.get('/get_all_users', getUsers);

module.exports = router;
