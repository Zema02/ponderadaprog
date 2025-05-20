require('dotenv').config();
const fs = require('fs');
const path = require('path');
const pool = require('../config/database');

// Lê o conteúdo do arquivo SQL completo
const sql = fs.readFileSync(path.join(__dirname, 'init-completo.sql')).toString();

// Executa os comandos no banco
pool.query(sql)
  .then(() => {
    console.log('✅ Banco de dados criado com dados de exemplo!');
    pool.end();
  })
  .catch((err) => {
    console.error('❌ Erro ao executar migração completa:', err.message);
    pool.end();
  });
