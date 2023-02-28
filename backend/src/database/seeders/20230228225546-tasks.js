'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Task', [
      {
        id: 1,
        description: 'Fazer o almoço.',
        createdAt: new Date(),
        done: false,
      },
      {
        id: 2,
        description: 'Andar de skate.',
        createdAt: new Date(),
        done: false,
      },
      {
        id: 3,
        description: 'Pegar umas ondas!',
        createdAt: new Date(),
        done: false,
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Task', null, {});
  }
};
