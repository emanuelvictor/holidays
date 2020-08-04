const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Region.init({
    code: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    carnival: {
      type: DataTypes.BOOLEAN
    },
    corpusChristi: {
      field: 'corpus_christi',
      type: DataTypes.BOOLEAN
    },
    upperRegionCode: {
      field: 'upper_region_code',
      type: DataTypes.INTEGER,
      references: {
        model: Region,
        key: 'code'
      }
    },
  }, {
    sequelize,
    modelName: 'Region',
    tableName: 'region'
  });
  return Region;
};
