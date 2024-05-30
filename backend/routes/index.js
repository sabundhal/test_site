const express = require('express');
const router = express.Router();
const User = require('../models/User.js'); // Импорт модели User

// Add your routes here
// Маршрут для регистрации
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const user = await User.create({ name, email, password });
      res.status(201).json({ message: 'Регистрация успешна', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при регистрации' });
    }
  });



module.exports = router;
