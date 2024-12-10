import { createRouter, createWebHistory } from 'vue-router'
import GuestLayout from '@/layouts/guest/IndexLayout.vue'
import guest from './middleware/guest.middleware'
import auth from './middleware/auth.middleware'
import admin from './middleware/admin.middleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: GuestLayout,
      meta: { middleware: [guest] },
      children: [
        {
          path: 'register',
          name: 'account.register',
          component: () => import('@/app/features/account/register/IndexView.vue'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('@/layouts/admin/IndexLayout.vue'),
      meta: { middleware: [auth, admin] },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/app/features/dashboard/IndexView.vue'),
        },
      ],
    },
  ],
})

export default router
