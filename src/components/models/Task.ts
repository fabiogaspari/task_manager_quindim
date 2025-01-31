import type { TaskStatus } from './TaskStatus'

export interface Task {
  id: number
  title: string
  description: string
  status: TaskStatus
  expiration_date: Date
  created_at: Date
  updated_at: Date
}
