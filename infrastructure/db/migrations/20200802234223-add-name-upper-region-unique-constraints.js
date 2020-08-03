'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('region', {
      fields: ['name', 'upper_region_code'],
      type: 'unique',
      name: 'name_upper_region_code_unique_constraint'
    });
  },
  down: async (queryInterface, Sequelize) => {
  }
};
