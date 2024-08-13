import updateTaskDialogHandler from "./updateTaskDialogHandler.js";

export default function infoButtonHandler(obj) {
    const updateTaskPriorityDialog = document.querySelector('#update-task-priority-dialog');
    const taskNameInput = document.querySelector('#update-task-name-input');
    const prioritySelect = document.querySelector('#update-priority-input');
    const dueDateInput = document.querySelector('#update-due-date-input');
    const updateTaskButton = document.querySelector('#update-task-button');

    // const showModal = function(event) {
    //     obj.library.forEach((list) =>{
    //         list.taskList.forEach((task) => {   
    //             console.log(event.target.id);
    //             if (event.target.id === `${task.name.replace(/\s+/g, '')}-info-button`) {
    //                 updateTaskPriorityDialog.showModal();
            
    //                 taskNameInput.value = task.getName();
    //                 prioritySelect.value = task.getPriority();
    //                 dueDateInput.value = task.getDueDate();     
    //             }
    //         });
    //     });
    // }
         
    // document.querySelector("button[id$='-info-button']").addEventListener('click', showModal);
    
    // obj.library.forEach((list) =>{
    //     list.taskList.forEach((task) => {          
    //         document.querySelector('#update-task-button').addEventListener('click', () => {
    //             document.querySelector(`#${task.name.replace(/\s+/g, '')}-info-button`).removeEventListener('click', showModal);
    //         });
    //         document.querySelector('#add-task-button').addEventListener('click', () => {
    //             document.querySelector(`#${task.name.replace(/\s+/g, '')}-info-button`).removeEventListener('click', showModal);
    //         });
    //     });
    // });

    obj.library.forEach((list) =>{
        list.taskList.forEach((task, index) => { 
            document.querySelector(`#${task.name.replace(/\s+/g, '')}-info-button`).addEventListener('click', () => {
                
                console.log(task.name);
                console.log(index);
                console.log(list[index]);

                updateTaskPriorityDialog.showModal();
                // updateTaskButton.setAttribute('id', `#${task.name.replace(/\s+/g, '')}-update-task-button`);
                    
                taskNameInput.value = task.getName();
                prioritySelect.value = task.getPriority();
                dueDateInput.value = task.getDueDate();
                updateTaskDialogHandler(obj);     
            });
        });
    });
}