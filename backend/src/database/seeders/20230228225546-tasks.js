'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('tasks', [
      {
        id: 1,
        description: 'Fazer o almoço.',
        created_at: new Date(),
        done: false,
      },
      {
        id: 2,
        description: 'Andar de skate.',
        created_at: new Date(),
        done: false,
      },
      {
        id: 3,
        description: 'Pegar umas ondas!',
        created_at: new Date(),
        done: false,
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
