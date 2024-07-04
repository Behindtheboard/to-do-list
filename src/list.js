export default function list(name) {
    const name = name;
    const list = {};
    
    const newTask = function(task) {
        list.push(task);
    }

    return {name, newToDo};
}