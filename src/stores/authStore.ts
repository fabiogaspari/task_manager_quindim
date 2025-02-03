import { defineStore } from 'pinia'
import AuthService from '@/services/AuthService'
import type LoginPayload from '@/models/payloads/LoginPayload'
import type UserResponse from '@/models/responses/UserResponse'
import { ref } from 'vue'
import { jwtDecode } from 'jwt-decode'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref<UserResponse | null>(null)
    const token = ref<string | null>()
    const isAuthenticated = ref<boolean>(!!token.value)

    async function login(payload: LoginPayload): Promise<boolean> {
      try {
        const axiosResponse = await AuthService.login(payload)
        if (axiosResponse.status == 200) {
          const response = axiosResponse.data
          user.value = response.user
          token.value = response.token
          isAuthenticated.value = true
          return true
        } else {
          return false
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error)
        throw error
      }
    }

    function logout() {
      try {
        AuthService.logout()
        user.value = null
        token.value = null
        isAuthenticated.value = false
      } catch (error) {
        console.error('Erro ao fazer login:', error)
        throw error
      }
    }

    const isTokenExpired = () => {
      if (!token.value) return true
      try {
        const decodedToken = jwtDecode(token.value)
        const exp = decodedToken.exp ?? 10
        return Date.now() >= exp * 1000
      } catch (e) {
        return true
      }
    }

    return { user, token, isAuthenticated, isTokenExpired, login, logout }
  },
  { persist: true },
)
