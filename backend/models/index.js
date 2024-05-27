const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const UserModel = require('./User'); // Путь к модели пользователя
// Импортируйте остальные модели, если они есть

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = UserModel; // Добавьте модель пользователя в объект db
// Добавьте другие модели, если они есть

module.exports = db;
