import displayTask from "./displayTask";
import infoButtonHandler from './infoButtonHandler.js';

export default function updateTaskDialogHandler(obj) {
    const updateTaskPriorityDialog = document.querySelector('#update-task-priority-dialog');
    const taskNameInput = document.querySelector('#update-task-name-input');
    const prioritySelect = document.querySelector('#update-priority-input');
    const dueDateInput = document.querySelector('#update-due-date-input');

    document.querySelector('#update-nvm-button').addEventListener('click', () => {
        updateTaskPriorityDialog.close();
    });
    
    obj.library.forEach((list) =>{
        list.taskList.forEach((task) => {  
            document.querySelector('#update-task-button').addEventListener('click', () => {
                if (task.getName() !== taskNameInput.value) {
                    task.setName(taskNameInput.value);
                }
                if (task.getPriority() !== prioritySelect.value) {
                    task.setPriority(prioritySelect.value);
                }
                if (task.getDueDate() !== dueDateInput.value) {
                    task.setDueDate(dueDateInput.value);
                }
                document.querySelector(`#${list.name.replace(/\s+/g, '')}-task-display`).innerHTML = '';
                displayTask(list);
                infoButtonHandler(obj);
            });
        });
    });
}