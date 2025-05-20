const pool = require('../config/database');

// GET /api/categories
exports.listarCategorias = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories ORDER BY id ASC');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/categories
exports.criarCategoria = async (req, res) => {
  const { name } = req.body;
  const query = `
    INSERT INTO categories (name)
    VALUES ($1) RETURNING *`;

  try {
    const result = await pool.query(query, [name]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
