export default function newListDialog() {
  const newListDialog = document.createElement("dialog");
  newListDialog.setAttribute("id", "new-list-dialog");
  document.getElementById("dialog").appendChild(newListDialog);
  const newListForm = document.createElement("form");
  newListForm.setAttribute("method", "dialog");
  newListForm.setAttribute("id", "new-list-form");
  newListDialog.appendChild(newListForm);

  const listNameDiv = document.createElement("div");
  listNameDiv.setAttribute("id", "new-name-input-div");
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "new-list-input");
  nameLabel.setAttribute("id", "list-name-input");
  nameLabel.textContent = "New List Name";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "new-list-input");
  nameInput.setAttribute("name", "new-list-input");
  nameInput.required = true;
  listNameDiv.appendChild(nameLabel);
  listNameDiv.appendChild(nameInput);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.setAttribute("id", "new-list-buttons-div");
  const addButton = document.createElement("button");
  addButton.setAttribute("type", "submit");
  addButton.setAttribute("id", "add-list-button-dialog");
  addButton.textContent = "Add";
  const nvmButton = document.createElement("button");
  nvmButton.setAttribute("id", "nvm-button");
  nvmButton.textContent = "Nvm";
  buttonsDiv.appendChild(addButton);
  buttonsDiv.appendChild(nvmButton);

  newListForm.appendChild(listNameDiv);
  newListForm.appendChild(buttonsDiv);
}
