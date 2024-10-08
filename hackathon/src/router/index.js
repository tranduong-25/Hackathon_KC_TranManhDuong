import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import ManagerProduct from '../views/ManagerProduct.vue';
import ManagerCategory from '../views/ManagerCategory.vue';

const routes = [
  {
    path: '/admin',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/admin/manager-product',
    name: 'ManagerProduct',
    component: ManagerProduct,
  },
  {
    path: '/admin/manager-category',
    name: 'ManagerCategory',
    component: ManagerCategory,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/admin'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
