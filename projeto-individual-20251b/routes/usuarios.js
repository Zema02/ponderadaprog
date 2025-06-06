const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Listar usuários
router.get('/', usuariosController.index);

// Novo usuário
router.get('/novo', usuariosController.create);

module.exports = router; 