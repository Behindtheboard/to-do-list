import "./style.css";
import { list, displayListPage } from "./list/list.js";
import { displayTask } from "./task/task.js";
import {
  listLibrary,
  displayListLibrary,
} from "./listLibrary/listLibrary.js";

const toDoLists = listLibrary();

const defaultList = list("Default");

toDoLists.addList(defaultList);

displayListLibrary(toDoLists);
displayListPage(defaultList, toDoLists);
displayTask(defaultList);
