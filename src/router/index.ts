import { createRouter, createWebHistory } from 'vue-router'
import GuestLayout from '@/layouts/guest/IndexLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: GuestLayout,
      children: [
        {
          path: 'register',
          name: 'account.register',
          component: () => import('@/app/features/account/register/IndexView.vue'),
        },
      ],
    },
  ],
})

export default router
