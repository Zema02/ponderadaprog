-- init-completo.sql

-- Limpar as tabelas (em ordem reversa dos relacionamentos)
DROP TABLE IF EXISTS tasks CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

-- Tabela de usuários
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de categorias
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

-- Tabela de tarefas
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  due_date DATE,
  status VARCHAR(50),
  user_id INTEGER REFERENCES users(id),
  category_id INTEGER REFERENCES categories(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP
);

-- Inserindo usuários de exemplo
INSERT INTO users (name, email, password) VALUES
  ('João da Silva', 'joao@example.com', 'senha123'),
  ('Maria Oliveira', 'maria@example.com', 'segredo456');

-- Inserindo categorias de exemplo
INSERT INTO categories (name) VALUES
  ('Trabalho'),
  ('Estudos'),
  ('Pessoal');

-- Inserindo tarefas de exemplo
INSERT INTO tasks (title, description, due_date, status, user_id, category_id) VALUES
  (
    'Finalizar relatório',
    'Escrever a seção de resultados da pesquisa',
    '2025-05-25',
    'em andamento',
    1,
    1
  ),
  (
    'Estudar Node.js',
    'Revisar rotas e middlewares para o projeto da faculdade',
    '2025-05-27',
    'pendente',
    1,
    2
  ),
  (
    'Comprar presente',
    'Lembrar de comprar um presente de aniversário para o Pedro',
    '2025-06-01',
    'pendente',
    2,
    3
  ),
  (
    'Revisar API REST',
    'Testar todos os endpoints no Thunder Client',
    '2025-05-30',
    'concluída',
    2,
    2
  );
