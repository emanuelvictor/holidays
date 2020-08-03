'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('holiday', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      month: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      regionCode: {
        field: 'region_code',
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'region',
            schema: 'public'
          },
          key: 'code'
        },
        allowNull: false
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('holiday');
  }
};
