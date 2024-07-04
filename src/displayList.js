export default function displayList(list) {
    const container = document.querySelector('#container')

    const listDisplay = document.createElement('div');
    listDisplay.setAttribute('id', `${list.name}-display`)
    container.appendChild(listDisplay);

    const listName = document.createElement('h2');
    listName.textContent = list.name; 
    listDisplay.appendChild(listName);

    const taskListDisplay = document.createElement('div')
    taskListDisplay.setAttribute('id', `${list.name}-task-display`)
    listDisplay.appendChild(taskListDisplay);
}