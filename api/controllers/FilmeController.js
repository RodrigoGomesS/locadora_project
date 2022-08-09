const { FilmesServices } = require('../services')
const filmesServices = new FilmesServices()

class FilmeController {

    static inicial(req, res) {
        try {
            return res.status(200).send('Bem vindo a Locadora');
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    static async buscarFilmes(req, res) {
        try {
            const filmes = await filmesServices.buscaRegistrosComGenero();
            return res.status(200).json(filmes);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    static async buscarFilmesGeneros(req, res) {
        const { generoId } = req.params;
        try {
            const filmes = await filmesServices.buscaFilmePorGenero({ genero_id: new Number(generoId) })
            return res.status(200).json(filmes);
        } catch (error) {
            return res.status(500).send(error);
        }

    }

    static async cadastrarFilme(req, res){
        const novoFilme = req.body;
        try {
            const filme = await filmesServices.criaRegistro(novoFilme)
            return res.status(200).json(filme);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async atualizaNomeFilme(req, res) {
        const { filmeId } = req.params
        const { nome } = req.body
        try {
            await filmesServices.atualizaNome(nome, new Number(filmeId));
            return res.status(200).json({ mensagem: 'Filme atualizado' });
        } catch (error) {
            return res.status(500).send(error);
        }

    }

    static async apagaFilme(req, res) {
        const { filmeId } = req.params
        try {
            await filmesServices.apagaRegistro(Number(filmeId))
            return res.status(200).json({ mensagem: `Filme deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async teste(req, res) {
        try {
            const tasks = await filmesServices.buscaNomeInclude();
            return res.status(200).json(tasks)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = FilmeController;