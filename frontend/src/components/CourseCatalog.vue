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
export default {
  name: 'CourseCatalog',
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
