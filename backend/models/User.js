// backend/models/User.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');

const User = db.define('User', {
  // Первичный ключ автоматически инкрементируется
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Убедитесь, что поле email уникально
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
});

module.exports = User;
