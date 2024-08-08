export default function updateTaskDialog() {
    const updateTaskPriorityDialog = document.createElement('dialog');
    updateTaskPriorityDialog.setAttribute('id', 'update-task-priority-dialog');
    document.querySelector('#container').appendChild(updateTaskPriorityDialog);
    const updateTaskPriorityForm = document.createElement('form');
    updateTaskPriorityForm.setAttribute('method', 'dialog');
    updateTaskPriorityForm.setAttribute('id', 'update-task-priority-form');
    updateTaskPriorityDialog.appendChild(updateTaskPriorityForm);

    const taskNameDiv = document.createElement('div');
    const taskNameLabel = document.createElement('label');
    taskNameLabel.setAttribute('for', 'update-task-name-input');
    taskNameLabel.textContent = 'Task Name';
    const taskNameInput = document.createElement('input');
    taskNameInput.setAttribute('type', 'text');
    taskNameInput.setAttribute('id', 'update-task-name-input');
    taskNameInput.setAttribute('name', 'task-name-input');
    taskNameInput.required = true;
    taskNameDiv.appendChild(taskNameLabel);
    taskNameDiv.appendChild(taskNameInput);

    const priorityDiv = document.createElement('div');
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'update-priority-input');
    priorityLabel.textContent = 'Priority';
    const prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('name', 'priority');
    prioritySelect.setAttribute('id', 'update-priority-input');

    const optionLow = document.createElement('option');
    optionLow.setAttribute('value', 'Low');
    optionLow.textContent = 'Low';
    const optionMid = document.createElement('option');
    optionMid.setAttribute('value', 'Mid');
    optionMid.textContent = 'Mid';
    const optionHigh = document.createElement('option');
    optionHigh.setAttribute('value', 'High');
    optionHigh.textContent = 'High';

    prioritySelect.appendChild(optionLow);
    prioritySelect.appendChild(optionMid);
    prioritySelect.appendChild(optionHigh);

    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(prioritySelect);

    const dateDiv = document.createElement('div');
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'update-due-date-input');
    dueDateLabel.textContent = 'Due Date:';
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('id', 'update-due-date-input');

    dateDiv.appendChild(dueDateLabel);
    dateDiv.appendChild(dueDateInput);
    
    const buttonDiv = document.createElement('div');
    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('type', 'submit');
    addTaskButton.setAttribute('id', 'update-task-button');
    addTaskButton.textContent = 'Update';

    const nvmButton = document.createElement('button');
    nvmButton.setAttribute('id', 'update-nvm-button');
    nvmButton.textContent = 'Nvm';

    buttonDiv.appendChild(addTaskButton);
    buttonDiv.appendChild(nvmButton);

    updateTaskPriorityForm.appendChild(taskNameDiv);
    updateTaskPriorityForm.appendChild(priorityDiv);
    updateTaskPriorityForm.appendChild(dateDiv);
    updateTaskPriorityForm.appendChild(buttonDiv);
}