// Controller para gerenciamento de categorias
const categoriasController = {
  // Listar todas as categorias
  index: (req, res) => {
    const categorias = [
      { id: 1, nome: 'Desenvolvimento', descricao: 'Tarefas relacionadas ao desenvolvimento de software' },
      { id: 2, nome: 'Design', descricao: 'Tarefas de design e interface' },
      { id: 3, nome: 'Backend', descricao: 'Desenvolvimento do lado servidor' },
      { id: 4, nome: 'Frontend', descricao: 'Desenvolvimento da interface do usuário' },
      { id: 5, nome: 'Testes', descricao: 'Testes de qualidade e funcionalidade' },
      { id: 6, nome: 'Documentação', descricao: 'Criação e manutenção de documentação' }
    ];
    
    res.render('categorias/index', { 
      title: 'Categorias - TaskMaster',
      categorias: categorias 
    });
  }
};

module.exports = categoriasController; 