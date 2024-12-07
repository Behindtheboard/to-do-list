import displayList from "./displayList.js";
import displayTask from "./displayTask.js";
import newTaskButtonHandler from "./newTaskButtonHandler.js";
import newTaskDialogHandler from "./newTaskDialogHandler.js";
import newTaskDialog from "./newTaskDialog.js";
import transformName from "./transformName";

export default function listLibraryHandler(obj) {
    obj.library.forEach((list) =>{
        const processedListName = transformName(list);
        document.querySelector(`#${processedListName}-list-button`).addEventListener('click', () => {
            displayList(list);
            displayTask(list);
            newTaskDialog();
            newTaskButtonHandler();
            newTaskDialogHandler(obj)
        });
    });
}