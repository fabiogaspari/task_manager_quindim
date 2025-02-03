import axios from 'axios'
import { useAuthStore } from '@/stores/authStore'
import router from '@/router'

const BASE_URL = import.meta.env.VITE_BASE_URL

const api = axios.create({
  baseURL: BASE_URL,
})

api.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore()

    const token = authStore.token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      config.headers['Content-Type'] = 'application/json'
    }
    return config
  },
  (error) => Promise.reject(error),
)

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const authStore = useAuthStore()

    if (error.response && error.response.status === 401) {
      console.warn('Token expirado ou inválido.')
      authStore.logout()
      router.push({ name: 'login' })
    }

    return Promise.reject(error)
  },
)

export default api
