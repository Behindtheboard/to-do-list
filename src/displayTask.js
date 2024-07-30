export default function displayTask(list) {
    list.taskList.forEach((obj) => {
        const taskListDisplay = document.querySelector(`#${`${list.name.replace(/\s+/g, '')}-task-display`}`)
        
        const taskDisplay = document.createElement('div');
        taskDisplay.classList.add('task-display');
        taskListDisplay.appendChild(taskDisplay);
        
        const taskCheckbox = document.createElement('input');
        taskCheckbox.setAttribute('type', 'checkbox')
        taskCheckbox.setAttribute('id', `${obj.name.replace(/\s+/g, '')}-checkbox`)
        taskCheckbox.setAttribute('value', 'true')
        taskDisplay.appendChild(taskCheckbox);
        
        const taskLabel = document.createElement('label');
        taskLabel.setAttribute('for', 'task')
        taskLabel.textContent = obj.name;
        taskDisplay.appendChild(taskLabel);

        const taskPriorityDisplay = document.createElement('div');
        taskPriorityDisplay.setAttribute('id', 'task-priority-display');
        taskPriorityDisplay.textContent = obj.getPriority();
        taskDisplay.appendChild(taskPriorityDisplay);

        const infoButton = document.createElement('button');
        infoButton.setAttribute('id', `${obj.name.replace(/\s+/g, '')}-info-button`);
        infoButton.textContent = 'i'
        taskDisplay.appendChild(infoButton);
    });
}