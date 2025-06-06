// Controller para gerenciamento de usuários
const usuariosController = {
  // Listar todos os usuários
  index: (req, res) => {
    const usuarios = [
      {
        id: 1,
        nome: 'João Silva',
        email: 'joao.silva@email.com',
        telefone: '(11) 99999-9999',
        cargo: 'Desenvolvedor Senior',
        dataCriacao: '2024-01-10'
      },
      {
        id: 2,
        nome: 'Maria Santos',
        email: 'maria.santos@email.com',
        telefone: '(11) 88888-8888',
        cargo: 'Designer UI/UX',
        dataCriacao: '2024-01-12'
      },
      {
        id: 3,
        nome: 'Carlos Lima',
        email: 'carlos.lima@email.com',
        telefone: '(11) 77777-7777',
        cargo: 'Analista de Sistemas',
        dataCriacao: '2024-01-15'
      },
      {
        id: 4,
        nome: 'Ana Costa',
        email: 'ana.costa@email.com',
        telefone: '(11) 66666-6666',
        cargo: 'Gerente de Projetos',
        dataCriacao: '2024-01-18'
      }
    ];
    
    res.render('usuarios/index', { 
      title: 'Usuários - TaskMaster',
      usuarios: usuarios 
    });
  },

  // Mostrar formulário de novo usuário
  create: (req, res) => {
    res.render('usuarios/create', { 
      title: 'Novo Usuário - TaskMaster'
    });
  }
};

module.exports = usuariosController; 