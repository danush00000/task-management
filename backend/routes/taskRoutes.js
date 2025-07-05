const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { createTask, getTasks } = require('../controllers/taskController');

// Protect routes using `auth` middleware
router.get('/', auth, getTasks);
router.post('/', auth, createTask);

module.exports = router;
