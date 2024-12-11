import "./style.css";
import { list, displayListPage } from "./temp-list/list.js";
import Task from "./temp-task/task.js";
import displayTask from "./temp-task/displayTask.js";
import {
  listLibrary,
  displayListLibrary,
} from "./temp-listLibrary/listLibrary.js";
import infoButtonHandler from "./temp-task/infoButtonHandler.js";
import deleteButtonHandler from "./temp-task/deleteButtonHandler.js";
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

infoButtonHandler(toDoLists);
deleteButtonHandler(toDoLists);
