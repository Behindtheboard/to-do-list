import Task from './task.js';
import displayTask from './displayTask.js';
import infoButtonHandler from './infoButtonHandler.js';
import deleteButtonHandler from './deleteButtonHandler.js';
import transformName from "./transformName";

export default function newTaskDialogHandler(obj) {
    const newTaskDialog = document.querySelector('#new-task-dialog');
    const taskNameInput = document.querySelector('#task-name-input');
    const prioritySelect = document.querySelector('#priority-input');
    const dueDateInput = document.querySelector('#due-date-input');

    document.querySelector('#nvm-button').addEventListener('click', () => {
        newTaskDialog.close();
    });

    obj.library.forEach((list) =>{
        document.querySelector('#add-task-button').addEventListener('click', () => {
            const processedListName = transformName(list);
            
            if (taskNameInput.value !== '') {
                const newTask = new Task(taskNameInput.value);
                newTask.setPriority(prioritySelect.value);
                newTask.setDueDate(dueDateInput.value);
                
                list.newTask(newTask);
                document.querySelector(`#${processedListName}-task-display`).innerHTML = '';
                displayTask(list);
                infoButtonHandler(obj);
                deleteButtonHandler(obj);
            }
        });
    });
}