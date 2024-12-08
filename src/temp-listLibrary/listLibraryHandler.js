import {displayListPage} from "../temp-list/list.js";
import displayTask from "../temp-task/displayTask.js";
import newTaskDialogHandler from "../temp-list/newTaskDialogHandler.js";
import newTaskDialog from "../temp-list/newTaskDialog.js";
import transformName from "../transformName";

export default function listLibraryHandler(obj) {
    obj.library.forEach((list) =>{
        const processedListName = transformName(list);
        document.querySelector(`#${processedListName}-list-button`).addEventListener('click', () => {
            displayListPage(list);
            displayTask(list);
            newTaskDialog();
            newTaskDialogHandler(obj)
        });
    });
}