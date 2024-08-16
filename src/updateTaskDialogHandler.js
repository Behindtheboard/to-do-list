import displayTask from "./displayTask";
import infoButtonHandler from './infoButtonHandler.js';
import deleteButtonHandler from './deleteButtonHandler.js';
import transformName from "./transformName.js";

export default function updateTaskDialogHandler(obj, list, processedTaskName, task) {

    const updateTaskPriorityDialog = document.querySelector(`#${processedTaskName}-update-task-priority-dialog`);
    const taskNameInput = document.querySelector(`#${processedTaskName}-update-task-name-input`);
    const prioritySelect = document.querySelector(`#${processedTaskName}-update-priority-input`);
    const dueDateInput = document.querySelector(`#${processedTaskName}-update-due-date-input`);
    const processedListName = transformName(list);

    document.querySelector('#update-nvm-button').addEventListener('click', () => {
        updateTaskPriorityDialog.close();
    });

    document.querySelector(`#${processedTaskName}-update-task-button`).addEventListener('click', () => {

        if (task.getName() !== taskNameInput.value) {
            task.setName(taskNameInput.value);
        }
        if (task.getPriority() !== prioritySelect.value) {
            task.setPriority(prioritySelect.value);
        }
        if (task.getDueDate() !== dueDateInput.value) {
            task.setDueDate(dueDateInput.value);
        }
        
        document.querySelector(`#${processedListName}-task-display`).innerHTML = '';
        displayTask(list);
        infoButtonHandler(obj);
        deleteButtonHandler(obj);
    });
}