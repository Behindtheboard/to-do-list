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
        
        const taskName = document.createElement('div');
        taskName.setAttribute('id', `${task.name.replace(/\s+/g, '')}`)
        taskName.textContent = task.getName();
        taskDisplay.appendChild(taskName);

        const taskPriorityDisplay = document.createElement('div');
        taskPriorityDisplay.setAttribute('id', `${task.name.replace(/\s+/g, '')}-priority-display`);
        taskPriorityDisplay.textContent = task.getPriority();
        taskDisplay.appendChild(taskPriorityDisplay);
        
        const taskDueDateDisplay = document.createElement('div');
        taskDueDateDisplay.setAttribute('id', `${task.name.replace(/\s+/g, '')}-due-date-display`);
        taskDueDateDisplay.textContent = task.getDueDate();
        taskDisplay.appendChild(taskDueDateDisplay);

        const infoButton = document.createElement('button');
        infoButton.classList.add('info-button');
        infoButton.setAttribute('id', `${task.name.replace(/\s+/g, '')}-info-button`);
        infoButton.textContent = 'i'
        taskDisplay.appendChild(infoButton);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('id', `${task.name.replace(/\s+/g, '')}-delete-button`)
        deleteButton.textContent = 'Delete';
        taskDisplay.appendChild(deleteButton);
    });
}