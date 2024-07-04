export default class Task {
    constructor(name) {
        this.name = name;
        this.done = false;
    }

    finished() {
        this.done = true;
    }

}