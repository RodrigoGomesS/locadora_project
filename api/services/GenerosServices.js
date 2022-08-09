const Services = require('./Services')
const database = require('../models')

class FilmesServices extends Services {
  constructor(){
    super('Generos')
    this.filmes = new Services('Filmes')
  }

}

module.exports = FilmesServices