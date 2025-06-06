// Funções utilitárias
function showAlert(message, type = 'info') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type}`;
  alertDiv.textContent = message;
  
  // Inserir no topo da página
  const container = document.querySelector('.container');
  container.insertBefore(alertDiv, container.firstChild);
  
  // Remover após 5 segundos
  setTimeout(() => {
    alertDiv.remove();
  }, 5000);
}

function showSpinner(element) {
  element.innerHTML = '<div class="spinner"></div>';
}

function hideSpinner() {
  const spinners = document.querySelectorAll('.spinner');
  spinners.forEach(spinner => spinner.remove());
}

// Funções de API para Tarefas
async function carregarTarefas() {
  try {
    const response = await fetch('/api/tarefas');
    const tarefas = await response.json();
    return tarefas;
  } catch (error) {
    console.error('Erro ao carregar tarefas:', error);
    showAlert('Erro ao carregar tarefas', 'danger');
    return [];
  }
}

async function criarTarefa(dadosTarefa) {
  try {
    const response = await fetch('/api/tarefas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosTarefa)
    });
    
    const resultado = await response.json();
    
    if (resultado.success) {
      showAlert(resultado.message, 'success');
      setTimeout(() => {
        window.location.href = '/tarefas';
      }, 1500);
    } else {
      showAlert('Erro ao criar tarefa', 'danger');
    }
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    showAlert('Erro ao criar tarefa', 'danger');
  }
}

async function editarTarefa(id, dadosTarefa) {
  try {
    const response = await fetch(`/api/tarefas/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosTarefa)
    });
    
    const resultado = await response.json();
    
    if (resultado.success) {
      showAlert(resultado.message, 'success');
      setTimeout(() => {
        window.location.href = '/tarefas';
      }, 1500);
    } else {
      showAlert('Erro ao atualizar tarefa', 'danger');
    }
  } catch (error) {
    console.error('Erro ao editar tarefa:', error);
    showAlert('Erro ao editar tarefa', 'danger');
  }
}

async function excluirTarefa(id) {
  if (!confirm('Tem certeza que deseja excluir esta tarefa?')) {
    return;
  }
  
  try {
    const response = await fetch(`/api/tarefas/${id}`, {
      method: 'DELETE'
    });
    
    const resultado = await response.json();
    
    if (resultado.success) {
      showAlert(resultado.message, 'success');
      setTimeout(() => {
        location.reload();
      }, 1500);
    } else {
      showAlert('Erro ao excluir tarefa', 'danger');
    }
  } catch (error) {
    console.error('Erro ao excluir tarefa:', error);
    showAlert('Erro ao excluir tarefa', 'danger');
  }
}

// Funções de API para Categorias
async function carregarCategorias() {
  try {
    const response = await fetch('/api/categorias');
    const categorias = await response.json();
    return categorias;
  } catch (error) {
    console.error('Erro ao carregar categorias:', error);
    showAlert('Erro ao carregar categorias', 'danger');
    return [];
  }
}

async function criarCategoria(dadosCategoria) {
  try {
    const response = await fetch('/api/categorias', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosCategoria)
    });
    
    const resultado = await response.json();
    
    if (resultado.success) {
      showAlert(resultado.message, 'success');
      setTimeout(() => {
        location.reload();
      }, 1500);
    } else {
      showAlert('Erro ao criar categoria', 'danger');
    }
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    showAlert('Erro ao criar categoria', 'danger');
  }
}

async function editarCategoria(id, dadosCategoria) {
  try {
    const response = await fetch(`/api/categorias/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosCategoria)
    });
    
    const resultado = await response.json();
    
    if (resultado.success) {
      showAlert(resultado.message, 'success');
      setTimeout(() => {
        location.reload();
      }, 1500);
    } else {
      showAlert('Erro ao atualizar categoria', 'danger');
    }
  } catch (error) {
    console.error('Erro ao editar categoria:', error);
    showAlert('Erro ao editar categoria', 'danger');
  }
}

async function excluirCategoria(id) {
  if (!confirm('Tem certeza que deseja excluir esta categoria?')) {
    return;
  }
  
  try {
    const response = await fetch(`/api/categorias/${id}`, {
      method: 'DELETE'
    });
    
    const resultado = await response.json();
    
    if (resultado.success) {
      showAlert(resultado.message, 'success');
      setTimeout(() => {
        location.reload();
      }, 1500);
    } else {
      showAlert('Erro ao excluir categoria', 'danger');
    }
  } catch (error) {
    console.error('Erro ao excluir categoria:', error);
    showAlert('Erro ao excluir categoria', 'danger');
  }
}

// Funções de API para Usuários
async function carregarUsuarios() {
  try {
    const response = await fetch('/api/usuarios');
    const usuarios = await response.json();
    return usuarios;
  } catch (error) {
    console.error('Erro ao carregar usuários:', error);
    showAlert('Erro ao carregar usuários', 'danger');
    return [];
  }
}

async function criarUsuario(dadosUsuario) {
  try {
    const response = await fetch('/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosUsuario)
    });
    
    const resultado = await response.json();
    
    if (resultado.success) {
      showAlert(resultado.message, 'success');
      setTimeout(() => {
        window.location.href = '/usuarios';
      }, 1500);
    } else {
      showAlert('Erro ao criar usuário', 'danger');
    }
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    showAlert('Erro ao criar usuário', 'danger');
  }
}

async function excluirUsuario(id) {
  if (!confirm('Tem certeza que deseja excluir este usuário?')) {
    return;
  }
  
  try {
    const response = await fetch(`/api/usuarios/${id}`, {
      method: 'DELETE'
    });
    
    const resultado = await response.json();
    
    if (resultado.success) {
      showAlert(resultado.message, 'success');
      setTimeout(() => {
        location.reload();
      }, 1500);
    } else {
      showAlert('Erro ao excluir usuário', 'danger');
    }
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    showAlert('Erro ao excluir usuário', 'danger');
  }
}

// Funções de filtro para tarefas
function filtrarTarefas(status) {
  const tarefas = document.querySelectorAll('.tarefa-item');
  const filtros = document.querySelectorAll('.filter-btn');
  
  // Atualizar botões de filtro
  filtros.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-filter="${status}"]`).classList.add('active');
  
  // Filtrar tarefas
  tarefas.forEach(tarefa => {
    if (status === 'todas' || tarefa.dataset.status === status) {
      tarefa.style.display = 'table-row';
    } else {
      tarefa.style.display = 'none';
    }
  });
}

// Funções para modais
function abrirModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
  }
}

function fecharModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Event listeners para modais
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
  
  if (e.target.classList.contains('close')) {
    const modal = e.target.closest('.modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
});

// Validação de formulários
function validarFormulario(formulario) {
  const campos = formulario.querySelectorAll('[required]');
  let valido = true;
  
  campos.forEach(campo => {
    if (!campo.value.trim()) {
      campo.style.borderColor = '#dc3545';
      valido = false;
    } else {
      campo.style.borderColor = '#ddd';
    }
  });
  
  return valido;
}

// Event listeners para formulários
document.addEventListener('submit', function(e) {
  if (e.target.matches('.form-tarefa')) {
    e.preventDefault();
    
    if (!validarFormulario(e.target)) {
      showAlert('Por favor, preencha todos os campos obrigatórios', 'warning');
      return;
    }
    
    const formData = new FormData(e.target);
    const dadosTarefa = {};
    
    for (let [key, value] of formData.entries()) {
      dadosTarefa[key] = value;
    }
    
    if (e.target.dataset.modo === 'editar') {
      const id = e.target.dataset.id;
      editarTarefa(id, dadosTarefa);
    } else {
      criarTarefa(dadosTarefa);
    }
  }
  
  if (e.target.matches('.form-usuario')) {
    e.preventDefault();
    
    if (!validarFormulario(e.target)) {
      showAlert('Por favor, preencha todos os campos obrigatórios', 'warning');
      return;
    }
    
    const formData = new FormData(e.target);
    const dadosUsuario = {};
    
    for (let [key, value] of formData.entries()) {
      dadosUsuario[key] = value;
    }
    
    // Validar senhas
    if (dadosUsuario.senha !== dadosUsuario.confirmarSenha) {
      showAlert('As senhas não conferem', 'warning');
      return;
    }
    
    criarUsuario(dadosUsuario);
  }
});

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  console.log('TaskMaster System carregado');
  
  // Adicionar event listeners para botões de ação
  document.querySelectorAll('.btn-excluir-tarefa').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = this.dataset.id;
      excluirTarefa(id);
    });
  });
  
  document.querySelectorAll('.btn-excluir-categoria').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = this.dataset.id;
      excluirCategoria(id);
    });
  });
  
  document.querySelectorAll('.btn-excluir-usuario').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = this.dataset.id;
      excluirUsuario(id);
    });
  });
  
  // Configurar filtros de tarefas
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const status = this.dataset.filter;
      filtrarTarefas(status);
    });
  });
});

// Funções para perfil de usuário
function alternarEdicaoPerfil() {
  const camposLeitura = document.querySelectorAll('.campo-leitura');
  const camposEdicao = document.querySelectorAll('.campo-edicao');
  const btnEditar = document.getElementById('btn-editar-perfil');
  const btnSalvar = document.getElementById('btn-salvar-perfil');
  const btnCancelar = document.getElementById('btn-cancelar-perfil');
  
  camposLeitura.forEach(campo => campo.classList.toggle('hidden'));
  camposEdicao.forEach(campo => campo.classList.toggle('hidden'));
  btnEditar.classList.toggle('hidden');
  btnSalvar.classList.toggle('hidden');
  btnCancelar.classList.toggle('hidden');
}

function salvarPerfil() {
  const form = document.getElementById('form-perfil');
  const formData = new FormData(form);
  const dadosPerfil = {};
  
  for (let [key, value] of formData.entries()) {
    dadosPerfil[key] = value;
  }
  
  // Simular salvamento
  showAlert('Perfil atualizado com sucesso!', 'success');
  alternarEdicaoPerfil();
} 