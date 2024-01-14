import { v4 as uuidv4 } from "uuid"

export default class Task {
    id = uuidv4();
    title = '';
    description = '';
    dueDate = null;
    priority = '';
    notes = '';
    checklist = [];
    isCompleted = false;

    constructor(title, description, dueDate, priority, notes, checklist) {
        this.id = id;
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
        this.priority = newPriority;
    }

    setNotes(newNotes) {
        this.notes = newNotes;
    }

    setChecklist(newChecklist) {
        this.checklist = newChecklist;
    }

    toggleCompletion() {
        this.isCompleted = !this.isCompleted;
    }
}
