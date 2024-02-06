// UI.js
import Task from "./Task.js";

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

                document.getElementById(
                    "project-information"
                ).dataset.projectId = projectId;
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

    openAddProjectModal() {
        const modal = document.getElementById("add-project-modal");
        modal.style.display = "flex";
    }

    closeAddProjectModal() {
        const modal = document.getElementById("add-project-modal");
        modal.style.display = "none";
    }

    bindEvents() {
        const addTaskButton = document.getElementById("add-task-button");
        const taskModal = document.getElementById("add-task-modal");
        const projectModal = document.getElementById("add-project-modal");
        const taskModalCloseButton = document.getElementById("close-task-modal-button");
        const projectModalCloseButton = document.getElementById("close-project-modal-button");

        addTaskButton.addEventListener("click", event => {
            this.openAddTaskModal();
        });

        window.addEventListener("click", event => {
            if (event.target === taskModal || event.target === taskModalCloseButton) {
                this.closeAddTaskModal();
                document.getElementById("add-task-form").reset();
            } else if (event.target === projectModal || event.target === projectModalCloseButton) {
                this.closeAddProjectModal();
                document.getElementById("add-project-form").reset();
            }
        });

        const newTaskSubmit = document.getElementById("add-task-form");
        newTaskSubmit.addEventListener(
            "submit",
            function (event) {
                event.preventDefault();

                const title = document.getElementById("task-title").value;
                const description =
                    document.getElementById("task-description").value;
                const dueDate = document.getElementById("task-due-date").value;
                const priority = document.getElementById("task-priority").value;

                const newTask = new Task(title, description, dueDate, priority);

                const projectId = document.getElementById("project-information")
                    .dataset.projectId;

                const project = this.dataStore.findProject(projectId);

                if (project) {
                    project.addTask(newTask);
                    document.getElementById("add-task-form").reset();
                } else {
                    console.error("Project not found.");
                }
                this.closeAddTaskModal();
                this.renderTasks(project.tasks);
            }.bind(this)
        );

        const addProjectButton = document.getElementById("add-project-button");
        addProjectButton.addEventListener("click", event => {
            this.openAddProjectModal();
        });
    }
}
