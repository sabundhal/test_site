import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CourseCatalog from '../components/CourseCatalog.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/catalog',
    name: 'CourseCatalog',
    component: CourseCatalog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
