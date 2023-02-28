'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Task', {
      id: Sequelize.INTEGER,
      description: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      done: Sequelize.BOOLEAN,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Task');
  }
};
