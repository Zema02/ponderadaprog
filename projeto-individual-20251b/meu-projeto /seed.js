require('dotenv').config();
const pool = require('./config/database');

async function seedDatabase() {
  try {
    // Inserir usuário se não existir
    const checkUser = await pool.query("SELECT * FROM users WHERE id = 1");
    if (checkUser.rows.length === 0) {
      await pool.query(`
        INSERT INTO users (name, email, password, created_at)
        VALUES ('João', 'joao@example.com', 'senha456', CURRENT_TIMESTAMP)
      `);
      console.log('Usuário inserido.');
    } else {
      console.log('Usuário já existe.');
    }

    // Inserir categoria se não existir
    const checkCategory = await pool.query("SELECT * FROM categories WHERE id = 1");
    if (checkCategory.rows.length === 0) {
      await pool.query(`
        INSERT INTO categories (name)
        VALUES ('Estudos')
      `);
      console.log('Categoria inserida.');
    } else {
      console.log('Categoria já existe.');
    }

    // (Opcional) Inserir uma tarefa de exemplo
    const checkTask = await pool.query("SELECT * FROM tasks WHERE title = 'Tarefa Exemplo'");
    if (checkTask.rows.length === 0) {
      await pool.query(`
        INSERT INTO tasks (title, description, due_date, status, user_id, category_id, created_at)
        VALUES (
          'Tarefa Exemplo',
          'Descrição da tarefa inicial',
          '2025-06-01',
          'pendente',
          1,
          1,
          CURRENT_TIMESTAMP
        )
      `);
      console.log('Tarefa de exemplo inserida.');
    } else {
      console.log('Tarefa já existe.');
    }

    console.log('✅ População concluída com sucesso!');
  } catch (err) {
    console.error('Erro ao popular o banco:', err.message);
  } finally {
    await pool.end();
  }
}

seedDatabase();
