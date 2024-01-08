import "./styles.css";

class Task {
    constructor(title, description, dueDate, priority, notes, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.overdue = false;
        this.completed = false;
    }
}

class Project {
    constructor(title, description, icon) {
        this.title = title;
        this.description = description;
        this.icon = icon;
    }
}

const inbox = new Project(
    "Inbox",
    "Tasks without a project will be added here by default.",
    ""
);
