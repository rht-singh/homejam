'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  test.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.NUMBER,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    priority: DataTypes.STRING,
    type: DataTypes.STRING,
    source: DataTypes.STRING,
    requester_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'test',
  });
  return test;
};