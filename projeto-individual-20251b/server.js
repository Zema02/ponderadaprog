const express = require('express');
const app = express();
const PORT = 3000;

const routes = require('./routes');

// Configurações
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('assets'));

// Rotas
app.use('/', routes);

// Inicialização
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});