// Controllers para páginas principais
const indexController = {
  // Dashboard principal
  dashboard: (req, res) => {
    const stats = {
      totalTarefas: 25,
      tarefasPendentes: 8,
      tarefasAndamento: 12,
      tarefasConcluidas: 5,
      totalCategorias: 6,
      totalUsuarios: 4
    };
    
    res.render('dashboard', { 
      title: 'Dashboard - TaskMaster',
      stats: stats,
      user: { name: 'João Silva', avatar: '/images/avatar.jpg' }
    });
  },

  // Página de perfil
  perfil: (req, res) => {
    const user = {
      id: 1,
      name: 'João Silva',
      email: 'joao.silva@email.com',
      telefone: '(11) 99999-9999',
      cargo: 'Desenvolvedor',
      situacaoEstudo: 'Cursando Superior',
      situacaoTrabalho: 'Empregado',
      areaAtuacao: 'Tecnologia da Informação',
      avatar: '/images/avatar.jpg'
    };
    
    res.render('perfil', { 
      title: 'Perfil - TaskMaster',
      user: user 
    });
  }
};

module.exports = indexController; 