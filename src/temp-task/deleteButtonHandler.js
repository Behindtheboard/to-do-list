import displayTask from "./displayTask";
import infoButtonHandler from "./infoButtonHandler";
import transformName from "../transformName";

export default function deleteButtonHandler(obj) {
    obj.library.forEach((list) =>{
        list.taskList.forEach((task) => { 
            const processedListName = transformName(list);
            const processedTaskName = transformName(task);

            document.querySelector(`#${processedTaskName}-delete-button`).addEventListener('click', () => {
                list.deleteTask(task);
                document.querySelector(`#${processedListName}-task-display`).innerHTML = '';
                displayTask(list);
                infoButtonHandler(obj);
                deleteButtonHandler(obj);
            });
        });
    });   
}