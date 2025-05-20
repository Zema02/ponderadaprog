// migrations/migrate.js
const fs = require('fs');
const path = require('path');
const pool = require('../config/database');

const sql = fs.readFileSync(path.join(__dirname, 'init.sql')).toString();

pool.query(sql)
  .then(() => {
    console.log('Migração executada com sucesso!');
    pool.end();
  })
  .catch((err) => {
    console.error('Erro na migração:', err);
    pool.end();
  });
