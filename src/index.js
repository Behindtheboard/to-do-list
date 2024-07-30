import './style.css'
import list from './list.js';
import Task from './task.js';
import displayList from './displayList.js';
import displayTask from './displayTask.js';
import listLibrary from './listLibrary.js';
import displayListLibrary from './displayListLibrary.js';
import listLibraryHandler from './listLibraryHandler.js';
import newTaskModalHandler from './newTaskModalHandler.js';
import newListHandler from './newListHandler.js';
import taskHandler from './taskHandler.js';

const toDoLists = listLibrary();

const defaultList = list('Default');
const newTask = new Task('New Task')
defaultList.newTask(newTask);
displayList(defaultList);
displayTask(defaultList);
toDoLists.addList(defaultList);

displayListLibrary(toDoLists);
listLibraryHandler(toDoLists);
newListHandler(toDoLists);
newTaskModalHandler(toDoLists);
taskHandler(toDoLists);
