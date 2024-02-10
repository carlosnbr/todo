import Project from "./Project.js";
import defaultProjectIcon from "./assets/default-project-icon.svg";

export default class DataStore {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        if (!(project instanceof Project)) {
            throw new Error("addProject expects an instance of Project.");
        }
        this.projects.push(project);
    }

    removeProject(projectId) {
        this.projects = this.projects.filter(
            project => project.getId() !== projectId
        );
    }

    findProject(projectId) {
        return this.projects.find(project => project.getId() === projectId);
    }

    updateProject(projectId, newTitle, newIcon) {
        const project = this.findProject(projectId);
        if (project) {
            if (newTitle) project.setTitle(newTitle);
            if (newIcon) project.setIcon(newIcon);
        } else {
            throw new Error("Project not found.");
        }
    }

    getAllProjects() {
        return this.projects;
    }

    getTodayTasks() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const todayTasks = [];

        this.projects.forEach(project => {
            project.getAllTasks().forEach(task => {
                const taskDueDate = task.dueDate;
                if (
                    taskDueDate.getDate() === today.getDate() &&
                    taskDueDate.getMonth() === today.getMonth() &&
                    taskDueDate.getFullYear() === today.getFullYear()
                ) {
                    todayTasks.push(task);
                }
            });
        });
        return todayTasks;
    }

    getUpcomingTasks() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);

        const upcomingTasks = [];

        this.projects.forEach(project => {
            project.tasks.forEach(task => {
                const taskDueDate = task.dueDate;
                if (taskDueDate >= today && taskDueDate <= nextWeek) {
                    upcomingTasks.push(task);
                }
            });
        });

        return upcomingTasks;
    }
}
