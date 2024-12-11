import { list } from "../temp-list/list.js";
import { displayListPage } from "../temp-list/list.js";
import displayTask from "../temp-task/displayTask.js";
import newListDialog from "./newListDialog.js";

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

        document.getElementById("list-library-display").innerHTML = "";
        displayListLibrary(obj);
        listLibraryHandler(obj);

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
    const listButtons = [...document.querySelectorAll(".list-button")]
    const index = listButtons.indexOf(clickedButton);
    displayListPage(obj.library[index]);
    displayTask(obj.library[index]);
  });
}
