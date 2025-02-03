import TaskStatus from './TaskStatus'

export default class Task {
  constructor(
    public title: string,
    public status: TaskStatus,
    public expiration_date?: string | null,
    public _id?: string,
  ) {}
}
