export default function list(name) {
    const taskList = [];
    
    const newTask = function(task) {
        taskList.push(task);
    }

    return {name, taskList, newTask};
}