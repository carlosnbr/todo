import { v4 as uuidv4 } from "uuid";

export default class Task {
    id = uuidv4();
    title = "";
    description = "";
    dueDate = null;
    priority = "low";
    isCompleted = false;

    constructor(title, description, dueDate = "", priority = "low") {
        this.title = title;
        this.description = description;
        if (!dueDate || dueDate.trim() === "") {
            this.dueDate = null;
        } else {
            if (dueDate.includes("T")) {
                // If in ISO format, extract only the date portion
                const formattedDueDate = new Date(dueDate)
                    .toISOString()
                    .slice(0, 10);
                this.dueDate = new Date(formattedDueDate + "T00:00:00");
            } else {
                this.dueDate = new Date(dueDate + "T00:00:00");
            }
        }
        this.priority = priority;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getFormattedDueDate() {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        if (this.dueDate instanceof Date && !isNaN(this.dueDate)) {
            const monthIndex = this.dueDate.getMonth();
            const day = this.dueDate.getDate();
            const year = this.dueDate.getFullYear();

            return `${months[monthIndex]} ${day} ${year}`;
        } else {
            return "";
        }
    }

    getPriority() {
        return this.priority;
    }

    getIsCompleted() {
        return this.isCompleted;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    setDueDate(newDueDate) {
        this.dueDate = new Date(newDueDate);
    }

    setPriority(newPriority) {
        const validPriorities = ["high", "medium", "low"];
        if (validPriorities.includes(newPriority)) {
            this.priority = newPriority;
        } else {
            throw new Error(
                "Invalid priority. Valid options are 'high', 'medium', or 'low'."
            );
        }
    }

    toggleCompletion() {
        this.isCompleted = !this.isCompleted;
    }
}
