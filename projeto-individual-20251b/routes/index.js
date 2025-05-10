const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');

// Página inicial
router.get('/', HomeController.home);

module.exports = router;
