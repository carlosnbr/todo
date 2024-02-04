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

                document.querySelector(".add-task-button").dataset.projectId =
                    projectId;
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
                <div class="task-row">
                    <input type="checkbox" class="task-checkbox">
                    <div class="task-details">
                        <h3>${task.getTitle()}</h3>
                        <p>${task.getDescription()}</p>
                        <p class="due-date">${task.getFormattedDueDate()}</p>
                    </div>
                </div>
                `;
            this.taskContainer.appendChild(taskElement);
        });
    }

    openAddTaskModal() {
        const modal = document.getElementById("add-task-modal");
        modal.style.display = "flex";
    }

    closeAddTaskModal() {
        const modal = document.getElementById("add-task-modal");
        modal.style.display = "none";
    }

    bindEvents() {
        //TODO: Need to open a modal when clicking the add task button, then capture the needed info to create a new task, we already have the project ID in the code below
        const addTaskButton = document.getElementById("add-task-button");
        const modal = document.getElementById("add-task-modal");
        const modalCloseButton = document.getElementById("close-modal-button");

        addTaskButton.addEventListener("click", (event) => {
            this.openAddTaskModal();
            const projectId = event.currentTarget.dataset.projectId;
            const project = this.dataStore.projects.find((project) => {
                return project.id === projectId;
            });
        });
        
        window.addEventListener("click", (event) => {
            if (event.target === modal || event.target === modalCloseButton) {
                this.closeAddTaskModal();
            }
        });
    }
}
