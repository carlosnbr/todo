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
        return this.projects.find(
            project => project.getId() === projectId
        );
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
}
