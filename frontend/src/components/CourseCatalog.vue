<template>
  <div>
    <router-link to="/catalog">Каталог</router-link>
    <ul>
      <li>Разработка</li>
      <li>Аналитика</li>
      <li>Тестирование</li>
    </ul>
  </div>
</template>

<script>
import axios from '../axios';
export default {
  name: 'CourseCatalog',
  data(){
    return {
 courses: [], // Добавьте массив для хранения данных каталога
    };
  },
 
async created() {
    try {
      const response = await axios.get('http://localhost:5000/api/catalog');
       this.courses = response.data; // Записываем данные каталога в массив 
      // Обработка данных каталога
    } catch (error) {
      console.error('Ошибка при загрузке каталога:', error);
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 18px;
  margin: 5px 0;
}
</style>
