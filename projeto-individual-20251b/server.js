const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Importar rotas
const indexRoutes = require('./routes/index');
const tarefasRoutes = require('./routes/tarefas');
const categoriasRoutes = require('./routes/categorias');
const usuariosRoutes = require('./routes/usuarios');
const apiRoutes = require('./routes/api');

// Usar rotas
app.use('/', indexRoutes);
app.use('/tarefas', tarefasRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/api', apiRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});

module.exports = app; 