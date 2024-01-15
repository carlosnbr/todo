import { v4 as uuidv4 } from "uuid";

export default class Task {
    id = uuidv4();
    title = "";
    description = "";
    dueDate = null;
    priority = "low";
    notes = "";
    checklist = [];
    isCompleted = false;

    constructor(title, description, dueDate, priority, notes, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
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

    getNotes() {
        return this.notes;
    }

    getChecklist() {
        return this.checklist;
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

    setNotes(newNotes) {
        this.notes = newNotes;
    }

    toggleCompletion() {
        this.isCompleted = !this.isCompleted;
    }

    addChecklistItem(description) {
        const newItem = { description, isCompleted: false };
        this.checklist.push(newItem);
    }

    removeChecklistItem(index) {
        if (index >= 0 && index < this.checklist.length) {
            this.checklist.splice(index, 1);
        } else {
            throw new Error("Invalid index.");
        }
    }

    toggleChecklistItemCompletion(index) {
        if (index >= 0 && index < this.checklist.length) {
            this.checklist[index].isCompleted =
                !this.checklist[index].isCompleted;
        } else {
            throw new Error("Invalid index.");
        }
    }
}
