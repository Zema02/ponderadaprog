# 📋 Sistema de Gerenciamento de Tarefas

Este projeto é uma aplicação web para gerenciamento de tarefas, construída com **Node.js**, **Express.js**, **EJS** e banco de dados **PostgreSQL**, organizada com o padrão arquitetural **MVC**.

Usuários podem criar, editar, excluir e visualizar tarefas, que são categorizadas e associadas a responsáveis. O sistema inclui um backend funcional com API REST e visualização básica via EJS.

---

## 🐘 Requisitos

### ✅ 1. Instale o PostgreSQL

- Site oficial: https://www.postgresql.org/download/
- Lembre-se da senha usada na instalação (utilizada no `.env`)
- O banco será criado manualmente ou automaticamente via script SQL

---

## ⚙️ Configuração inicial

### 1. Clone este repositório:

```bash
git clone <url-do-seu-repo>
cd meu-projeto
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Crie o banco de dados `tarefas_db` no pgAdmin ou via terminal:

```sql
CREATE DATABASE tarefas_db;
```

---

### 4. Configure o arquivo `.env`

> O projeto já inclui um `.env` preenchido para facilitar testes locais:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=1234
DB_NAME=tarefas_db
```

⚠️ Este `.env` usa uma senha genérica apenas para fins acadêmicos e deve ser alterado em ambientes reais.

---

## 🚀 Comandos disponíveis

| Comando                   | Descrição                                                                 |
|---------------------------|---------------------------------------------------------------------------|
| `npm start`               | Inicia o servidor na porta 3000                                           |
| `npm run migrate`         | Executa migração básica (`init.sql`)                                      |
| `npm run migrate-full`    | Executa migração completa com estrutura + dados (`init-completo.sql`)     |
| `npm run seed`            | (Opcional) Popula dados usando script JS (`seed.js`)                      |

---

## 🔁 Como rodar o projeto localmente (modo completo)

1. Rode o comando abaixo para criar estrutura + dados de exemplo:

```bash
npm run migrate-full
```

2. Inicie o servidor:

```bash
npm start
```

3. Acesse no navegador:

- Página inicial: [http://localhost:3000](http://localhost:3000)
- API REST: [http://localhost:3000/api/tarefas](http://localhost:3000/api/tarefas)

---

## 📂 Estrutura de Pastas

```
meu-projeto/
├── config/               # Conexão com o PostgreSQL
├── controllers/          # Lógica da aplicação
├── migrations/           # Scripts SQL e migradores
├── models/               # (Opcional) Representações dos dados
├── routes/               # Rotas da API
├── views/                # Página inicial com EJS
├── assets/               # CSS e imagens
├── api-testes.rest       # Testes REST para VSCode
├── .env                  # Configuração local (incluído para facilitar testes)
├── server.js             # Inicialização do servidor
└── package.json          # Scripts e dependências
```

---

## 📡 Endpoints da API

### 🔨 Tarefas `/api/tarefas`
- `GET` → Listar tarefas
- `POST` → Criar tarefa
- `PUT /:id` → Editar tarefa
- `DELETE /:id` → Excluir tarefa

### 👤 Usuários `/api/users`
- `GET` → Listar usuários
- `POST` → Criar usuário

### 🗂 Categorias `/api/categories`
- `GET` → Listar categorias
- `POST` → Criar categoria

---

## 🧪 Testes com REST Client

O projeto inclui um arquivo `api-testes.rest`, que pode ser utilizado com a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) no VSCode.

### Como usar:
1. Instale a extensão REST Client no VSCode
2. Abra `api-testes.rest`
3. Clique em "Send Request" sobre qualquer requisição

---

## 🧱 Diagrama do Banco de Dados

Arquivo: `modelo-banco.png`

![Diagrama Relacional](modelo-banco.png)

---

## 🧩 Diagrama de Arquitetura MVC

Arquivo: `mvc-arquitetura.png`

![Diagrama MVC](mvc-arquitetura.png)

---

## 👨‍💻 Autor

Giacomo Matizonkas Zema  
Projeto acadêmico desenvolvido para a disciplina de **Web Application Development** (Módulo 1B, 2025) no **Inteli – Instituto de Tecnologia e Liderança**.