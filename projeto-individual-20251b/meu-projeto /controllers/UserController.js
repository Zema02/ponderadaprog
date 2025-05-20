const pool = require('../config/database');

// GET /api/users
exports.listarUsuarios = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY id ASC');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/users
exports.criarUsuario = async (req, res) => {
  const { name, email, password } = req.body;
  const query = `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3) RETURNING *`;

  try {
    const result = await pool.query(query, [name, email, password]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
