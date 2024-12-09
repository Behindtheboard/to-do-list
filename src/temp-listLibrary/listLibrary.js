import {list} from "../temp-list/list.js";
import newListDialog from "./newListDialog.js";
import {displayListPage} from "../temp-list/list.js";
import displayTask from "../temp-task/displayTask.js";

export function listLibrary() {
  const library = [];

  const addList = function (list) {
    library.push(list);
  };

  const getLibrary = function () {
    return library;
  };
  return { library, getLibrary, addList };
}

export function displayListLibrary(obj) {
  const listLibraryDisplay = document.getElementById("list-library-display");

  obj.library.forEach((list) => {
    const listSidebar = document.createElement("button");
    listSidebar.classList.add("list-button");
    listSidebar.textContent = list.name;
    listLibraryDisplay.appendChild(listSidebar);
  });

  newListHandler(obj);
}

export function newListHandler(obj) {
  document.getElementById("new-list-button").addEventListener("click", () => {
    document.getElementById("dialog").innerHTML = "";
    newListDialog();
    document.getElementById("new-list-dialog").showModal();
    document
      .getElementById("add-list-button-dialog")
      .addEventListener("click", () => {
        document.getElementById("list-library-display").innerHTML = "";

        const newList = list(document.getElementById('new-list-input').value);
        obj.addList(newList);
        displayListLibrary(obj);
        listLibraryHandler(obj);
      });

    document.querySelector("#nvm-button").addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("new-list-dialog").close();
    });
  });
}

export function listLibraryHandler(obj) {
    const listButtons = document.querySelectorAll(".list-button");
    listButtons.forEach((element, index) => {
      element.addEventListener("click", () => {
        displayListPage(obj.library[index]);
        displayTask(obj.library[index]);
      });
    });
  }
  