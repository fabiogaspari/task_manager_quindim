import api from '@/services/api'
import type User from '@/models/User'

export default class UserService {
  static async getUserById(userId: string): Promise<User> {
    try {
      const response = await api.get<User>(`/users/${userId}`)
      return response.data
    } catch (error) {
      console.error('Erro ao buscar usuário:', error)
      throw error
    }
  }

  static async createUser(userData: Partial<User>): Promise<User> {
    try {
      const response = await api.post<User>('/users', userData)
      return response.data
    } catch (error) {
      console.error('Erro ao criar usuário:', error)
      throw error
    }
  }

  static async updateUser(userId: string, userData: Partial<User>): Promise<User> {
    try {
      const response = await api.put<User>(`/users/${userId}`, userData)
      return response.data
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error)
      throw error
    }
  }

  static async deleteUser(userId: string): Promise<void> {
    try {
      await api.delete(`/users/${userId}`)
    } catch (error) {
      console.error('Erro ao excluir usuário:', error)
      throw error
    }
  }
}
