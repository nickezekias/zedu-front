import { useAccountStore } from '@/stores/account.store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function auth({ to, next }: any) {
  const accountStore = useAccountStore()
  const loginQuery = { path: '/login', query: { redirect: to.fullPath } }
  if (accountStore.isGuest()) {
    accountStore.clearAuthenticatedUser()
    next(loginQuery)
  } else {
    if (accountStore.user) {
      next()
    } else {
      try {
        await accountStore.getAuthenticatedUser()
      } catch (e) {
        console.error(e)
      }
      if (accountStore.user) {
        next()
      } else {
        next(loginQuery)
      }
    }
  }
}
