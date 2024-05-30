// backend/index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const app = require('./app');  // Подключаем app.js если он существует



// Загружаем переменные окружения из .env файла
dotenv.config();

// Настройки подключения к PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});




// Запуск сервера
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Сервер работает на http://localhost:${port}`);
});


