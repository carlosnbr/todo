// UI.js
import Task from "./Task.js";
import Project from "./Project.js";

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
        this.projectContainer.innerHTML = "";
        const projects = this.dataStore.getAllProjects();

        projects.forEach(project => {
            const projectTemplate = `
                <div class="sidebar__nav-item">
                    <a href="#" data-project-id="${project.getId()}">
                        <img src="${project.getIcon()}" alt="Inbox Icon" class="sidebar__nav-item-icon">
                        <span class="sidebar__nav-item-title">${project.getTitle()}</span>
                    </a>
                </div>
            `;
            this.projectContainer.insertAdjacentHTML(
                "beforeend",
                projectTemplate
            );
        });

        // Add event listeners to dynamically added project elements
        this.projectContainer.querySelectorAll("a").forEach(anchor => {
            anchor.addEventListener("click", event => {
                event.preventDefault();

                const projectId = event.currentTarget.dataset.projectId;
                const project = this.dataStore.getProject(projectId);

                if (project) {
                    document.getElementById(
                        "project-information"
                    ).dataset.projectId = projectId;
                    this.renderTasks(project.tasks);
                } else {
                    console.error("Project not found.");
                }
            });
        });
    }

    renderTasks(tasks) {
        this.taskContainer.innerHTML = "";
    
        // Render each task and attach event listener
        tasks.forEach(task => {
            const taskElement = document.createElement("div");
            taskElement.classList.add(`${task.priority}-task-row`);
            taskElement.dataset.taskId = task.getId();
    
            taskElement.innerHTML = `
                <div class="task-details">
                    <input type="checkbox" class="task-checkbox">
                    <div>
                        <h3>${task.getTitle()}</h3>
                        <p>${task.getDescription()}</p>
                        <p class="due-date">${task.getFormattedDueDate()}</p>
                    </div>
                </div>
                <div class="task-buttons">
                    <button class="edit-button">
                        <img src="../src/assets/edit-icon.svg" alt="">
                    </button>
                    <button class="delete-button">
                        <img src="../src/assets/delete-icon.svg" alt="">
                    </button>
                </div>
            `;
    
            taskElement.addEventListener("click", () => {
                // Do something when the task row is clicked
                console.log("Task row clicked:", task.getId());
            });
    
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
        const taskModalCloseButton = document.getElementById(
            "close-task-modal-button"
        );
        const projectModalCloseButton = document.getElementById(
            "close-project-modal-button"
        );

        addTaskButton.addEventListener("click", event => {
            this.openAddTaskModal();
        });

        window.addEventListener("click", event => {
            if (
                event.target === taskModal ||
                event.target === taskModalCloseButton
            ) {
                this.closeAddTaskModal();
                document.getElementById("add-task-form").reset();
            } else if (
                event.target === projectModal ||
                event.target === projectModalCloseButton
            ) {
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

                const project = this.dataStore.getProject(projectId);

                if (project) {
                    project.addTask(newTask);
                    document.getElementById("add-task-form").reset();
                    this.closeAddTaskModal();
                    this.renderTasks(project.tasks);
                } else {
                    console.error("Project not found.");
                }
            }.bind(this)
        );

        const addProjectButton = document.getElementById("add-project-button");
        addProjectButton.addEventListener("click", event => {
            this.openAddProjectModal();
        });

        const newProjectSubmit = document.getElementById("add-project-form");
        newProjectSubmit.addEventListener(
            "submit",
            function (event) {
                event.preventDefault();

                const title = document.getElementById("project-title").value;
                const newProject = new Project(title);

                this.dataStore.addProject(newProject);
                this.closeAddProjectModal();
                this.renderTasks(newProject.tasks);
                this.renderProjects();
            }.bind(this)
        );

        const todayFilterButton = document.getElementById("today-filter");
        todayFilterButton.addEventListener(
            "click",
            function (event) {
                this.renderTasks(this.dataStore.getTodayTasks());
            }.bind(this)
        );

        const upcomingFilterButton = document.getElementById("upcoming-filter");
        upcomingFilterButton.addEventListener(
            "click",
            function (event) {
                this.renderTasks(this.dataStore.getUpcomingTasks());
            }.bind(this)
        );
    }
}
