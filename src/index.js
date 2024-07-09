import './style.css'
import list from './list.js';
import Task from './task.js';
import displayList from './displayList.js';
import displayTask from './displayTask.js';
import listLibrary from './listLibrary.js';
import displayListLibrary from './displayListLibrary.js';
import listLibraryHandler from './listLibraryHandler.js';
import newTaskModalHandler from './newTaskModalHandler.js';

const toDoLists = listLibrary();

const defaultList = list('Default');
const newTask = new Task('New Task')
defaultList.newTask(newTask);

displayList(defaultList);
displayTask(defaultList);

toDoLists.addList(defaultList);

const grocerylist = list('groceries');
const apple = new Task('apple');
grocerylist.newTask(apple);
toDoLists.addList(grocerylist);

displayListLibrary(toDoLists);
listLibraryHandler(toDoLists)
newTaskModalHandler(toDoLists);