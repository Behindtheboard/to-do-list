import newTaskDialog from "./newTaskDialog";
import { Task, displayTask } from "../task/task.js";
import currentDate from "../currentDate.js";
import taskNameValidation from "../task/taskNameValidation.js";
import {saveToLocalStorage} from "../index.js";

export function list(name) {
  let taskList = [];

  const newTask = function (task) {
    taskList.push(task);
  };

  const deleteTask = function (index) {
    taskList.splice(index, 1);
  };

  return { name, taskList, newTask, deleteTask };
}

export function displayListPage(list, obj) {
  document.getElementById("container").innerHTML = "";

  const listPageDisplay = document.createElement("div");
  listPageDisplay.setAttribute("id", `page-list-display`);
  container.appendChild(listPageDisplay);

  const listName = document.createElement("h2");
  listName.textContent = list.name;
  listPageDisplay.appendChild(listName);

  const tasksContainer = document.createElement("div");
  tasksContainer.setAttribute("id", `tasks-container`);
  listPageDisplay.appendChild(tasksContainer);

  const newTaskButton = document.createElement("button");
  newTaskButton.setAttribute("id", "new-task-button");
  newTaskButton.textContent = "New Task";
  listPageDisplay.appendChild(newTaskButton);

  newTaskHandler(list, obj);
}

function newTaskHandler(list, obj) {
  document.querySelector("#new-task-button").addEventListener("click", () => {
    document.getElementById("dialog").innerHTML = "";

    newTaskDialog();

    const newTaskDialogEl = document.getElementById("new-task-dialog");
    const newTaskForm = document.getElementById("new-task-form");
    const newTaskName = document.getElementById("task-name-input");
    const newTaskPrio = document.getElementById("priority-input");
    const newTaskDue = document.getElementById("due-date-input");

    newTaskDialogEl.showModal();

    taskNameValidation(list);

    newTaskDue.value = currentDate();

    newTaskForm.noValidate = true;
    newTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (newTaskName.checkValidity()) {
        const newTask = new Task(newTaskName.value);
        newTask.setPriority(newTaskPrio.value);
        newTask.setDueDate(newTaskDue.value);
        list.newTask(newTask);

        displayTask(list, obj);

        saveToLocalStorage(obj);

        newTaskDialogEl.close();
      } else {
        newTaskName.reportValidity();
      }
    });

    document.getElementById("nvm-button").addEventListener("click", (e) => {
      e.preventDefault();
      newTaskDialogEl.close();
    });
  });
}
