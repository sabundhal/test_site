const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User.js'); // Импорт модели User
const auth = require('../middleware/auth');
const { JWT_SECRET } = process.env;


// Add your routes here
// Маршрут для регистрации
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Все поля обязательны' });
    }

    try {
      // Хеширование пароля перед сохранением
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Оригинальный пароль:', password);
    console.log('Хешированный пароль:', hashedPassword);
     // Вывод для отладки
     console.log('Перед сохранением пользователя:', {
      name: name,
      email: email,
      password: hashedPassword
    });

    const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword
    });
      res.status(201).json({ message: 'Регистрация успешна', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при регистрации' });
    }
  });

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email и пароль обязательны' });
    }

    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ error: 'Пользователь не найден' });
      }
   console.log('Хешированный пароль в БД:', user.password);
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ error: 'Неправильный пароль' });
      }
  
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при входе' });
    }
  });

  router.get('/catalog', auth, async (req, res) => {
    // Ваш код для получения данных каталога
    res.json({ message: 'Доступ к каталогу' });
  });
  



module.exports = router;
