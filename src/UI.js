// UI.js

export default class UI {
    constructor(dataStore) {
        this.dataStore = dataStore;
        this.taskContainer = document.getElementById("task-container"); // Replace with your actual container element
        this.projectContainer = document.getElementById("project-container"); // Replace with your actual container element
    }

    render() {
        this.renderProjects();
        this.renderTasks();
        // Add other rendering logic as needed

        console.log("Projects rendered successfully.");
    }

    renderProjects() {
        const projects = this.dataStore.getAllProjects();
        // Clear existing projects in the UI
        this.projectContainer.innerHTML = "";

        // Render each project
        projects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.innerHTML = `
                <h2>${project.getTitle()}</h2>
                <img src="${project.getIcon()}" alt="Project Icon">
            `;

            // Add click event to handle project selection or other interactions
            projectElement.addEventListener("click", () => {
                // Handle project click event
            });

            this.projectContainer.appendChild(projectElement);
        });

        console.log("Rendering projects...");
    }

    renderTasks() {
        const tasks = this.dataStore.getAllTasks();
        // Clear existing tasks in the UI
        this.taskContainer.innerHTML = "";

        // Render each task
        tasks.forEach(task => {
            const taskElement = document.createElement("div");
            taskElement.innerHTML = `
                <h3>${task.getTitle()}</h3>
                <p>${task.getDescription()}</p>
                <p>Due Date: ${task.getFormattedDueDate()}</p>
                <!-- Add other task details as needed -->
            `;

            // Add click event to handle task selection or other interactions
            taskElement.addEventListener("click", () => {
                // Handle task click event
            });

            this.taskContainer.appendChild(taskElement);
        });

        console.log("Rendering tasks...");
    }

    // Add other methods for handling user interactions, updating UI, etc.
}
