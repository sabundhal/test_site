import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CourseCatalog from '../components/CourseCatalog.vue';
import RegistrationForm from '../components/RegistrationForm.vue';
import LoginForm from '../components/LoginForm.vue';

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
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'RegistrationForm',
    component: RegistrationForm,
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = !!localStorage.getItem('token');

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
