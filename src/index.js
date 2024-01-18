import UI from "./UI.js";
import DataStore from "./DataStore.js";
import "./styles.css";
import defaultProjectIcon from "./assets/default-project-icon.svg";

import Task from "./Task.js";
import Project from "./Project.js";

// Initialize DataStore and UI
const dataStore = new DataStore();
const ui = new UI(dataStore); // Assuming a UI module that interacts with DataStore

// Sample code to add a project and task
const project = new Project("Personal", defaultProjectIcon);
console.log(project);
const task = new Task(
    "Complete assignment",
    "Description",
    "2024-01-31",
    "high",
    "Notes",
    []
);
project.addTask(task);
dataStore.addProject(project);

// Render UI
ui.render();

console.log("test");
