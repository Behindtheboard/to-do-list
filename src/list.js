export default function list(name) {
    const name = name;
    const list = {};
    
    const newToDo = function(toDo) {
        list.push(toDo);
    }

    return {name, newToDo};
}