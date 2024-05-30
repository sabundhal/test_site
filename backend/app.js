const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
// Подключение к базе данных
const User = require('./models/User');
const sequelize = require('./config/database');


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

const PORT = process.env.PORT || 5000;
// Синхронизация модели с базой данных
User.sync({ alter: true })
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