import { defineStore } from 'pinia'
import type TaskStatus from '@/models/TaskStatus'
import TaskStatusService from '@/services/TaskStatusService'

export const useTaskStatusStore = defineStore('task_status', {
  state: () => ({
    task_statuses: [] as TaskStatus[],
    isLoading: new Boolean(false),
    error: null,
  }),
  actions: {
    async fetchTaskStatuses(): Promise<TaskStatus[]> {
      this.isLoading = true

      try {
        const response = await TaskStatusService.getAll()

        this.task_statuses = response
        return response
      } catch (err: any) {
        this.error = err.message
        return []
      } finally {
        this.isLoading = false
      }
    },

    async addTaskStatus(newTaskStatus: TaskStatus) {
      try {
        const response = await TaskStatusService.create(newTaskStatus)
        this.task_statuses.push(response)
      } catch (err: any) {
        this.error = err.message
      }
    },

    async updateTaskStatus(taskStatusId: any, newStatus: Partial<TaskStatus>) {
      try {
        const task_status: TaskStatus = await TaskStatusService.update(taskStatusId, newStatus)
        const index = this.task_statuses.findIndex((t) => t._id === taskStatusId)
        if (index !== -1) {
          this.task_statuses[index] = task_status
        }
      } catch (err: any) {
        this.error = err.message
      }
    },
  },
  getters: {
    taskStatusesByName: (state) => (name: String) => {
      return state.task_statuses.filter((taskStatus) => taskStatus.name === name)
    },
  },
})
