'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Users.init({
    DS_QRCODE: DataTypes.STRING,
    DT_VISITA: DataTypes.DATE,
    DS_SALA: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};