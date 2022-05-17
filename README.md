<h1 align="center">Desafio Growth Hackers - Backend</h1>

<p align="center">Este projeto é uma API de cadastro, importação e exportação de produtos.</p>

Índice
=================
<!--ts-->
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
   * [Features](#features)
   * [Tecnologias](#tecnologias)
<!--te-->


<h2 id="instalacao">Instalação</h2>

### Clone este repositório
```
$ git clone https://github.com/gusthavosantana/desafio-growthhackers-backend.git
```
### Acesse a pasta do projeto
```
$ cd desafio-growthhackers-backend
```

### Instale as dependências
```
$ yarn
```

### Crie a base de dados
```
$ npx sequelize-cli db:create
```

### Crie as tabelas da base de dados
```
$ npx sequelize-cli db:migrate
```

<h2 id="como-usar">Como usar</h2>

### Faça o build da aplicação
```
$ yarn build
```
### Inicie o servidor
```
$ yarn start
```

### Acesse a aplicação
Os endpoints disponíveis para a aplicação deve ter a seguinte url como perfixo: `http://localhost:PORT/api`. Se a variável de ambiente PORT for igual a 3001 o endereço será: http://localhost:3001/api.

### API Documentation (Swagger)
Acesse a documentação no endereço: `http://localhost:PORT/api/explorer`.Se a variável de ambiente PORT for igual a 3001 use `http://localhost:3001/api/explorer`.

<h2 id="features">Features</h2>

- [x] Listar categorias
- [x] Cadastrar categorias
- [x] Atualizar categorias
- [x] Excluir categorias
- [x] List produtos
- [x] Cadastrar produtos
- [x] Atualizar produtos
- [x] Excluir produtos
- [x] Importar produtos para uma categoria
- [x] Exportar produtos de uma categoria

<h2 id="tecnologias">🛠 Tecnologias</h2>

As seguintes ferramentas foram usadas para construir este projeto:

- [Node.js](https://nodejs.org/en/)
- [Nestjs](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org/)