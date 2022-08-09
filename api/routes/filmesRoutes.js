const { Router } = require('express');
const FilmeController = require('../controllers/FilmeController');

const router = Router();

router
    .get('/', FilmeController.inicial)
    .get('/filmes', FilmeController.buscarFilmes)
    .get('/filmes/:generoId', FilmeController.buscarFilmesGeneros)
    .post('/filmes', FilmeController.cadastrarFilme)
    .put('/filmes/:filmeId', FilmeController.atualizaNomeFilme)
    .delete('/filmes/:filmeId', FilmeController.apagaFilme)
    

module.exports = router