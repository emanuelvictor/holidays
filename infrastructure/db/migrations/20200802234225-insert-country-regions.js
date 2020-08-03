'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('region', [
      {code: 1, name: 'Brasil', createdAt: new Date(), updatedAt: new Date()}
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('region',  null, {});
  }
};
