const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
// Подключение к базе данных
const sequelize = require('./config/database');
// Подключение модели пользователя
const User = require('./models/User');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

const db = require('./models');
db.sequelize.sync().then(() => {
    console.log("Database synchronized");
}).catch(err => {
    console.error("Failed to synchronize database:", err);
});

// Синхронизация модели с базой данных
User.sync({ force: true })
  .then(() => {
    console.log('Таблица пользователей создана');
    // Запуск сервера
    app.listen(PORT, () => {
      console.log(`Сервер работает на порту ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Ошибка при создании таблицы пользователей:', error);
  });
  
module.exports = app;