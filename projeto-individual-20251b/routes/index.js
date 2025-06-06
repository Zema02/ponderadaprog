const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// Rota principal - Dashboard
router.get('/', indexController.dashboard);
router.get('/dashboard', indexController.dashboard);

// Rota do perfil
router.get('/perfil', indexController.perfil);

module.exports = router; 