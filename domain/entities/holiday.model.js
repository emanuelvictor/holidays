const {
  Region
} = require('./region.model');

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Holiday extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Holiday.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    year: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 9999 }
    },
    month: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 31 },
    },
    regionCode: {
      field: 'region_code',
      type: DataTypes.INTEGER,
      references: {
        model: 'region',
        key: 'code'
      },
    },
  }, {
    sequelize,
    modelName: 'Holiday',
    tableName: 'holiday'
  });

  return Holiday;
};
