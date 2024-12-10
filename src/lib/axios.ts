// import { useAuthStore } from '@/stores/auth.store';
import Axios from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
  withXSRFToken: true,
})

axios.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    if (error.response && [401, 419].includes(error.response.status)) {
      /* const authStore = useAuthStore()
      await authStore.logout() */
    }
    return Promise.reject(error)
  },
)

export default axios
