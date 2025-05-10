# WAD - Web Application Development


# Introdução

Este projeto consiste em um sistema web para gerenciamento de tarefas, desenvolvido como parte da disciplina de Computação (COMP) utilizando o padrão arquitetural MVC (Model-View-Controller). A aplicação foi construída com Node.js, Express.js e EJS, e permite que usuários organizem tarefas por categoria, com controle de status e datas.

A estrutura do projeto foi organizada em pastas específicas para controle, modelos, rotas, configurações e visualizações, o que facilita a manutenção e a escalabilidade do sistema. Também foi elaborado um modelo relacional de banco de dados com três entidades principais: `users`, `tasks` e `categories`, relacionando-as por meio de chaves primárias e estrangeiras. O diagrama do banco e o script SQL correspondente estão disponíveis nos arquivos `modelo-banco.png` e `modelo-banco.sql`.

---

# Sistema de Gerenciamento de Tarefas

Aplicação web simples e funcional para controle de tarefas, construída com base no padrão MVC e tecnologias como Node.js, Express e EJS.

##  Estrutura de Pastas

- `config/`: arquivos de configuração do projeto
- `controllers/`: lógica de controle das rotas
- `models/`: estrutura dos dados da aplicação
- `routes/`: definição das rotas disponíveis
- `views/`: páginas HTML com EJS
- `assets/`, `scripts/`, `styles/`: arquivos públicos (estilo, imagens, JS)
- `tests/`: testes automatizados
- `server.js`: arquivo principal que inicia o servidor

## 🚀 Como executar o projeto localmente

1. Clone este repositório:

```bash
git clone <url-do-seu-repo>
cd meu-projeto
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
node server.js
```

4. Acesse:

http://localhost:3000


##  Modelo de Banco de Dados

- Arquivo `modelo-banco.sql`: script SQL
- Arquivos `modelo-banco.png` ou `modelo-banco.pdf`: diagrama relacional


##  Diagrama do Banco de Dados

![Diagrama Relacional do Banco de Dados](modelo-banco.png)

