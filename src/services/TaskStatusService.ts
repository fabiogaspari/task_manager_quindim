import TaskStatus from '@/models/TaskStatus'
import api from '@/services/api'

export default class TaskStatusService {
  static async all(): Promise<TaskStatus[]> {
    try {
      const response = await api.get<TaskStatus[]>(`/task_statuses/all`)
      return response.data
    } catch (error) {
      console.error('Erro ao buscar o status da tarefa:', error)
      throw error
    }
  }

  static async get(taskId: string): Promise<TaskStatus> {
    try {
      const response = await api.get<TaskStatus>(`/task_statuses/${taskId}`)
      return response.data
    } catch (error) {
      console.error('Erro ao buscar o status da tarefa:', error)
      throw error
    }
  }

  static async create(taskData: TaskStatus): Promise<TaskStatus> {
    try {
      const response = await api.post<TaskStatus>('/task_statuses/create', taskData)
      return response.data
    } catch (error) {
      console.error('Erro ao criar o status da tarefa:', error)
      throw error
    }
  }

  static async update(taskId: string, taskData: Partial<TaskStatus>): Promise<TaskStatus> {
    try {
      const response = await api.put<TaskStatus>(`/task_statuses/${taskId}`, taskData)
      return response.data
    } catch (error) {
      console.error('Erro ao atualizar o status da tarefa:', error)
      throw error
    }
  }

  static async delete(taskId: string): Promise<void> {
    try {
      await api.delete(`/task_statuses/${taskId}`)
    } catch (error) {
      console.error('Erro ao excluir o status da tarefa:', error)
      throw error
    }
  }
}
