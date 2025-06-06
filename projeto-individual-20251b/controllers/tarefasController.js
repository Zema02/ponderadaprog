// Controller para gerenciamento de tarefas
const tarefasController = {
  // Listar todas as tarefas
  index: (req, res) => {
    // Buscar tarefas da API
    fetch('http://localhost:3000/api/tarefas')
      .then(response => response.json())
      .then(tarefas => {
        res.render('tarefas/index', { 
          title: 'Minhas Tarefas - TaskMaster',
          tarefas: tarefas 
        });
      })
      .catch(error => {
        console.error('Erro ao buscar tarefas:', error);
        res.render('tarefas/index', { 
          title: 'Minhas Tarefas - TaskMaster',
          tarefas: [],
          error: 'Erro ao carregar tarefas'
        });
      });
  },

  // Mostrar formulário de nova tarefa
  create: (req, res) => {
    const categorias = ['Desenvolvimento', 'Design', 'Backend', 'Frontend', 'Testes'];
    res.render('tarefas/create', { 
      title: 'Nova Tarefa - TaskMaster',
      categorias: categorias
    });
  },

  // Processar criação de nova tarefa
  store: (req, res) => {
    fetch('http://localhost:3000/api/tarefas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    })
    .then(response => response.json())
    .then(data => {
      res.redirect('/tarefas');
    })
    .catch(error => {
      console.error('Erro ao criar tarefa:', error);
      res.redirect('/tarefas/nova');
    });
  },

  // Mostrar formulário de edição
  edit: (req, res) => {
    const id = req.params.id;
    
    fetch(`http://localhost:3000/api/tarefas/${id}`)
      .then(response => response.json())
      .then(tarefa => {
        const categorias = ['Desenvolvimento', 'Design', 'Backend', 'Frontend', 'Testes'];
        res.render('tarefas/edit', { 
          title: 'Editar Tarefa - TaskMaster',
          tarefa: tarefa,
          categorias: categorias
        });
      })
      .catch(error => {
        console.error('Erro ao buscar tarefa:', error);
        res.redirect('/tarefas');
      });
  },

  // Processar atualização de tarefa
  update: (req, res) => {
    const id = req.params.id;
    
    fetch(`http://localhost:3000/api/tarefas/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    })
    .then(response => response.json())
    .then(data => {
      res.redirect('/tarefas');
    })
    .catch(error => {
      console.error('Erro ao atualizar tarefa:', error);
      res.redirect(`/tarefas/editar/${id}`);
    });
  },

  // Excluir tarefa
  delete: (req, res) => {
    const id = req.params.id;
    
    fetch(`http://localhost:3000/api/tarefas/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      res.redirect('/tarefas');
    })
    .catch(error => {
      console.error('Erro ao excluir tarefa:', error);
      res.redirect('/tarefas');
    });
  }
};

module.exports = tarefasController; 