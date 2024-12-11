import "./style.css";
import { list, displayListPage } from "./temp-list/list.js";
import { displayTask } from "./temp-task/task.js";
import {
  listLibrary,
  displayListLibrary,
} from "./temp-listLibrary/listLibrary.js";

const toDoLists = listLibrary();

const defaultList = list("Default");

toDoLists.addList(defaultList);

displayListLibrary(toDoLists);
displayListPage(defaultList, toDoLists);
displayTask(defaultList);
