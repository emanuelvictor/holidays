'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('region', [
      {code: 12, name: 'AC', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 27, name: 'AL', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 16, name: 'AP', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 13, name: 'AM', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 29, name: 'BA', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 23, name: 'CE', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 53, name: 'DF', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 32, name: 'ES', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 52, name: 'GO', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 21, name: 'MA', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 51, name: 'MT', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 50, name: 'MS', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 31, name: 'MG', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 15, name: 'PA', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 25, name: 'PB', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 41, name: 'PR', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 26, name: 'PE', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 22, name: 'PI', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 33, name: 'RJ', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 24, name: 'RN', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 43, name: 'RS', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 11, name: 'RO', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 14, name: 'RR', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 42, name: 'SC', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 35, name: 'SP', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 28, name: 'SE', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1},
      {code: 17, name: 'TO', createdAt: new Date(), updatedAt: new Date(), upper_region_code: 1}
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('region', null, {});
  }
};
