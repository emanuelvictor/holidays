'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('holiday', {
      fields: ['day', 'month', 'region_code'],
      type: 'unique',
      name: 'day_month_region_unique_constraint'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('holiday', 'day_month_region_unique_constraint');
  }
};
