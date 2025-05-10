class Task {
    constructor(id, title, description, due_date, status, user_id, category_id, created_at) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.due_date = due_date;
      this.status = status;
      this.user_id = user_id;
      this.category_id = category_id;
      this.created_at = created_at;
    }
  }
  
  module.exports = Task;
  