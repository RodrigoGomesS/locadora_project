const Services = require('./Services')
const database = require('../models')

class FilmesServices extends Services {
  constructor() {
    super('Filmes')
    this.generos = new Services('Generos')
  }

  async buscaRegistrosComGenero() {
    return await database[this.nomeDoModelo].findAll({include: database[this.generos.nomeDoModelo]});
}

  async buscaFilmePorGenero(where = {}) {
    return await database[this.nomeDoModelo].findAll({ where: { ...where } })
  }

  async atualizaNome(name,id){
    return database[this.nomeDoModelo]
    .update({nome: name}, { where: { id: id } })
  }

}

module.exports = FilmesServices