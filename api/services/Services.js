const database = require('../models');

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo;
    }

    async buscaRegistros() {
        return await database[this.nomeDoModelo].findAll();
    }

    async criaRegistro(dados) {
        return database[this.nomeDoModelo].create(dados)
    }

    async apagaRegistro(id) {
        return database[this.nomeDoModelo].destroy({ where: { id: id } })
    }
}

module.exports = Services;