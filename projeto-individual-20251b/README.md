# WAD - Web Application Development

# Introdução

Este projeto consiste em um sistema web para gerenciamento de tarefas, desenvolvido como parte da disciplina de Computação (COMP) utilizando o padrão arquitetural MVC (Model-View-Controller). A aplicação foi construída com Node.js, Express.js e EJS, e permite que usuários organizem tarefas por categoria, com controle de status e datas.

A estrutura do projeto foi organizada em pastas específicas para controle, modelos, rotas, configurações e visualizações, o que facilita a manutenção e a escalabilidade do sistema. Também foi elaborado um modelo relacional de banco de dados com três entidades principais: `users`, `tasks` e `categories`, relacionando-as por meio de chaves primárias e estrangeiras. O diagrama do banco e o script SQL correspondente estão disponíveis nos arquivos `modelo-banco.png` e `modelo-banco.sql`.

---

# Sistema de Gerenciamento de Tarefas

Aplicação web simples e funcional para controle de tarefas, construída com base no padrão MVC e tecnologias como Node.js, Express e EJS.

## Estrutura de Pastas

- `config/`: arquivos de configuração do projeto
- `controllers/`: lógica de controle das rotas
- `models/`: estrutura dos dados da aplicação
- `routes/`: definição das rotas disponíveis
- `views/`: páginas HTML com EJS
- `assets/`, `scripts/`, `styles/`: arquivos públicos (estilo, imagens, JS)
- `tests/`: testes automatizados
- `server.js`: arquivo principal que inicia o servidor
- `migrations/`: scripts de migração do banco de dados
- `api-testes.rest`: testes automatizados de endpoints com VSCode

## Como executar o projeto localmente

1. Clone este repositório:

```bash
git clone <url-do-seu-repo>
cd meu-projeto
```

2. Instale as dependências:

```bash
npm install
```

3. Crie o arquivo `.env` com suas configurações:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario_postgres
DB_PASSWORD=sua_senha
DB_NAME=tarefas_db
```
> ❗ **Importante:** o arquivo `.env` **não é versionado** (está no `.gitignore`).  
> Crie o seu `.env` localmente **com base no arquivo `.env.example`**, que está disponível no projeto.

4. Execute a migração do banco:

```bash
npm run migrate
```

5. Inicie o servidor:

```bash
npm start
```

6. Acesse:

- http://localhost:3000 — página inicial (EJS)
- http://localhost:3000/api/... — rotas da API REST

---

## Endpoints da API REST

### Tarefas (`/api/tarefas`)
- `GET /api/tarefas` — listar todas
- `POST /api/tarefas` — criar tarefa
- `PUT /api/tarefas/:id` — editar tarefa
- `DELETE /api/tarefas/:id` — excluir tarefa

### Usuários (`/api/users`)
- `GET /api/users` — listar todos
- `POST /api/users` — criar novo

### Categorias (`/api/categories`)
- `GET /api/categories` — listar todas
- `POST /api/categories` — criar nova

---

## Testes com REST Client

O projeto inclui o arquivo `api-testes.rest`, compatível com a extensão REST Client do VSCode. Com ele, você pode testar todos os endpoints da API diretamente no editor.

### Como usar:
1. Instale a extensão "REST Client" no VSCode
2. Abra o arquivo `api-testes.rest`
3. Clique em **"Send Request"** acima de cada requisição

---

## Modelo de Banco de Dados

- Arquivo `modelo-banco.sql`: script SQL
- Arquivo `modelo-banco.png`: diagrama relacional

### Diagrama:

![Diagrama Relacional do Banco de Dados](modelo-banco.png)

---

## Diagrama de Arquitetura MVC

- Arquivo: `mvc-arquitetura.png`

O sistema foi construído seguindo o padrão Model-View-Controller:

- **Model**: SQL via `pg` para acessar PostgreSQL
- **View**: Página inicial com EJS (renderizada via `/`)
- **Controller**: Arquivos que processam a lógica e realizam queries
- **Rotas**: Interligam os controladores aos endpoints REST (`/api/...`)

---

## Autor

Giacomo  Zema Matizonkas — Projeto acadêmico desenvolvido para a disciplina de Web Application Development (WAD) no módulo 1B.

