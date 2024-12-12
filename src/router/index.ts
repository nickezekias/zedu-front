import { createRouter, createWebHistory } from 'vue-router'
import GuestLayout from '@/layouts/guest/IndexLayout.vue'
import guest from './middleware/guest.middleware'
import auth from './middleware/auth.middleware'
import admin from './middleware/admin.middleware'
import middlewarePipeline from './middleware/middlewarePipeline'

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
        {
          path: 'login',
          name: 'account.login',
          component: () => import('@/app/features/account/login/IndexView.vue'),
        },
      ],
    },
    {
      path: '/admin',
      component: () => import('@/layouts/admin/IndexLayout.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'admin.dashboard',
          component: () => import('@/app/features/admin/dashboard/IndexView.vue'),
          meta: { middleware: [auth, admin] },
        },
        {
          path: 'students',
          name: 'admin.students.index',
          component: () => import('@/app/features/admin/student/presentation/IndexView.vue'),
          meta: { middleware: [auth, admin] },
        },
        {
          path: 'timetables',
          name: 'admin.timetables.index',
          component: () => import('@/app/features/admin/timetable/presentation/IndexView.vue'),
          meta: { middleware: [auth, admin] },
        },
      ],
    },
    {
      path: '/',
      component: () => import('@/layouts/admin/IndexLayout.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/app/features/parent/dashboard/IndexView.vue'),
          meta: { middleware: [auth, admin] },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/app/features/errors/presentation/NotFoundView.vue'),
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  const middleware: Array<Function> = to.meta.middleware as Array<Function>
  const context = { to, from, next }

  if (!middleware) {
    return next()
  }

  await middleware[0]({
    ...context,
    next: await middlewarePipeline(context, middleware, 1),
  })
})

export default router
