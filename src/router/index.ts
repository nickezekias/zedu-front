import { createRouter, createWebHistory } from 'vue-router'
import GuestLayout from '@/layouts/guest/IndexLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: GuestLayout,
    },
  ],
})

export default router
