'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('holiday', {
      fields: ['year', 'month', 'region_id'],
      type: 'unique',
      name: 'year_month_region_unique_constraint'
    });
  },
  down: async (queryInterface, Sequelize) => {
  }
};
