const pool = require('../config/database');

// Criar nova tarefa
exports.criarTarefa = async (req, res) => {
  const { title, description, due_date, status, user_id, category_id } = req.body;

  const query = `
    INSERT INTO tasks (title, description, due_date, status, user_id, category_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`;
  const values = [title, description, due_date, status, user_id, category_id];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar tarefas
exports.listarTarefas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar tarefa
exports.editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { title, description, due_date, status, user_id, category_id } = req.body;

  const query = `
    UPDATE tasks SET 
      title = $1,
      description = $2,
      due_date = $3,
      status = $4,
      user_id = $5,
      category_id = $6,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $7 RETURNING *`;

  const values = [title, description, due_date, status, user_id, category_id, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir tarefa
exports.excluirTarefa = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
