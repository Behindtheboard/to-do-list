import displayTask from "./displayTask";
import infoButtonHandler from "./infoButtonHandler";

export default function deleteButtonHandler(obj) {
    obj.library.forEach((list) =>{
        list.taskList.forEach((task) => { 
            document.querySelector(`#${task.name.replace(/\s+/g, '')}-delete-button`).addEventListener('click', () => {
                console.log(task)
                console.log(list.taskList)
                list.deleteTask(task);
                document.querySelector(`#${list.name.replace(/\s+/g, '')}-task-display`).innerHTML = '';
                displayTask(list);
                infoButtonHandler(obj);
                console.log(task);
            });
        });
    });   
}