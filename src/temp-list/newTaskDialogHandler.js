import Task from '../temp-task/task.js';
import displayTask from '../temp-task/displayTask.js';
import infoButtonHandler from '../temp-task/infoButtonHandler.js';
import deleteButtonHandler from '../temp-task/deleteButtonHandler.js';

export default function newTaskDialogHandler(obj) {
    const newTaskDialog = document.querySelector('#new-task-dialog');
    const taskNameInput = document.querySelector('#task-name-input');
    const prioritySelect = document.querySelector('#priority-input');
    const dueDateInput = document.querySelector('#due-date-input');

    document.getElementById('nvm-button').addEventListener('click', (event) => {
        event.preventDefault()
        newTaskDialog.close();
    });

    obj.library.forEach((list) =>{
        document.querySelector('#add-task-button').addEventListener('click', () => {
            
            if (taskNameInput.value !== '') {
                const newTask = new Task(taskNameInput.value);
                newTask.setPriority(prioritySelect.value);
                newTask.setDueDate(dueDateInput.value);
                
                list.newTask(newTask);
                document.getElementById(`tasks-container`).innerHTML = '';
                displayTask(list);
                infoButtonHandler(obj);
                deleteButtonHandler(obj);
            }
        });
    });
}