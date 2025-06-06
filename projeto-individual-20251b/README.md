# 📋 Sistema de Gerenciamento de Tarefas

Este projeto é uma aplicação web para gerenciamento de tarefas, construída com **Node.js**, **Express.js** e **EJS**, organizada com o padrão arquitetural **MVC**.

Usuários podem criar, editar, excluir e visualizar tarefas, que são categorizadas e associadas a responsáveis. O sistema inclui um backend funcional com API REST e visualização básica via EJS.

---

## 🐘 Requisitos

### ✅ 1. Instale o PostgreSQL

- Site oficial: https://www.postgresql.org/download/
- Lembre-se da senha usada na instalação (utilizada no `.env`)
- O banco será criado manualmente ou automaticamente via script SQL

---

## ⚙️ Como iniciar o projeto

### 1. Clone este repositório:

```bash
git clone <https://github.com/Zema02/ponderadaprog/tree/main>
cd projeto-individual-20251b
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Inicie o servidor:

```bash
npm start
```

Após executar estes comandos, você verá a mensagem:
```
Servidor rodando na porta 3000
Acesse: http://localhost:3000
```

Agora você pode acessar a aplicação no seu navegador através do endereço: [http://localhost:3000](http://localhost:3000)

---

## 📂 Estrutura de Pastas

```
projeto-individual-20251b/
├── controllers/          # Lógica da aplicação
├── routes/              # Rotas da API
├── views/               # Templates EJS
├── public/              # Arquivos estáticos (CSS, imagens)
├── img/                 # Imagens do projeto
├── server.js            # Inicialização do servidor
└── package.json         # Scripts e dependências
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