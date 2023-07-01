'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Exercise.belongsTo(models.Workout, { onDelete: 'CASCADE' });
      models.Exercise.hasMany(models.Set, { onDelete: 'CASCADE' });
    }
  }
  Exercise.init({
    exercisename: DataTypes.STRING,
    workoutid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Exercise',
  });
  return Exercise;
};