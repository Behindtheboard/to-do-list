import "./style.css";
import { list, displayListPage } from "./temp-list/list.js";
import { Task, displayTask } from "./temp-task/task.js";
import {
  listLibrary,
  displayListLibrary,
} from "./temp-listLibrary/listLibrary.js";
import currentDate from "./currentDate.js";

const toDoLists = listLibrary();
const date = new Date();

const defaultList = list("Default");
const newTask = new Task("New Task");

newTask.setDueDate(currentDate());
defaultList.newTask(newTask);

displayListPage(defaultList, toDoLists);
displayTask(defaultList);

toDoLists.addList(defaultList);

displayListLibrary(toDoLists);

