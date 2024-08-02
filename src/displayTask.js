export default function displayTask(list) {
    list.taskList.forEach((task) => {
        const taskListDisplay = document.querySelector(`#${`${list.name.replace(/\s+/g, '')}-task-display`}`)
        
        const taskDisplay = document.createElement('div');
        taskDisplay.classList.add('task-display');
        taskListDisplay.appendChild(taskDisplay);
        
        const taskCheckbox = document.createElement('input');
        taskCheckbox.setAttribute('type', 'checkbox')
        taskCheckbox.setAttribute('id', `${task.name.replace(/\s+/g, '')}-checkbox`)
        taskCheckbox.setAttribute('value', 'true')
        taskDisplay.appendChild(taskCheckbox);
        
        const taskInput = document.createElement('input');
        taskInput.setAttribute('id', `${task.name.replace(/\s+/g, '')}`)
        taskInput.value = task.name;
        taskDisplay.appendChild(taskInput);

        const taskPriorityDisplay = document.createElement('div');
        taskPriorityDisplay.setAttribute('id', `${task.name.replace(/\s+/g, '')}-priority-display`);
        taskPriorityDisplay.textContent = task.getPriority();
        taskDisplay.appendChild(taskPriorityDisplay);
        
        const taskDueDateDisplay = document.createElement('div');
        taskDueDateDisplay.setAttribute('id', `${task.name.replace(/\s+/g, '')}-due-date-display`);
        taskDueDateDisplay.textContent = task.getDueDate();
        taskDisplay.appendChild(taskDueDateDisplay);

        const infoButton = document.createElement('button');
        infoButton.setAttribute('id', `${task.name.replace(/\s+/g, '')}-info-button`);
        infoButton.textContent = 'i'
        taskDisplay.appendChild(infoButton);
    });
}