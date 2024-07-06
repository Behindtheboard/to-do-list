export default function displayTask(list) {
    list.taskList.forEach((obj) => {
        const taskListDisplay = document.querySelector(`#${`${list.name.replace(/\s+/g, '')}-task-display`}`)
        const taskDisplay = document.createElement('div');
        taskDisplay.setAttribute('id', 'task');
        taskListDisplay.appendChild(taskDisplay);
        
        const taskCheckbox = document.createElement('input');
        taskCheckbox.setAttribute('type', 'checkbox')
        taskCheckbox.setAttribute('id', `${obj.name.replace(/\s+/g, '')}-checkbox`)
        taskCheckbox.setAttribute('value', 'true')
        const taskLabel = document.createElement('label');
        taskLabel.setAttribute('for', 'task')
        taskLabel.textContent = obj.name;
        taskDisplay.appendChild(taskCheckbox);
        taskDisplay.appendChild(taskLabel);
    });
}