import './style.css'
import list from './list.js';
import Task from './task.js';
import displayList from './displayList.js';
import displayTask from './displayTask.js';
import listLibrary from './listLibrary.js';
import displayListLibrary from './displayListLibrary.js';
import listLibraryHandler from './listLibraryHandler.js';
import newListHandler from './newListHandler.js';
import newTaskModalHandler from './newTaskModalHandler.js';
import updateTaskDialogHandler from './updateTaskDialogHandler.js';
import updateTaskDialog from './updateTaskDialog.js'
import currentDate from './currentDate.js';
import infoButtonHandler from './infoButtonHandler.js';

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
newTaskModalHandler(toDoLists);
updateTaskDialog();
updateTaskDialogHandler(toDoLists);
infoButtonHandler(toDoLists);
