export default function newTaskButtonHandler(obj) {
    const newTaskDialog = document.querySelector('#new-task-dialog');
    const taskNameInput = document.querySelector('#task-name-input');
    const prioritySelect = document.querySelector('#priority-input');
    const dueDateInput = document.querySelector('#due-date-input');

    document.querySelector('#new-task-button').addEventListener('click', () => {
        newTaskDialog.showModal()
    });

    
}