// UI.js

export default class UI {
    constructor(dataStore) {
        this.dataStore = dataStore;
        this.projectContainer = document.getElementById("projects-list");
        this.taskContainer = document.getElementById("task-list");
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
        // this.projectContainer.innerHTML = "";

        // Render each project
        projects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.innerHTML = `
                <div class="sidebar__nav-item">
                    <a href="#">
                        <img
                            src="${project.getIcon()}"
                            alt="Inbox Icon"
                            class="sidebar__nav-item-icon"
                        />
                        <span class="sidebar__nav-item-title">${project.getTitle()}</span>
                    </a>
                </div>
            `;

            // Add click event to handle project selection or other interactions
            projectElement.querySelector('a').addEventListener("click", () => {
                console.log("this works")
            });

            this.projectContainer.appendChild(projectElement);
        });
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
