const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

// Listar tarefas
router.get('/', tarefasController.index);

// Nova tarefa
router.get('/nova', tarefasController.create);
router.post('/nova', tarefasController.store);

// Editar tarefa
router.get('/editar/:id', tarefasController.edit);
router.post('/editar/:id', tarefasController.update);

// Excluir tarefa
router.post('/excluir/:id', tarefasController.delete);

module.exports = router; 