import { displayTask } from "./task";
import taskNameValidation from "./taskNameValidation";
import { saveToLocalStorage } from "../index.js";

export default function updateTaskDialogHandler(list, index, obj) {
  const updateTaskDialog = document.getElementById(`update-task-dialog`);
  const updateTaskForm = document.getElementById("update-task-form");
  const taskNameInput = document.getElementById(`task-name-input`);
  const prioritySelect = document.getElementById(`update-priority-input`);
  const dueDateInput = document.getElementById(`update-due-date-input`);
  const task = list.taskList[index];

  taskNameValidation(list);

  taskNameInput.value = task.getName();
  prioritySelect.value = task.getPriority();
  dueDateInput.value = task.getDueDate();

  updateTaskForm.noValidate = true;

  updateTaskForm.addEventListener("submit", () => {
    if (taskNameInput.checkValidity()) {
      task.setName(taskNameInput.value);
      task.setPriority(prioritySelect.value);
      task.setDueDate(dueDateInput.value);
    } else {
      taskNameInput.reportValidity();
    }

    displayTask(list, obj);

    saveToLocalStorage(obj);

    updateTaskDialog.close();
  });

  document
    .querySelector("#update-nvm-button")
    .addEventListener("click", (e) => {
      e.preventDefault();
      updateTaskDialog.close();
    });
}
