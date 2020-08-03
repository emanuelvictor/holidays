'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('region', [
      {code: 12, name: 'AC', createdAt: new Date(), updatedAt: new Date()},
      {code: 27, name: 'AL', createdAt: new Date(), updatedAt: new Date()},
      {code: 16, name: 'AP', createdAt: new Date(), updatedAt: new Date()},
      {code: 13, name: 'AM', createdAt: new Date(), updatedAt: new Date()},
      {code: 29, name: 'BA', createdAt: new Date(), updatedAt: new Date()},
      {code: 23, name: 'CE', createdAt: new Date(), updatedAt: new Date()},
      {code: 53, name: 'DF', createdAt: new Date(), updatedAt: new Date()},
      {code: 32, name: 'ES', createdAt: new Date(), updatedAt: new Date()},
      {code: 52, name: 'GO', createdAt: new Date(), updatedAt: new Date()},
      {code: 21, name: 'MA', createdAt: new Date(), updatedAt: new Date()},
      {code: 51, name: 'MT', createdAt: new Date(), updatedAt: new Date()},
      {code: 50, name: 'MS', createdAt: new Date(), updatedAt: new Date()},
      {code: 31, name: 'MG', createdAt: new Date(), updatedAt: new Date()},
      {code: 15, name: 'PA', createdAt: new Date(), updatedAt: new Date()},
      {code: 25, name: 'PB', createdAt: new Date(), updatedAt: new Date()},
      {code: 41, name: 'PR', createdAt: new Date(), updatedAt: new Date()},
      {code: 26, name: 'PE', createdAt: new Date(), updatedAt: new Date()},
      {code: 22, name: 'PI', createdAt: new Date(), updatedAt: new Date()},
      {code: 33, name: 'RJ', createdAt: new Date(), updatedAt: new Date()},
      {code: 24, name: 'RN', createdAt: new Date(), updatedAt: new Date()},
      {code: 43, name: 'RS', createdAt: new Date(), updatedAt: new Date()},
      {code: 11, name: 'RO', createdAt: new Date(), updatedAt: new Date()},
      {code: 14, name: 'RR', createdAt: new Date(), updatedAt: new Date()},
      {code: 42, name: 'SC', createdAt: new Date(), updatedAt: new Date()},
      {code: 35, name: 'SP', createdAt: new Date(), updatedAt: new Date()},
      {code: 28, name: 'SE', createdAt: new Date(), updatedAt: new Date()},
      {code: 17, name: 'TO', createdAt: new Date(), updatedAt: new Date()}
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('region',  null, {});
  }
};
