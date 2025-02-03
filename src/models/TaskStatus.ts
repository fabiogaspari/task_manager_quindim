export default class TaskStatus {
  constructor(
    public name: string,
    public status_color: string,
    public status_color_font: string,
    public description: string,
    public _id?: string,
  ) {}
}
