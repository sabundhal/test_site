<!-- src/components/RegistrationForm.vue -->
<template>
  <div class="registration-form">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="name">Имя</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <input type="checkbox" id="consent" v-model="consent" required>
        <label for="consent">Я разрешаю обрабатывать мои персональные данные</label>
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      consent: false
    };
  },
  methods: {
    register() {
      // Проверка согласия
      if (this.consent) {
        // Здесь можно добавить логику для регистрации, например, отправку данных на сервер
        alert('Регистрация успешна: ' + this.name + ', ' + this.email);
      } else {
        alert('Вы должны согласиться на обработку персональных данных');
      }
    }
  }
};
</script>

<style scoped>
.registration-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.form-group input[type="checkbox"] {
  margin-right: 10px;
}
button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
