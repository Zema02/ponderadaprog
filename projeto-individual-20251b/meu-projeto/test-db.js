// test-db.js
const pool = require('./config/database');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err);
  } else {
    console.log('Conexão bem-sucedida:', res.rows[0]);
  }
  pool.end();
});
