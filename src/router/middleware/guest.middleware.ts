import { useAccountStore } from '@/stores/account.store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function guest({ next }: any) {
  const authStore = useAccountStore()
  if (!authStore.isGuest() && !authStore.user) {
    try {
      await authStore.getAuthenticatedUser()
    } catch (e) {
      console.error(e)
    }
    if (authStore.user) {
      next({ name: 'dashboard' })
    } else {
      authStore.clearAuthenticatedUser()
      next()
    }
  } else {
    next()
  }
}
