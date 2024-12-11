import displayTask from "./displayTask";
import infoButtonHandler from './infoButtonHandler.js';
import deleteButtonHandler from './deleteButtonHandler.js';

export default function updateTaskDialogHandler(obj, list, task) {

    const updateTaskPriorityDialog = document.getElementById(`update-task-dialog`);
    const taskNameInput = document.getElementById(`update-task-name-input`);
    const prioritySelect = document.getElementById(`update-priority-input`);
    const dueDateInput = document.getElementById(`update-due-date-input`);
    const processedListName = transformName(list);

    document.querySelector('#update-nvm-button').addEventListener('click', () => {
        updateTaskPriorityDialog.close();
    });

    document.querySelector(`#update-task-button`).addEventListener('click', () => {

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
    });
}