const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Importa rotas
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configura o mecanismo de visualização e pasta de assets
app.set('view engine', 'ejs');
app.use(express.static('assets'));

// Página inicial (exibe HTML renderizado via EJS)
app.get('/', (req, res) => {
  const HomeController = require('./controllers/HomeController');
  HomeController.home(req, res);
});

// Rotas da API REST (prefixo /api)
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
