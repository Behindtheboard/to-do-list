import './style.css'
import list from './list.js';
import displayList from './displayList.js';
import Task from './task.js';
import displayTask from './displayTask.js';
import listLibrary from './listLibrary.js';
import displayListLibrary from './displayListLibrary.js';

const defaultList = list('Default');
const cleanUpRoom = new Task('New Task')
const dohw = new Task('do hw')

defaultList.newTask(cleanUpRoom);
defaultList.newTask(dohw);

console.log(cleanUpRoom.name)
console.log(defaultList.taskList)

displayList(defaultList);
displayTask(defaultList);

const toDoLists = listLibrary();
toDoLists.addList(defaultList);

console.log(toDoLists.library);
displayListLibrary(toDoLists);