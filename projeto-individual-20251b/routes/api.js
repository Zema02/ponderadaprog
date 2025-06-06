const express = require('express');
const router = express.Router();

// Array global para armazenar tarefas
let tarefas = [
  {
    id: 1,
    nome: 'Implementar autenticação',
    descricao: 'Criar sistema de login e registro de usuários',
    status: 'Em andamento',
    prioridade: 'Alta',
    responsavel: 'João Silva',
    projeto: 'TaskMaster',
    categoria: 'Desenvolvimento',
    dataInicio: '2024-01-15',
    dataFim: '2024-01-25'
  },
  {
    id: 2,
    nome: 'Design da interface',
    descricao: 'Criar mockups e protótipos das telas',
    status: 'Concluída',
    prioridade: 'Média',
    responsavel: 'Maria Santos',
    projeto: 'TaskMaster',
    categoria: 'Design',
    dataInicio: '2024-01-10',
    dataFim: '2024-01-20'
  }
];

// API para Tarefas
router.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

router.post('/tarefas', (req, res) => {
  const novaTarefa = {
    id: tarefas.length + 1,
    ...req.body
  };
  tarefas.push(novaTarefa);
  console.log('Nova tarefa:', novaTarefa);
  res.json({ success: true, message: 'Tarefa criada com sucesso!', tarefa: novaTarefa });
});

router.put('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tarefas.findIndex(t => t.id === id);
  
  if (index !== -1) {
    tarefas[index] = { ...tarefas[index], ...req.body };
    console.log('Editando tarefa:', id, tarefas[index]);
    res.json({ success: true, message: 'Tarefa atualizada com sucesso!', tarefa: tarefas[index] });
  } else {
    res.status(404).json({ success: false, message: 'Tarefa não encontrada!' });
  }
});

router.delete('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tarefas.findIndex(t => t.id === id);
  
  if (index !== -1) {
    tarefas = tarefas.filter(t => t.id !== id);
    console.log('Excluindo tarefa:', id);
    res.json({ success: true, message: 'Tarefa excluída com sucesso!' });
  } else {
    res.status(404).json({ success: false, message: 'Tarefa não encontrada!' });
  }
});

// API para Categorias
router.get('/categorias', (req, res) => {
  const categorias = [
    { id: 1, nome: 'Desenvolvimento', descricao: 'Tarefas relacionadas ao desenvolvimento de software' },
    { id: 2, nome: 'Design', descricao: 'Tarefas de design e interface' },
    { id: 3, nome: 'Backend', descricao: 'Desenvolvimento do lado servidor' },
    { id: 4, nome: 'Frontend', descricao: 'Desenvolvimento da interface do usuário' }
  ];
  res.json(categorias);
});

router.post('/categorias', (req, res) => {
  console.log('Nova categoria:', req.body);
  res.json({ success: true, message: 'Categoria criada com sucesso!' });
});

router.put('/categorias/:id', (req, res) => {
  const id = req.params.id;
  console.log('Editando categoria:', id, req.body);
  res.json({ success: true, message: 'Categoria atualizada com sucesso!' });
});

router.delete('/categorias/:id', (req, res) => {
  const id = req.params.id;
  console.log('Excluindo categoria:', id);
  res.json({ success: true, message: 'Categoria excluída com sucesso!' });
});

// API para Usuários
router.get('/usuarios', (req, res) => {
  const usuarios = [
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao.silva@email.com',
      telefone: '(11) 99999-9999',
      cargo: 'Desenvolvedor Senior'
    },
    {
      id: 2,
      nome: 'Maria Santos',
      email: 'maria.santos@email.com',
      telefone: '(11) 88888-8888',
      cargo: 'Designer UI/UX'
    }
  ];
  res.json(usuarios);
});

router.post('/usuarios', (req, res) => {
  console.log('Novo usuário:', req.body);
  res.json({ success: true, message: 'Usuário criado com sucesso!' });
});

router.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  console.log('Editando usuário:', id, req.body);
  res.json({ success: true, message: 'Usuário atualizado com sucesso!' });
});

router.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  console.log('Excluindo usuário:', id);
  res.json({ success: true, message: 'Usuário excluído com sucesso!' });
});

module.exports = router; 