<template>
  <header>
    <nav class="navbar">
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo">
      </div>
      <ul class="nav-links">
         <li><router-link to="/">Логотип</router-link></li>
        <li><router-link to="/catalog">Каталог</router-link></li>
        <li><input type="text" placeholder="Поиск"></li>
        <li class="language-select">
          <select>
            <option value="ru">Русский</option>
          </select>
        </li>
        <li class="auth-buttons">
          <button @click="login">Войти</button>
          <router-link to="/register">
            <button>Регистрация</button>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    login() {
      alert('Функция входа еще не реализована.');
    },
    register() {
      alert('Функция регистрации еще не реализована.');
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
}
.nav-links li {
  display: inline;
}
.nav-links a {
  color: white;
  text-decoration: none;
}
.auth-buttons button {
  margin-left: 10px;
}
</style>
