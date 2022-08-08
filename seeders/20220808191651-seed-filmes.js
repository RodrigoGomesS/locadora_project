'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Filmes', [
      {
      nome: 'Mortal Kombat',
      genero_id: 4,
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'I.T : A Coisa',
      genero_id: 1,
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Um amor para se recordar',
      genero_id: 3,
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Forrest Gump',
      genero_id: 2,
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  async down(queryInterface, Sequelize) {


    await queryInterface.bulkDelete('Filmes', null, {});

  }
};
