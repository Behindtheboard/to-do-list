import currentTask from "./currentTask.js";
import updateTaskDialogHandler from "./updateTaskDialogHandler.js";

export default function infoButtonHandler(obj) {
    const updateTaskPriorityDialog = document.querySelector('#update-task-priority-dialog');
    const taskNameInput = document.querySelector('#update-task-name-input');
    const prioritySelect = document.querySelector('#update-priority-input');
    const dueDateInput = document.querySelector('#update-due-date-input');

    const currentTaskInfo = currentTask();

    obj.library.forEach((list) =>{
        list.taskList.forEach((task) => { 
            document.querySelector(`#${task.name.replace(/\s+/g, '')}-info-button`).addEventListener('click', () => {
                
                // currentTaskInfo.setCurrentTask(task);

                updateTaskPriorityDialog.showModal();
                    
                taskNameInput.value = task.getName();
                prioritySelect.value = task.getPriority();
                dueDateInput.value = task.getDueDate();

                updateTaskDialogHandler(obj, list, task);
                // currentTaskInfo.getCurrentTask()
            });
        });
    });   
}