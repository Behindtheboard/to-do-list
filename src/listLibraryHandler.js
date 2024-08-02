import displayList from "./displayList";
import displayTask from "./displayTask";
import newTaskModalHandler from "./newTaskModalHandler";

export default function listLibraryHandler(obj) {
    obj.library.forEach((list) =>{
        document.querySelector(`#${list.name.replace(/\s+/g, '')}-list-button`).addEventListener('click', () => {
            displayList(list);
            displayTask(list);
            newTaskModalHandler();
        });
    });
}