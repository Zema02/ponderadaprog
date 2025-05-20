const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController');
const TarefaController = require('../controllers/TarefaController');
const UserController = require('../controllers/UserController');
const CategoryController = require('../controllers/CategoryController');

// Página inicial (renderiza EJS)
router.get('/', HomeController.home);

// TAREFAS
router.post('/tarefas', TarefaController.criarTarefa);
router.get('/tarefas', TarefaController.listarTarefas);
router.put('/tarefas/:id', TarefaController.editarTarefa);
router.delete('/tarefas/:id', TarefaController.excluirTarefa);

// USUÁRIOS
router.get('/users', UserController.listarUsuarios);
router.post('/users', UserController.criarUsuario);

// CATEGORIAS
router.get('/categories', CategoryController.listarCategorias);
router.post('/categories', CategoryController.criarCategoria);

module.exports = router;
