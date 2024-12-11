export default function taskNameValidation(list) {
  const newTaskName = document.getElementById("task-name-input");
  newTaskName.addEventListener("input", (e) => {
    const trimmedInput = newTaskName.value.trim();
    if (!trimmedInput) {
      newTaskName.setCustomValidity("Need a name for the Task!");
      newTaskName.reportValidity();
      return;
    } else if (list.taskList.map((el) => el.name).includes(newTaskName.value)) {
      newTaskName.setCustomValidity("Already a Task name!");
      newTaskName.reportValidity();
      return;
    } else {
      newTaskName.setCustomValidity("");
    }
  });
}
