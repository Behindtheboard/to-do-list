import './style.css'
import list from './list.js';
import displayList from './displayList.js';
import Task from './task.js';

const defaultList = list('Default');
const cleanUpRoom = new Task('NewTask')
const dohw = new Task('do hw')
defaultList.newTask(cleanUpRoom);
defaultList.newTask(dohw);
console.log(cleanUpRoom.name)
console.log(defaultList.taskList)
displayList(defaultList);