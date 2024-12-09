import { useAccountStore } from '@/stores/account.store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function admin({ next }: any) {
  const accountStore = useAccountStore()
  if (accountStore.isAdmin()) {
    next()
  } else {
    next({ name: 'notFound' })
  }
}
