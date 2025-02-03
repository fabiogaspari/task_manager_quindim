import TaskStatus from '@/models/TaskStatus'
import api from '@/services/api'

export default class TaskStatusService {
  static async getAll(): Promise<TaskStatus[]> {
    try {
      const response = await api.get<TaskStatus[]>(`/task_statuses/all`)
      return response.data
    } catch (error) {
      console.error('Erro ao buscar o status da tarefa:', error)
      throw error
    }
  }

  static async get(taskStatusId: string): Promise<TaskStatus> {
    try {
      const response = await api.get<TaskStatus>(`/task_statuses/${taskStatusId}`)
      return response.data
    } catch (error) {
      console.error('Erro ao buscar o status da tarefa:', error)
      throw error
    }
  }

  static async create(taskStatusData: TaskStatus): Promise<TaskStatus> {
    try {
      const response = await api.post<TaskStatus>('/task_statuses/create', taskStatusData)
      return response.data
    } catch (error) {
      console.error('Erro ao criar o status da tarefa:', error)
      throw error
    }
  }

  static async update(
    taskStatusId: string,
    taskStatusData: Partial<TaskStatus>,
  ): Promise<TaskStatus> {
    try {
      const response = await api.put<TaskStatus>(`/task_statuses/${taskStatusId}`, taskStatusData)
      return response.data
    } catch (error) {
      console.error('Erro ao atualizar o status da tarefa:', error)
      throw error
    }
  }

  static async delete(taskStatusId: string): Promise<void> {
    try {
      await api.delete(`/task_statuses/${taskStatusId}`)
    } catch (error) {
      console.error('Erro ao excluir o status da tarefa:', error)
      throw error
    }
  }
}
