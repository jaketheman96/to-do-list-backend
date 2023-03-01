'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks', {
      id: Sequelize.INTEGER,
      description: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATEONLY,
        field: 'created_at'
      },
      done: Sequelize.BOOLEAN,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('tasks');
  }
};
