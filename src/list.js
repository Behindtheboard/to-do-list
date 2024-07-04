export default function list(title) {
    const taskList = [];
    
    const newTask = function(task) {
        taskList.push(task);
    }

    return {title, taskList, newTask};
}