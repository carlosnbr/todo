import Project from "./Project.js";
import Task from "./Task.js";

export default class DataStore {
    constructor() {
        this.projects = this.loadProjectsFromLocalStorage() || [];
    }

    saveProjectsToLocalStorage() {
        localStorage.setItem("projects", JSON.stringify(this.projects));
    }

    loadProjectsFromLocalStorage() {
        const projectsJson = localStorage.getItem("projects");
        if (projectsJson) {
            const projectsData = JSON.parse(projectsJson);
            return projectsData.map(projectData => {
                const project = new Project(projectData.title);
                project.id = projectData.id;
                project.icon = projectData.icon;
                project.tasks = projectData.tasks.map(taskData => {
                    const task = new Task(
                        taskData.title,
                        taskData.description,
                        taskData.dueDate,
                        taskData.priority
                    );
                    task.id = taskData.id;
                    task.isCompleted = taskData.isCompleted;
                    return task;
                });
                return project;
            });
        } else {
            return null;
        }
    }

    addProject(project) {
        if (!(project instanceof Project)) {
            throw new Error("addProject expects an instance of Project.");
        }
        this.projects.push(project);
        this.saveProjectsToLocalStorage();
    }

    removeProject(projectId) {
        this.projects = this.projects.filter(
            project => project.getId() !== projectId
        );
        this.saveProjectsToLocalStorage();
    }

    getProject(projectId) {
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
        this.saveProjectsToLocalStorage();
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
                if (taskDueDate) {
                    if (
                        taskDueDate.getDate() === today.getDate() &&
                        taskDueDate.getMonth() === today.getMonth() &&
                        taskDueDate.getFullYear() === today.getFullYear()
                    ) {
                        todayTasks.push(task);
                    }
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

    getTaskById(taskId) {
        for (const project of this.projects) {
            for (const task of project.tasks) {
                if (task.getId() === taskId) {
                    return task;
                }
            }
        }
        return null;
    }

    updateTaskById(taskId, updatedTaskData) {
        for (const project of this.projects) {
            for (const task of project.tasks) {
                if (task.getId() === taskId) {
                    task.title = updatedTaskData.title;
                    task.description = updatedTaskData.description;
                    if (updatedTaskData.dueDate.trim() === "") {
                        task.dueDate = null;
                    } else {
                        task.dueDate = new Date(
                            updatedTaskData.dueDate + "T00:00:00"
                        );
                    }

                    task.priority = updatedTaskData.priority;
                    this.saveProjectsToLocalStorage();
                }
            }
        }
    }

    addTask(projectId, task) {
        const project = this.getProject(projectId);
        if (!project) {
            throw new Error("Project not found.");
        }
        project.addTask(task);
        console.log(task);
        this.saveProjectsToLocalStorage();
    }

    toggleTaskCompletion(taskId) {
        let found = false;

        for (const project of this.projects) {
            for (const task of project.tasks) {
                if (task.getId() === taskId) {
                    task.isCompleted = !task.isCompleted;
                    found = true;
                    this.saveProjectsToLocalStorage();
                    break;
                }
            }
            if (found) break;
        }

        if (!found) {
            throw new Error("Task not found.");
        }
    }

    deleteTaskById(taskId) {
        let found = false;

        for (const project of this.projects) {
            for (const task of project.tasks) {
                if (task.getId() === taskId) {
                    const newArray = project.tasks.filter(task => {
                        return task.getId() !== taskId;
                    });
                    found = true;
                    project.tasks = newArray;
                    this.saveProjectsToLocalStorage();
                    return project;
                }
            }
            if (found) break;
        }

        if (!found) {
            throw new Error("Task not found.");
        }
    }

    deleteProjectById(projectId) {
        const newProjects = this.projects.filter(project => {
            return project.getId() !== projectId;
        });
        this.projects = newProjects;
        this.saveProjectsToLocalStorage();
        return newProjects;
    }
}
