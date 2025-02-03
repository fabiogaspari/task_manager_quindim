import type User from '@/models/User'
import type LoginPayload from '@/models/payloads/LoginPayload'
import type LoginResponse from '@/models/responses/LoginResponse'
import api from '@/services/api'
import router from '@/router'
import type { AxiosResponse } from 'axios'
import type DefaultResponse from '@/models/responses/DefaultResponse'

export default class AuthService {
  static async login(userData: LoginPayload): Promise<AxiosResponse<LoginResponse, any>> {
    try {
      const response = await api.post<LoginResponse>('/auth/users/login', userData)
      return response
    } catch (error) {
      console.error('Erro ao realizar o login:', error)
      throw error
    }
  }

  static async register(userData: User): Promise<User> {
    try {
      const response = await api.post<User>('/', userData)
      return response.data
    } catch (error) {
      console.error('Erro ao registrar usuário:', error)
      throw error
    }
  }

  static async logout(): Promise<void> {
    try {
      await api.delete<DefaultResponse>('/auth/users/logout')
      localStorage.removeItem('token')
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error)
      throw error
    }
  }

  static async getToken(): Promise<String | null> {
    if (!localStorage.getItem('token')) {
      router.push({ name: 'login' })
    }
    return localStorage.getItem('token')
  }
}
