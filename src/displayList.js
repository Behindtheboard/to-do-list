export default function displayList(list) {
    const container = document.querySelector('#container')

    const listDisplay = document.createElement('div');
    listDisplay.setAttribute('id', 'list-display')
    container.appendChild(listDisplay);

    const listTitle = document.createElement('h2');
    listTitle.textContent = list.title; 
    listDisplay.appendChild(listTitle);

    const taskListDisplay = document.createElement('div')
    taskListDisplay.setAttribute('id', 'task-list-display')
    listDisplay.appendChild(taskListDisplay);
    list.taskList.forEach((obj) => {
        const task = document.createElement('div');
        task.setAttribute('id', 'task');
        taskListDisplay.appendChild(task);
        const taskCheckbox = document.createElement('input');
        taskCheckbox.setAttribute('type', 'checkbox')
        taskCheckbox.setAttribute('id', 'task')
        taskCheckbox.setAttribute('value', 'true')
        const taskLabel = document.createElement('label');
        taskLabel.setAttribute('for', 'task')
        taskLabel.textContent = obj.name;
        task.appendChild(taskCheckbox);
        task.appendChild(taskLabel);
    });
}