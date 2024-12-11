import { list } from "../temp-list/list.js";
import { displayListPage } from "../temp-list/list.js";
import { displayTask } from "../temp-task/task.js";
import newListDialog from "./newListDialog.js";

export function listLibrary() {
  const library = [];

  const addList = function (list) {
    library.push(list);
  };

  const getLibrary = function () {
    return library;
  };

  const deleteList = function (index) {
    library.splice(index, 1);
  };

  return { library, getLibrary, addList, deleteList };
}

export function displayListLibrary(obj) {
  const listLibraryDisplay = document.getElementById("list-library-display");
  listLibraryDisplay.innerHTML = "";

  obj.library.forEach((list) => {
    const listButton = document.createElement("button");
    listButton.classList.add("list-button");
    listButton.textContent = list.name;
    listLibraryDisplay.appendChild(listButton);

    const inButtons = document.createElement("div");
    listButton.classList.add("in-buttons");
    listButton.appendChild(inButtons);

    const listRename = document.createElement("button");
    listRename.classList.add("rename-list-button");
    listRename.textContent = "i";
    inButtons.appendChild(listRename);

    const listDelete = document.createElement("button");
    listDelete.classList.add("delete-list-button");
    listDelete.textContent = "Delete";
    inButtons.appendChild(listDelete);
  });

  listLibraryHandler(obj);
  newListHandler(obj);
  updateListHandler(obj);
}

function newListHandler(obj) {
  document.getElementById("new-list-button").addEventListener("click", () => {
    document.getElementById("dialog").innerHTML = "";

    newListDialog();

    const newListDialogEl = document.getElementById("new-list-dialog");
    const newListInput = document.getElementById("new-list-input");
    const newListForm = document.getElementById("new-list-form");

    newListDialogEl.showModal();

    newListInput.addEventListener("input", (e) => {
      const trimmedInput = newListInput.value.trim();
      if (!trimmedInput) {
        newListInput.setCustomValidity("Need a name for new List!");
        newListInput.reportValidity();
        return;
      } else if (
        obj.library.map((el) => el.name).includes(newListInput.value)
      ) {
        newListInput.setCustomValidity("Already a List name");
        newListInput.reportValidity();
        return;
      } else {
        newListInput.setCustomValidity("");
      }
    });

    newListForm.noValidate = true;

    newListForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (newListInput.checkValidity()) {
        const newList = list(newListInput.value);
        obj.addList(newList);

        newListInput.value = "";
        newListInput.setCustomValidity("");

        displayListLibrary(obj);
        displayListPage(newList);
        displayTask(newList);

        newListDialogEl.close();
      } else {
        newListInput.reportValidity();
      }
    });

    document.querySelector("#nvm-button").addEventListener("click", (e) => {
      e.preventDefault();
      newListDialogEl.close();
    });
  });
}

function listLibraryHandler(obj) {
  const listLibraryDisplay = document.getElementById("list-library-display");
  const newlistLibraryDisplay = listLibraryDisplay.cloneNode(true);
  listLibraryDisplay.parentNode.replaceChild(
    newlistLibraryDisplay,
    listLibraryDisplay
  );

  newlistLibraryDisplay.addEventListener("click", (e) => {
    const clickedButton = e.target.closest(".list-button");
    if (!clickedButton) return;
    const listButtons = [...document.querySelectorAll(".list-button")];
    const index = listButtons.indexOf(clickedButton);
    displayListPage(obj.library[index]);
    displayTask(obj.library[index]);
  });
}

function updateListHandler(obj) {
  const listLibraryDisplay = document.getElementById("list-library-display");

  listLibraryDisplay.addEventListener("click", (e) => {
    const renameButton = e.target.closest(".rename-list-button");
    const deleteButton = e.target.closest(".delete-list-button");

    if (renameButton) {
      document.getElementById("dialog").innerHTML = "";
      newListDialog();

      const newListDialogEl = document.getElementById("new-list-dialog");

      newListDialogEl.showModal();
    }

    if (deleteButton) {
      const deleteButtonList = [
        ...document.querySelectorAll(".delete-list-button"),
      ];
      const index = deleteButtonList.indexOf(deleteButton);

      obj.deleteList(index);
      if (!obj.library[0]) {
        document.querySelector("#page-list-display h2").textContent =
          "Add new List!";
        document.querySelector("#page-list-display button").remove();
      }

      displayListLibrary(obj);
    }
    return;
  });
}
