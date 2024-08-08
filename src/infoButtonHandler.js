export default function infoButtonHandler(obj) {
    const updateTaskPriorityDialog = document.querySelector('#update-task-priority-dialog');
    const taskNameInput = document.querySelector('#update-task-name-input');
    const prioritySelect = document.querySelector('#update-priority-input');
    const dueDateInput = document.querySelector('#update-due-date-input');

    const showModal = function(event) {
        obj.library.forEach((list) =>{
            list.taskList.forEach((task) => {   
                if (event.target.id = `#${task.name.replace(/\s+/g, '')}-info-button`) {
                    updateTaskPriorityDialog.showModal();
            
                    taskNameInput.value = task.getName();
                    prioritySelect.value = task.getPriority();
                    dueDateInput.value = task.getDueDate();     
                }
            });
        });
    }
         
    document.querySelector("button[id$='-info-button']").addEventListener('click', showModal);   

    obj.library.forEach((list) =>{
        list.taskList.forEach((task) => {          
            document.querySelector('#update-task-button').addEventListener('click', () => {
                document.querySelector(`#${task.name.replace(/\s+/g, '')}-info-button`).removeEventListener('click', showModal);
            });
        });
    });
}