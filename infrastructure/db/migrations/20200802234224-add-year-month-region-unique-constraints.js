'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('holiday', {
      fields: ['year', 'month', 'region_code'],
      type: 'unique',
      name: 'year_month_region_unique_constraint'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('holiday', 'year_month_region_unique_constraint');
  }
};
