import displayTask from './displayTask.js';
import Task from './task.js';
import infoButtonHandler from './infoButtonHandler.js';

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
            if (taskNameInput.value !== '') {
                document.querySelector(`#${list.name.replace(/\s+/g, '')}-task-display`).innerHTML = '';

                const newTask = new Task(taskNameInput.value);
                newTask.setPriority(prioritySelect.value);
                newTask.setDueDate(dueDateInput.value);

                list.newTask(newTask);
                displayTask(list);
                infoButtonHandler(obj);
            }
        });
    });
}