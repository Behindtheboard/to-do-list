import transformName from "../transformName";

export default function displayTask(list) {
    list.taskList.forEach((task) => {
        const processedListName = transformName(list);
        const processedTaskName = transformName(task);
        
        const taskListDisplay = document.querySelector(`#tasks-container`)
        
        const taskDisplay = document.createElement('div');
        taskDisplay.classList.add('task-display');
        taskListDisplay.appendChild(taskDisplay);
        
        const taskCheckbox = document.createElement('input');
        taskCheckbox.setAttribute('type', 'checkbox')
        taskCheckbox.setAttribute('id', `${processedTaskName}-checkbox`)
        taskCheckbox.setAttribute('value', 'true')
        taskDisplay.appendChild(taskCheckbox);
        
        const taskName = document.createElement('div');
        taskName.setAttribute('id', `${processedTaskName}`)
        taskName.textContent = task.getName();
        taskDisplay.appendChild(taskName);

        const taskPriorityDisplay = document.createElement('div');
        taskPriorityDisplay.setAttribute('id', `${processedTaskName}-priority-display`);
        taskPriorityDisplay.textContent = task.getPriority();
        taskDisplay.appendChild(taskPriorityDisplay);
        
        const taskDueDateDisplay = document.createElement('div');
        taskDueDateDisplay.setAttribute('id', `${processedTaskName}-due-date-display`);
        taskDueDateDisplay.textContent = task.getDueDate();
        taskDisplay.appendChild(taskDueDateDisplay);

        const infoButton = document.createElement('button');
        infoButton.classList.add('info-button');
        infoButton.setAttribute('id', `${processedTaskName}-info-button`);
        infoButton.textContent = 'i'
        taskDisplay.appendChild(infoButton);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('id', `${processedTaskName}-delete-button`)
        deleteButton.textContent = 'Delete';
        taskDisplay.appendChild(deleteButton);
    });
}