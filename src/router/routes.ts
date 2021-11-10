import { isLoggedIn } from 'src/models/login';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    beforeEnter: () => (isLoggedIn.value ? '/' : undefined),
    component: () => import('src/pages/login.vue'),
  },
  {
    path: '/',
    beforeEnter: () => (!isLoggedIn.value ? '/login' : undefined),
    component: () => import('src/layouts/main-layout.vue'),
    children: [
      { path: '', redirect: 'shades' },
      {
        path: 'shades',
        component: () => import('src/pages/windows-shades.vue'),
      },
      {
        path: 'locations',
        component: () => import('src/pages/locations.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/error404.vue'),
  },
];

export default routes;
