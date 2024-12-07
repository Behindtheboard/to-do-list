import './style.css'
import list from './temp-list/list.js';
import Task from './task.js';
import displayList from './temp-list/displayList.js';
import displayTask from './displayTask.js';
import listLibrary from './listLibrary.js';
import displayListLibrary from './displayListLibrary.js';
import listLibraryHandler from './listLibraryHandler.js';
import newListHandler from './temp-listLibrary/newListHandler.js';
import newTaskDialog from './newTaskDialog.js';
import newTaskDialogHandler from './newTaskDialogHandler.js';
import newTaskButtonHandler from './newTaskButtonHandler.js';
import updateTaskDialog from './updateTaskDialog.js'
import infoButtonHandler from './temp-task/infoButtonHandler.js';
import deleteButtonHandler from './temp-task/deleteButtonHandler.js';
import currentDate from './currentDate.js';

const toDoLists = listLibrary();
const date = new Date();

const defaultList = list('Default');
const newTask = new Task('New Task')
newTask.setDueDate(currentDate());
defaultList.newTask(newTask);
displayList(defaultList);
displayTask(defaultList);
toDoLists.addList(defaultList);

newTaskDialog();

displayListLibrary(toDoLists);
listLibraryHandler(toDoLists);
newListHandler(toDoLists);
infoButtonHandler(toDoLists);
newTaskButtonHandler(toDoLists);
newTaskDialogHandler(toDoLists);
deleteButtonHandler(toDoLists);
