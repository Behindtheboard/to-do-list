export default class Task {
    constructor(name) {
        this.name = name;
        this.done = false;
        this.priority = 'Low';
        this.dueDate = '';
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getDone() {
        return this.done;
    }
    setDone() {
        this.done = true;
    }
    undoDone() {
        this.done = false;
    }

    getPriority() {
        return this.priority;
    }
    setPriority(level) {
        this.priority = level;
    }

    getDueDate() {
        return this.dueDate;
    }
    setDueDate(date) {
        this.dueDate = date;
    }


}