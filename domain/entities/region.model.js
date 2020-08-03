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
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    upperRegionId: {
      field: 'upper_region_id',
      type: DataTypes.INTEGER,
      references: {
        model: Region,
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Region',
    tableName: 'region'
  });
  return Region;
};
