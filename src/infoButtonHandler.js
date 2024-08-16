import updateTaskDialog from "./updateTaskDialog.js";
import updateTaskDialogHandler from "./updateTaskDialogHandler.js";
import transformName from "./transformName.js";

export default function infoButtonHandler(obj) {
    
    obj.library.forEach((list) =>{
        list.taskList.forEach((task) => { 
            const processedTaskName = transformName(task);

            updateTaskDialog(processedTaskName)

            const updateTaskPriorityDialog = document.querySelector(`#${processedTaskName}-update-task-priority-dialog`);
            const taskNameInput = document.querySelector(`#${processedTaskName}-update-task-name-input`);
            const prioritySelect = document.querySelector(`#${processedTaskName}-update-priority-input`);
            const dueDateInput = document.querySelector(`#${processedTaskName}-update-due-date-input`);

            document.querySelector(`#${processedTaskName}-info-button`).addEventListener('click', () => {
                updateTaskPriorityDialog.showModal();
                    
                taskNameInput.value = task.getName();
                prioritySelect.value = task.getPriority();
                dueDateInput.value = task.getDueDate();

                updateTaskDialogHandler(obj, list, processedTaskName, task);
            });
        });
    });   
}