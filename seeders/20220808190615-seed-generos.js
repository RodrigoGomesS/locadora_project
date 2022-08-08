'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Generos', [
      {
        nome: 'Terror',
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Comédia',
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Romance',
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ação',
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Generos', null, {});

  }
};
