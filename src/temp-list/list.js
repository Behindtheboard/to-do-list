export default function list(name) {
    let taskList = [];
    
    const newTask = function(task) {
        taskList.push(task);
    }

    const deleteTask = function(task) {
        const index = taskList.findIndex(item => item.name != task.name)
        taskList.splice(index-1, 1);
    }

    return {name, taskList, newTask, deleteTask};
}