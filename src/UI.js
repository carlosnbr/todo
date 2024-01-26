// UI.js

export default class UI {
    constructor(dataStore) {
        this.dataStore = dataStore;
        this.projectContainer = document.getElementById("projects-list");
        this.taskContainer = document.getElementById("task-list");
    }

    render() {
        this.renderProjects();
        // this.renderTasks();
    }

    renderProjects() {
        const projects = this.dataStore.getAllProjects();

        projects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.className = "sidebar__nav-item";

            const anchorElement = document.createElement("a");
            anchorElement.href = "#";
            anchorElement.dataset.projectId = project.getId();

            const imgElement = document.createElement("img");
            imgElement.src = project.getIcon();
            imgElement.alt = "Inbox Icon";
            imgElement.className = "sidebar__nav-item-icon";

            const spanElement = document.createElement("span");
            spanElement.className = "sidebar__nav-item-title";
            spanElement.textContent = project.getTitle();

            anchorElement.appendChild(imgElement);
            anchorElement.appendChild(spanElement);

            anchorElement.addEventListener("click", event => {
                event.preventDefault();

                const projectId = event.currentTarget.dataset.projectId;
                const project = this.dataStore.projects.find(project => {
                    return project.id === projectId;
                });

                this.renderTasks(project.tasks);
            });

            projectElement.appendChild(anchorElement);
            this.projectContainer.appendChild(projectElement);
        });
    }

    renderTasks(tasks) {
        this.taskContainer.innerHTML = "";

        // Render each task
        tasks.forEach(task => {
            const taskElement = document.createElement("div");
            taskElement.innerHTML = `
                <div>
                    <h3>${task.getTitle()}</h3>
                    <p>${task.getDescription()}</p>
                    <p>Due Date: ${task.getFormattedDueDate()}</p>
                </div>
                `;

            // Add click event to handle task selection or other interactions
            taskElement.addEventListener("click", () => {
                // Handle task click event
            });

            this.taskContainer.appendChild(taskElement);
        });
    }

    // Add other methods for handling user interactions, updating UI, etc.
}
