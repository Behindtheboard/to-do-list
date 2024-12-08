export function list(name) {
    let taskList = [];
    
    const newTask = function(task) {
        taskList.push(task);
    }

    const deleteTask = function(task) {
        const index = taskList.findIndex(item => item.name != task.name)
        taskList.splice(index-1, 1);
    }

    return {name, taskList, newTask, deleteTask};
}

import newTaskDialog from "./newTaskDialog";

export function displayListPage(list) {
    const container = document.querySelector('#container')
    container.innerHTML = '';

    const listPageDisplay = document.createElement('div');
    listPageDisplay.setAttribute('id', `page-list-display`)
    container.appendChild(listPageDisplay);

    const listName = document.createElement('h2');
    listName.textContent = list.name; 
    listPageDisplay.appendChild(listName);

    const tasksContainer = document.createElement('div')
    tasksContainer.setAttribute('id', `$tasks-container`)
    listPageDisplay.appendChild(tasksContainer);

    const newTaskButton = document.createElement('button');
    newTaskButton.setAttribute('id', 'new-task-button');
    newTaskButton.textContent = "New Task";
    listPageDisplay.appendChild(newTaskButton);
    
    newTaskDialog()
    newTaskButtonHandler()
};


function newTaskButtonHandler() {
    const newTaskDialog = document.querySelector('#new-task-dialog');

    document.querySelector('#new-task-button').addEventListener('click', () => {
        newTaskDialog.showModal()
    });

}