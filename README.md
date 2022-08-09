# Projeto Locadora
Utilizando o ORM Sequelize.js para criar uma API que cadastra, atualiza, deleta e busca filmes.

## Inicia a API local:
 Baixe o projeto e crie um novo banco de dados com o nome "locadora_project".
 No arquivo config.json dentro da pasta config, substitua o parametro de
 "password" pela senha do seu banco, o parametro de database por "locadora_project",
 caso o nome do usuario padrão não seja "root", subtitua pelo o seu username.

Abra o projeto no terminal e execute os comandos:

* Instalar dependencias: npm install
* Rodar as migrations: npx sequelize-cli db:migrate
* Rodar os seeds: npx sequelize-cli db:seed:all
* Iniciar o server local: npm start

## Endpoints:

### Mensagem de Bem vindo
* **Endpoint:** http://localhost:3000
* **MÉTODO:** GET

### Busca filmes
* **Endpoint:** http://localhost:3000/filmes
* **MÉTODO:** GET

### Busca filmes por genêro
* **Endpoint:** http://localhost:3000/filmes/:generoId
* **MÉTODO:** GET

**Aviso:** No lugar de ":generoId", passar o id do genêro

### Criar filme
* **Endpoint:** http://localhost:3000/filmes
* **MÉTODO:** POST

**Aviso:** No corpo da requisição, passar um json com os parametros nome e genero_id,
           nome de filmes não pode ser recadastrado.

    Exemplo:

    {
        "nome": "Nome do filme",
        "genero_id": 2
    }

### Atualizar nome do filme

* **Endpoint:** http://localhost:3000/filmes/:filmeId
* **MÉTODO:** PUT

**Aviso:** No endpoint ":filmeId" deve ser substituido pelo id do filme que vai ser atualizado.
           No corpo da requisição, passar um json com o parametro nome,
           nome de filmes não pode ser recadastrado.

    Exemplo:

    {
        "nome": "Nome do filme"
    }

 ### Deletar filme

* **Endpoint:** http://localhost:3000/filmes/:filmeId
* **MÉTODO:** DELETE

**Aviso:** No endpoint ":filmeId" deve ser substituido pelo id do filme que vai ser deletado.

## Status: Concluído.
