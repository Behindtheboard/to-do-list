import "./style.css";
import { list, displayListPage } from "./list/list.js";
import { Task, displayTask } from "./task/task.js";
import { listLibrary, displayListLibrary } from "./listLibrary/listLibrary.js";

function init() {
  let toDoLists;

  if (!localStorage.getItem("init")) {
    toDoLists = listLibrary();

    const defaultList = list("Default");

    toDoLists.addList(defaultList);

    localStorage.setItem("init", JSON.stringify(toDoLists));
    
    console.log("init");
  } else {
    const storedObj = JSON.parse(localStorage.getItem("init"));

    if (storedObj.library.length === 0) {
        localStorage.removeItem('init')
        location.reload()
    }

    toDoLists = listLibrary();

    storedObj.library.forEach((oldlist) => {
      const newList = list(oldlist.name);

      oldlist.taskList.forEach((task) => {
        const newTask = new Task();
        newTask.setName(task.name);
        newTask.setDone(task.done);
        newTask.setPriority(task.priority);
        newTask.setDueDate(task.dueDate);

        newList.newTask(newTask);
      });

      toDoLists.addList(newList);
    });

    console.log("stored information");
  }

  displayListLibrary(toDoLists);
  displayListPage(toDoLists.library[0], toDoLists);
  displayTask(toDoLists.library[0], toDoLists);
}

init();

export function saveToLocalStorage(obj) {
  console.log(`saved:`);
  console.log(obj);
  localStorage.setItem("init", JSON.stringify(obj));
}
