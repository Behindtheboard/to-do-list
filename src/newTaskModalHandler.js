export default function newTaskModalHandler() {

    const newTaskDialog = document.createElement('dialog');
    newTaskDialog.setAttribute('id', 'new-task-dialog');
    document.querySelector('#container').appendChild(newTaskDialog);
    const newTaskForm = document.createElement('form');
    newTaskForm.setAttribute('method', 'dialog');
    newTaskForm.setAttribute('id', 'new-task-form');
    newTaskDialog.appendChild(newTaskForm);

    const taskNameDiv = document.createElement('div');
    const taskNameLabel = document.createElement('label');
    taskNameLabel.setAttribute('for', 'task-name-input');
    taskNameLabel.textContent = 'Task Name';
    const taskNameInput = document.createElement('input');
    taskNameInput.setAttribute('type', 'text');
    taskNameInput.setAttribute('id', 'task-name-input');
    taskNameInput.setAttribute('name', 'task-name-input');
    taskNameInput.required = true;
    taskNameDiv.appendChild(taskNameLabel);
    taskNameDiv.appendChild(taskNameInput);

    const priorityDiv = document.createElement('div');
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority-input');
    priorityLabel.textContent = 'Priority';
    const prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('name', 'priority');
    prioritySelect.setAttribute('id', 'priority-input');

    const optionLow = document.createElement('option');
    optionLow.setAttribute('value', '1');
    optionLow.textContent = 'Low';
    const optionMid = document.createElement('option');
    optionMid.setAttribute('value', '2');
    optionMid.textContent = 'Mid';
    const optionHigh = document.createElement('option');
    optionHigh.setAttribute('value', '3');
    optionHigh.textContent = 'High';

    prioritySelect.appendChild(optionLow);
    prioritySelect.appendChild(optionMid);
    prioritySelect.appendChild(optionHigh);

    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(prioritySelect);

    const buttonDiv = document.createElement('div');
    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('type', 'submit');
    addTaskButton.setAttribute('id', 'add-task-button');
    addTaskButton.textContent = 'Add';

    const nvmButton = document.createElement('button');
    nvmButton.setAttribute('id', 'nvm-button');
    nvmButton.textContent = 'Nvm';

    buttonDiv.appendChild(addTaskButton);
    buttonDiv.appendChild(nvmButton);

    newTaskForm.appendChild(taskNameDiv);
    newTaskForm.appendChild(priorityDiv);
    newTaskForm.appendChild(buttonDiv);

    document.querySelector('#new-task-button').addEventListener('click', () => {
        newTaskDialog.showModal();
    });
}