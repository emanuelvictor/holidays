'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('region', {
      code: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      carnival: {
        type: Sequelize.BOOLEAN
      },
      corpus_christi: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      upperRegionCode: {
        field: 'upper_region_code',
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'region',
            schema: 'public'
          },
          key: 'code'
        },
        allowNull: true
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('region');
  }
};
