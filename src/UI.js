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
        this.renderTasks({ tasks: this.dataStore.getTodayTasks() });
        this.hideAddTaskButton();
        this.clickNode(document.getElementById("today-filter"));
    }

    renderProjects() {
        this.projectContainer.innerHTML = "";

        const projects = this.dataStore.getAllProjects();

        if (projects.length === 0) {
            this.projectContainer.innerHTML = `<div class="projects-empty-state">You have no projects</div>`;
        }

        projects.forEach(project => {
            const projectTemplate = this.createProjectTemplate(project);

            // Create a document fragment to hold the template HTML
            const fragment = document.createDocumentFragment();
            const div = document.createElement("div");
            div.innerHTML = projectTemplate;
            fragment.appendChild(div);

            // Query the delete button within the document fragment
            const projectDeleteButton = fragment.querySelector(
                ".delete-project-button"
            );

            // Add event listener to the delete button
            projectDeleteButton.addEventListener("click", event => {
                const projectId = project.getId();
                this.handleProjectDeleteClick(event, projectId);
            });

            // Append the document fragment to the project container
            this.projectContainer.appendChild(fragment);
        });

        this.addProjectEventListeners();
    }

    createProjectTemplate(project) {
        return `
            <div class="sidebar__nav-item">
                <a href="#" data-project-id="${project.getId()}">
                    <img src="${project.getIcon()}" alt="Inbox Icon" class="sidebar__nav-item-icon">
                    <span class="sidebar__nav-item-title">${project.getTitle()}</span>
                </a>
                <button class="delete-project-button">
                    <img src="../src/assets/delete-icon.svg">
                </button>
            </div>
        `;
    }

    addProjectEventListeners() {
        this.projectContainer.querySelectorAll("a").forEach(anchor => {
            anchor.addEventListener("click", event => {
                event.preventDefault();

                const projectId = event.currentTarget.dataset.projectId;
                const project = this.dataStore.getProject(projectId);

                if (project) {
                    document.getElementById(
                        "project-information"
                    ).dataset.projectId = projectId;
                    this.renderTasks({
                        projectId: projectId,
                        tasks: project.tasks,
                    });
                    this.showAddTaskButton()
                } else {
                    console.error("Project not found.");
                }
            });
        });
    }

    renderTasks({ projectId, tasks }) {
        const projectNameHeader = document.querySelector(".project-name");
        const project = this.dataStore.getProject(projectId);
        if (project) {
            projectNameHeader.textContent = project.getTitle();
        }

        this.taskContainer.innerHTML = "";
        document.getElementById("project-information").dataset.projectId =
            projectId;

        if (tasks.length === 0) {
            this.taskContainer.innerHTML = `<div class="tasks-empty-state">Nothing to see here.</div>`;
        } else {
            tasks.forEach(task => {
                const taskElement = this.createTaskElement(task);
                this.taskContainer.appendChild(taskElement);
            });
        }
    }

    createTaskElement(task) {
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

        const checkbox = taskElement.querySelector(".task-checkbox");
        checkbox.addEventListener("click", event => {
            const taskId =
                event.target.closest(".task-details").parentNode.dataset.taskId;
            this.handleCheckboxClick(event, taskId);
        });

        const deleteButton = taskElement.querySelector(".delete-button");
        deleteButton.addEventListener("click", event => {
            const taskId =
                event.target.closest(".task-buttons").parentNode.dataset.taskId;
            this.handleTaskDeleteClick(event, taskId);
        });

        taskElement.addEventListener("click", event => {
            this.handleTaskClick(event);
        });

        return taskElement;
    }

    handleCheckboxClick(event, taskId) {
        event.stopPropagation();

        this.dataStore.toggleTaskCompletion(taskId);
    }

    handleTaskDeleteClick(event, taskId) {
        event.stopPropagation();

        const updatedProject = this.dataStore.deleteTaskById(taskId);

        this.renderTasks({
            projectId: updatedProject.getId(),
            tasks: updatedProject.tasks,
        });
    }

    handleTaskClick(event) {
        const taskId = event.currentTarget.dataset.taskId;
        const taskDetails = this.dataStore.getTaskById(taskId);

        document.getElementById("task-title").value = taskDetails.title;
        document.getElementById("task-description").value =
            taskDetails.description;
        document.getElementById("task-due-date").value = taskDetails.dueDate
            ? taskDetails.dueDate.toISOString().split("T")[0]
            : "";
        document.getElementById("task-priority").value = taskDetails.priority;

        // Change modal title and submit button text
        document
            .getElementById("add-task-modal")
            .querySelector("h2").textContent = "Edit Task";
        document
            .getElementById("add-task-form")
            .querySelector("button[type='submit']").textContent = "Save";
        document.getElementById("add-task-form").dataset.taskId = taskId;

        this.openAddTaskModal();
    }

    handleProjectDeleteClick(event, projectId) {
        event.stopPropagation();

        const newProjectsList = this.dataStore.deleteProjectById(projectId);
        this.renderProjects(newProjectsList);
        if (
            projectId ===
            document.getElementById("project-information").dataset.projectId
        ) {
            this.clickNode(document.getElementById("today-filter"));
        }
    }

    openAddTaskModal() {
        this.toggleModalDisplay("add-task-modal", true);
    }

    closeAddTaskModal() {
        this.toggleModalDisplay("add-task-modal", false);
    }

    openAddProjectModal() {
        this.toggleModalDisplay("add-project-modal", true);
    }

    closeAddProjectModal() {
        this.toggleModalDisplay("add-project-modal", false);
    }

    toggleModalDisplay(modalId, display) {
        const modal = document.getElementById(modalId);
        modal.style.display = display ? "flex" : "none";
    }

    bindEvents() {
        const addTaskButton = document.getElementById("add-task-button");
        addTaskButton.addEventListener("click", event => {
            this.openAddTaskModal();
        });

        window.addEventListener("click", event => {
            this.handleModalClick(event);
        });

        const newTaskSubmit = document.getElementById("add-task-form");
        newTaskSubmit.addEventListener("submit", event => {
            this.handleTaskSubmission(event);
        });

        const addProjectButton = document.getElementById("add-project-button");
        addProjectButton.addEventListener("click", event => {
            this.openAddProjectModal();
        });

        const newProjectSubmit = document.getElementById("add-project-form");
        newProjectSubmit.addEventListener("submit", event => {
            this.handleProjectSubmission(event);
        });

        const todayFilterButton = document.getElementById("today-filter");
        todayFilterButton.addEventListener("click", event => {
            this.renderTasks({ tasks: this.dataStore.getTodayTasks() });
            document.querySelector(".project-name").textContent = "Today";
            this.hideAddTaskButton();
        });

        const upcomingFilterButton = document.getElementById("upcoming-filter");
        upcomingFilterButton.addEventListener("click", event => {
            this.renderTasks({ tasks: this.dataStore.getUpcomingTasks() });
            document.querySelector(".project-name").textContent = "Upcoming";
            this.hideAddTaskButton();
        });
    }

    handleModalClick(event) {
        const taskModal = document.getElementById("add-task-modal");
        const taskModalCloseButton = document.getElementById(
            "close-task-modal-button"
        );
        const projectModal = document.getElementById("add-project-modal");
        const projectModalCloseButton = document.getElementById(
            "close-project-modal-button"
        );

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
    }

    handleTaskSubmission(event) {
        event.preventDefault();

        let taskId = event.currentTarget.dataset.taskId;

        const title = document.getElementById("task-title").value;
        const description = document.getElementById("task-description").value;
        const dueDate = document.getElementById("task-due-date").value;
        const priority = document.getElementById("task-priority").value;
        const projectId = document.getElementById("project-information").dataset
            .projectId;
        const project = this.dataStore.getProject(projectId);

        if (taskId) {
            try {
                this.dataStore.updateTaskById(taskId, {
                    title,
                    description,
                    dueDate,
                    priority,
                });
                event.currentTarget.reset();
                event.currentTarget.removeAttribute("data-task-id");
                this.closeAddTaskModal();
                this.renderTasks({ tasks: project.tasks });
            } catch (error) {
                console.error("Failed to update task:", error.message);
            }
        } else {
            const newTask = new Task(title, description, dueDate, priority);

            if (projectId) {
                this.dataStore.addTask(projectId, newTask);
                event.currentTarget.reset();
                this.closeAddTaskModal();
                this.renderTasks({ tasks: project.tasks });
            } else {
                console.error("Project not found.");
            }
        }
    }

    handleProjectSubmission(event) {
        event.preventDefault();

        const title = document.getElementById("project-title").value;
        const newProject = new Project(title);

        this.dataStore.addProject(newProject);
        this.closeAddProjectModal();
        this.renderTasks({
            projectId: newProject.getId(),
            tasks: newProject.tasks,
        });
        this.renderProjects();
        this.showAddTaskButton()
    }

    clickNode(node) {
        const clickEvent = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window,
        });

        node.dispatchEvent(clickEvent);
    }

    hideAddTaskButton() {
        const addTaskButton = document.getElementById("add-task-button");
        addTaskButton.style.display = "none";
    }

    showAddTaskButton() {
        const addTaskButton = document.getElementById("add-task-button");
        addTaskButton.style.display = "inline-block";
    }
}
