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

import { list } from "../temp-list/list.js";
import newListDialog from "./newListDialog.js";
import transformName from "../transformName";

export function displayListLibrary(obj) {
  const listLibraryDisplay = document.getElementById("list-library-display");

  obj.library.forEach((list) => {
    const processedListName = transformName(list);
    const listSidebar = document.createElement("button");
    listSidebar.setAttribute("id", `${processedListName}-list-button`);
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
        document.querySelector("#list-library-display").innerHTML = "";

        const newList = list(nameInput.value);
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

// function newListDialogHandler(obj) {
//   document
//     .getElementById("add-list-button-dialog")
//     .addEventListener("click", () => {
//       document.querySelector("#list-library-display").innerHTML = "";

//       const newList = list(nameInput.value);
//       obj.addList(newList);
//       displayListLibrary(obj);
//       listLibraryHandler(obj);
//     });

//   document.querySelector("#nvm-button").addEventListener("click", (event) => {
//     event.preventDefault();
//     newListDialog.close();
//   });
// }
