'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('holiday', [
      {
        day: 1,
        month: 1,
        name: "Ano Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      },
      {
        day: 21,
        month: 4,
        name: "Tiradentes",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      },
      {
        day: 1,
        month: 5,
        name: "Dia do Trabalhador",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      },
      {
        day: 7,
        month: 9,
        name: "Independência",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      },
      {
        day: 12,
        month: 10,
        name: "Nossa Senhora Aparecida",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      },
      {
        day: 2,
        month: 11,
        name: "Finados",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      },
      {
        day: 15,
        month: 11,
        name: "Proclamação da República",
        createdAt: new Date(),
        updatedAt: new Date(),
        region_code: 1
      },
      {
        day: 25,
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
