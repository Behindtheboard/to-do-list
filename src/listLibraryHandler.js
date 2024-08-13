import displayList from "./displayList.js";
import displayTask from "./displayTask.js";
import newTaskButtonHandler from "./newTaskButtonHandler.js";
import newTaskDialogHandler from "./newTaskDialogHandler.js";
import newTaskDialog from "./newTaskDialog.js";

export default function listLibraryHandler(obj) {
    obj.library.forEach((list) =>{
        document.querySelector(`#${list.name.replace(/\s+/g, '')}-list-button`).addEventListener('click', () => {
            displayList(list);
            displayTask(list);
            newTaskDialog();
            newTaskButtonHandler();
            newTaskDialogHandler(obj)
        });
    });
}