const bcrypt = require('bcrypt');
const User = require('./models/User');

(async () => {
  const hashedPassword = await bcrypt.hash('qwerty1', 10);

  try {
    const user = await User.create({
      name: 'Test User',
      email: 'test@example.com',
      password: hashedPassword
    });
    console.log('Пользователь создан:', user);
  } catch (error) {
    console.error('Ошибка создания пользователя:', error);
  }
})();