import './style.css'
import list from './list.js';
import displayList from './displayList.js';
import Task from './task.js';
import displayTask from './displayTask.js';
import listLibrary from './listLibrary.js';
import displayListLibrary from './displayListLibrary.js';
import listLibraryHandler from './listLibraryHandler.js';

const toDoLists = listLibrary();
const defaultList = list('Default');

const newTask = new Task('New Task')
defaultList.newTask(newTask);

const grocerylist = list('groceries');
const apple = new Task('apple');
grocerylist.newTask(apple);

displayList(defaultList);
displayTask(defaultList);

toDoLists.addList(defaultList);
toDoLists.addList(grocerylist);

displayListLibrary(toDoLists);
listLibraryHandler(toDoLists)