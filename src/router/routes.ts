import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
   {
      path: '/',
      component: () => { return import('layouts/MainLayout.vue'); },
      children: [ { path: '', component: () => { return import('pages/Index.vue'); } } ],
   },

   // Always leave this as last one,
   // but you can also remove it
   {
      path: '/:catchAll(.*)*',
      component: () => { return import('pages/Error404.vue'); },
   },
];

export default routes;
