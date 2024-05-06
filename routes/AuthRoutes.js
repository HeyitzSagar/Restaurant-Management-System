const express = require('express');
const { registerController } = require('../controllers/AuthController');

const router = express.Router();

//routes

//Registration route

router.post('/register', registerController)

module.exports = router;