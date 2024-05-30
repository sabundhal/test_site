// frontend/src/components/RegisterForm.vue
<template>
  <div>
    <form @submit.prevent="register">
      <input v-model="name" placeholder="Имя" required>
      <input v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Пароль" required>
      <label>
        <input type="checkbox" v-model="consent" required>
        Я разрешаю обрабатывать мои персональные данные
      </label>
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      consent: false,
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://localhost:5000/api/register', {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        alert('Регистрация успешна: ' + response.data.user.name);
      } catch (error) {
        console.error(error);
        alert('Ошибка при регистрации');
      }
    },
  },
};
</script>