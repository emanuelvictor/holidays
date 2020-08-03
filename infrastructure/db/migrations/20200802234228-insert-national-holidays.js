'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('holiday', [
      {
        year: 1,
        month: 1,
        name: "Ano Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      },
      {
        year: 21,
        month: 4,
        name: "Tiradentes",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      },
      {
        year: 1,
        month: 5,
        name: "Dia do Trabalhador",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      },
      {
        year: 7,
        month: 9,
        name: "Independência",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      },
      {
        year: 12,
        month: 10,
        name: "Nossa Senhora Aparecida",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      },
      {
        year: 2,
        month: 11,
        name: "Finados",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      },
      {
        year: 15,
        month: 11,
        name: "Proclamação da República",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      },
      {
        year: 25,
        month: 12,
        name: "Natal",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('region', null, {});
  }
};
