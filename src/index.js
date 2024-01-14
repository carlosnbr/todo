import "./styles.css";
import defaultProjectIcon from "./assets/default-project-icon.svg"

const projects = [{
    "title": "Rebuild Garden",
    "icon": defaultProjectIcon
}];

const tasks = [{}];

class Task {
    constructor(
        project,
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist
    ) {
        this.project = project;
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
    constructor(title, icon) {
        this.title = title;
        this.icon = icon;
    }
}

const projectsRenderer = (function () {
    // TODO: create a function that will add a new project to the DOM for each object in the projcts array
})

const inbox = new Project(
    "Inbox",
    "Tasks without a project will be added here by default.",
    ""
);
