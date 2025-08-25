export class Task {
  constructor(title, date, priority) {
    (this.id = Date.now()),
      (this.title = title),
      (this.date = date),
      (this.priority = priority.toUpperCase());
  }
}
