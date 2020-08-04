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
      day: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: { min: 1, max: 31 }
      },
      month: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: { min: 1, max: 12 },
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
