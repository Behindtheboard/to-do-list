import './style.css'
import {list, displayListPage} from './temp-list/list.js';
import Task from './temp-task/task.js';
import displayTask from './temp-task/displayTask.js';
import listLibrary from './temp-listLibrary/listLibrary.js';
import displayListLibrary from './temp-listLibrary/displayListLibrary.js';
import listLibraryHandler from './temp-listLibrary/listLibraryHandler.js';
import newListHandler from './temp-listLibrary/newListHandler.js';
import newTaskDialogHandler from './temp-list/newTaskDialogHandler.js';
import updateTaskDialog from './temp-task/updateTaskDialog.js'
import infoButtonHandler from './temp-task/infoButtonHandler.js';
import deleteButtonHandler from './temp-task/deleteButtonHandler.js';
import currentDate from './currentDate.js';

const toDoLists = listLibrary();
const date = new Date();

const defaultList = list('Default');
const newTask = new Task('New Task')
newTask.setDueDate(currentDate());
defaultList.newTask(newTask);
displayListPage(defaultList);
displayTask(defaultList);
toDoLists.addList(defaultList);

displayListLibrary(toDoLists);
listLibraryHandler(toDoLists);
newListHandler(toDoLists);
infoButtonHandler(toDoLists);
newTaskDialogHandler(toDoLists);
deleteButtonHandler(toDoLists);
