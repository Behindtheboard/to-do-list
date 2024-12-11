export default function updateTaskDialog(processedTaskName) {
    const dialog = document.getElementById('dialog')
    dialog.innerHTML = '';
    
    const updateTaskDialog = document.createElement('dialog');
    updateTaskDialog.setAttribute('id', `update-task-dialog`);
    dialog.appendChild(updateTaskDialog);
    
    const updateTaskForm = document.createElement('form');
    updateTaskForm.setAttribute('method', 'dialog');
    updateTaskForm.setAttribute('id', 'update-task-form');
    updateTaskDialog.appendChild(updateTaskForm);

    const taskNameDiv = document.createElement('div');
    const taskNameLabel = document.createElement('label');
    taskNameLabel.setAttribute('for', `${processedTaskName}-update-task-name-input`);
    taskNameLabel.textContent = 'Task Name';
    const taskNameInput = document.createElement('input');
    taskNameInput.setAttribute('type', 'text');
    taskNameInput.setAttribute('id', `${processedTaskName}-update-task-name-input`);
    taskNameInput.setAttribute('name', 'task-name-input');
    taskNameInput.required = true;
    taskNameDiv.appendChild(taskNameLabel);
    taskNameDiv.appendChild(taskNameInput);

    const priorityDiv = document.createElement('div');
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', `${processedTaskName}-update-priority-input`);
    priorityLabel.textContent = 'Priority';
    const prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('name', 'priority');
    prioritySelect.setAttribute('id', `${processedTaskName}-update-priority-input`);

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
    dueDateLabel.setAttribute('for', `${processedTaskName}-update-due-date-input`);
    dueDateLabel.textContent = 'Due Date:';
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('id', `${processedTaskName}-update-due-date-input`);

    dateDiv.appendChild(dueDateLabel);
    dateDiv.appendChild(dueDateInput);
    
    const buttonDiv = document.createElement('div');
    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('type', 'submit');
    addTaskButton.setAttribute('id', `${processedTaskName}-update-task-button`);
    addTaskButton.textContent = 'Update';

    const nvmButton = document.createElement('button');
    nvmButton.setAttribute('id', 'update-nvm-button');
    nvmButton.textContent = 'Nvm';

    buttonDiv.appendChild(addTaskButton);
    buttonDiv.appendChild(nvmButton);

    updateTaskForm.appendChild(taskNameDiv);
    updateTaskForm.appendChild(priorityDiv);
    updateTaskForm.appendChild(dateDiv);
    updateTaskForm.appendChild(buttonDiv);
}