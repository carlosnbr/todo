// index.js

import UI from "./UI.js";
import DataStore from "./DataStore.js";
import "./styles.css";
import defaultProjectIcon from "./assets/default-project-icon.svg";

import Task from "./Task.js";
import Project from "./Project.js";

const dataStore = new DataStore();
const ui = new UI(dataStore);

// const project = new Project("Personal", defaultProjectIcon);
// const project1 = new Project("Personal 1", defaultProjectIcon);
// const project2 = new Project("Personal 2", defaultProjectIcon);

// const task = new Task(
//     "Complete assignment",
//     "Description",
//     "2024-02-08",
//     "high",
//     "Notes",
//     []
// );
// project.addTask(task);

// const task2 = new Task(
//     "New Assignment",
//     "Description fffff",
//     "2024-01-15",
//     "low",
//     "Notes wwwww",
//     []
// );
// project.addTask(task2);

// dataStore.addProject(project);
// dataStore.addProject(project1);
// dataStore.addProject(project2);

// Render UI


// Additional improvements
document.addEventListener("DOMContentLoaded", () => {
    ui.bindEvents();
    ui.render();
});
