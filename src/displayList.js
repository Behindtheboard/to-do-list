import transformName from "./transformName";

export default function displayList(list) {
    const processedListName = transformName(list);

    const container = document.querySelector('#container')
    container.innerHTML = '';
    
    const listDisplay = document.createElement('div');
    listDisplay.setAttribute('id', `${processedListName}-list-display`)
    container.appendChild(listDisplay);

    const listName = document.createElement('h2');
    listName.textContent = list.name; 
    listDisplay.appendChild(listName);

    const taskListDisplay = document.createElement('div')
    taskListDisplay.setAttribute('id', `${processedListName}-task-display`)
    listDisplay.appendChild(taskListDisplay);

    const newTaskButton = document.createElement('button');
    newTaskButton.setAttribute('id', 'new-task-button');
    newTaskButton.textContent = "New Task";
    listDisplay.appendChild(newTaskButton);
};