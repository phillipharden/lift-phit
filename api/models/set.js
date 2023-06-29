'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Set.belongsTo(models.Exercise)
    }
  }
  Set.init({
    setnumber: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    reps: DataTypes.INTEGER,
    exerciseid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Set',
  });
  return Set;
};