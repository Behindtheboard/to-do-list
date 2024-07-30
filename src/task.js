export default class Task {
    constructor(name) {
        this.name = name;
        this.done = false;
        this.priority = 'Low';
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
        this.priority = level
    }


}