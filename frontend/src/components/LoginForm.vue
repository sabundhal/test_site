<template>
  <div>
    <h2>Войти</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" v-model="password" required />
      </div>
      <div>
        <button type="submit">Войти</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from '../axios';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
     methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:5000/api/login', {
          email: this.email,
          password: this.password
        });
        localStorage.setItem('token', response.data.token);
        this.$router.push('/catalog');
      } catch (error) {
        this.error = 'Login failed: ' + (error.response?.data?.message || error.message);
      }
    }
  }
};
</script>

<style scoped>
/* Добавьте ваши стили здесь */
</style>
