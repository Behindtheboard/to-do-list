import './style.css'
import list from './list.js';
import Task from './task.js';
import displayList from './displayList.js';
import displayTask from './displayTask.js';
import listLibrary from './listLibrary.js';
import displayListLibrary from './displayListLibrary.js';
import listLibraryHandler from './listLibraryHandler.js';
import newListHandler from './newListHandler.js';
import newTaskDialog from './newTaskDialog.js';
import newTaskDialogHandler from './newTaskDialogHandler.js';
import newTaskButtonHandler from './newTaskButtonHandler.js';
import updateTaskDialogHandler from './updateTaskDialogHandler.js';
import updateTaskDialog from './updateTaskDialog.js'
import infoButtonHandler from './infoButtonHandler.js';
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

displayListLibrary(toDoLists);
listLibraryHandler(toDoLists);
newListHandler(toDoLists);
newTaskDialog();
updateTaskDialog();
newTaskButtonHandler(toDoLists)
updateTaskDialogHandler(toDoLists);
newTaskDialogHandler(toDoLists);
// infoButtonHandler(toDoLists);
