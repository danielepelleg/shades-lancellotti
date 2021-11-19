import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/main-layout.vue'),
    children: [{ path: '', component: () => import('src/pages/index.vue') }],
  },
  {
    path: '/temperatures',
    component: () => import('src/layouts/main-layout.vue'),
    children: [{ path: '', component: () => import('src/pages/temperatures.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/error404.vue'),
  },
];

export default routes;
