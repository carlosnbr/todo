import { v4 as uuidv4 } from "uuid";

export default class Task {
    id = uuidv4();
    title = "";
    description = "";
    dueDate = null;
    priority = "low";
    isCompleted = false;

    constructor(title, description, dueDate, priority = "low") {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getFormattedDueDate() {
        return this.dueDate.toDateString(); // Example format: "Mon Jan 01 2024"
    }

    getPriority() {
        return this.priority;
    }

    getIsCompleted() {
        return this.isCompleted;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    setDueDate(newDueDate) {
        this.dueDate = new Date(newDueDate);
    }

    setPriority(newPriority) {
        const validPriorities = ['high', 'medium', 'low'];
        if (validPriorities.includes(newPriority)) {
            this.priority = newPriority;
        } else {
            throw new Error("Invalid priority. Valid options are 'high', 'medium', or 'low'.");
        }
    }

    toggleCompletion() {
        this.isCompleted = !this.isCompleted;
    }
}
