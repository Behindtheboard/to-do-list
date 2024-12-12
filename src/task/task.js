import updateTaskDialog from "./updateTaskDialog";
import updateTaskDialogHandler from "./updateTaskDialogHandler";
import {saveToLocalStorage} from "../index.js"
export class Task {
  constructor(name) {
    this.name = name;
    this.done = false;
    this.priority = "Low";
    this.dueDate = "";
  }

  getName() {
    return this.name;
  }
  setName(newName) {
    this.name = newName;
  }

  getDone() {
    return this.done;
  }
  setDone() {
    this.done = true;
  }
  undoDone() {
    this.done = false;
  }

  getPriority() {
    return this.priority;
  }
  setPriority(level) {
    this.priority = level;
  }

  getDueDate() {
    return this.dueDate;
  }
  setDueDate(date) {
    this.dueDate = date;
  }
}

export function displayTask(list, obj) {
  const tasksContainer = document.getElementById(`tasks-container`);
  tasksContainer.innerHTML = "";

  list.taskList.forEach((task) => {
    const taskDisplay = document.createElement("div");
    taskDisplay.classList.add("task-display");
    tasksContainer.appendChild(taskDisplay);

    const taskCheckbox = document.createElement("input");
    taskCheckbox.setAttribute("type", "checkbox");
    taskCheckbox.classList.add(`checkbox`);
    taskCheckbox.setAttribute("value", "true");
    taskDisplay.appendChild(taskCheckbox);

    const taskName = document.createElement("div");
    taskName.classList.add(`task-name`);
    taskName.textContent = task.getName();
    taskDisplay.appendChild(taskName);

    const taskPriorityDisplay = document.createElement("div");
    taskPriorityDisplay.classList.add(`priority-display`);
    taskPriorityDisplay.textContent = task.getPriority();
    taskDisplay.appendChild(taskPriorityDisplay);

    const taskDueDateDisplay = document.createElement("div");
    taskDueDateDisplay.classList.add(`due-date-display`);
    taskDueDateDisplay.textContent = task.getDueDate();
    taskDisplay.appendChild(taskDueDateDisplay);

    const infoButton = document.createElement("button");
    infoButton.classList.add("info-button");
    infoButton.textContent = "i";
    taskDisplay.appendChild(infoButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    taskDisplay.appendChild(deleteButton);
  });

  taskHandler(list, obj);
}

function taskHandler(list, obj) {
  const tasksContainer = document.querySelector(`#tasks-container`);
  const newtasksContainer = tasksContainer.cloneNode(true);
  tasksContainer.parentNode.replaceChild(newtasksContainer, tasksContainer);

  newtasksContainer.addEventListener("click", (e) => {
    const infoButton = e.target.closest(".info-button");
    const deleteButton = e.target.closest(".delete-button");

    if (infoButton) {
      updateTaskDialog();
      document.getElementById("update-task-dialog").showModal();

      const infoButtonList = [...document.querySelectorAll(".info-button")];
      const infoButtonIndex = infoButtonList.indexOf(infoButton);

      updateTaskDialogHandler(list, infoButtonIndex, obj);
    }

    if (deleteButton) {
      const deleteButtonList = [...document.querySelectorAll(".delete-button")];
      const deleteButtonIndex = deleteButtonList.indexOf(deleteButton);

      list.deleteTask(deleteButtonIndex);

      displayTask(list);

      saveToLocalStorage(obj)
    }
    return;
  });
}
