import newTaskModalHandler from "./newTaskModalHandler";

export default function taskHandler(obj) {
    obj.library.forEach((list) =>{
        list.taskList.forEach((task) => {
            document.querySelector(`#${task.name.replace(/\s+/g, '')}-info-button`).addEventListener('click', () => {
                console.log(`#${task.name.replace(/\s+/g, '')}-info-button`);

        })
        });
    });
}