import type Task from '@/models/Task'
import api from '@/services/api'

export default class TaskService {
  static async getAll(): Promise<Array<Task>> {
    try {
      const response = await api.get<Array<Task>>(`/tasks/all`)
      return response.data
    } catch (error) {
      console.error('Erro ao buscar tarefa:', error)
      throw error
    }
  }

  static async get(taskId: string): Promise<Task> {
    try {
      const response = await api.get<Task>(`/tasks/${taskId}`)
      return response.data
    } catch (error) {
      console.error('Erro ao buscar tarefa:', error)
      throw error
    }
  }

  static async create(taskData: Task): Promise<Task> {
    try {
      const response = await api.post<Task>('/tasks/create', taskData)
      return response.data
    } catch (error) {
      console.error('Erro ao criar tarefa:', error)
      throw error
    }
  }

  static async update(taskId: string, taskData: Partial<Task>): Promise<Task> {
    try {
      const response = await api.put<Task>(`/tasks/${taskId}`, taskData)
      return response.data
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error)
      throw error
    }
  }

  static async delete(taskId: string): Promise<void> {
    try {
      await api.delete(`/tasks/${taskId}`)
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error)
      throw error
    }
  }
}
