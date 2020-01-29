import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home.vue'),
    },
    {
      path: '/*',
      name: 'not-found',
      component: () => import('./pages/NotFound.vue'),
    },
  ],
});

export default router;
