import Task from "./Task.js"
import { v4 as uuidv4 } from "uuid"
import defaultProjectIcon from "./assets/default-project-icon.svg";

export default class Project {
    id = uuidv4();
    title = '';
    icon = defaultProjectIcon;
    tasks = [];
    constructor(title) {
        this.title = title;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    getIcon() {
        return this.icon;
    }

    addTask(task) {
        if (!(task instanceof Task)) {
            throw new Error("addTask expects an instance of Task.");
        }
        this.tasks.push(task);
    }

    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        }

    findTask(taskId) {
        return this.tasks.find(task => task.id === taskId);
    }

    getAllTasks() {
        return this.tasks;
    }

    getCompletedTasks() {
        return this.tasks.filter(task => task.isCompleted);
    }

    getPendingTasks() {
        return this.tasks.filter(task => !task.isCompleted);
    }

    updateTask(taskId, updatedProperties = {}) {
        const task = this.findTask(taskId);
        if (!task) {
            throw new Error("Task not found.");
        }
    
        Object.entries(updatedProperties).forEach(([key, value]) => {
            const setterName = `set${key.charAt(0).toUpperCase() + key.slice(1)}`;
            if (typeof task[setterName] === 'function') {
                task[setterName](value);
            } else {
                throw new Error(`Setter not found for ${key}`);
            }
        });
    }
}
