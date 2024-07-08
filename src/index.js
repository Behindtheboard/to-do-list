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
const grocerylist = list('groceries');
const cleanUpRoom = new Task('New Task')
const dohw = new Task('do hw')

const apple = new Task('apple');

defaultList.newTask(cleanUpRoom);
defaultList.newTask(dohw);

grocerylist.newTask(apple);
console.log(grocerylist.taskList)

displayList(grocerylist);
displayTask(grocerylist);

toDoLists.addList(defaultList);
toDoLists.addList(grocerylist);
console.log(toDoLists.library);
displayListLibrary(toDoLists);
listLibraryHandler(toDoLists)