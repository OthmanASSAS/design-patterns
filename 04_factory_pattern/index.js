class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    complete() {
        this.completed = !this.completed
        console.log("task changed to " + this.completed)
    }

    toString() {
        if (!this.completed) {
            console.log("To do: " + this.name);

        } else {
            console.log("Completed: " + this.name)
        }
    }
}

class EventTask extends Task {
    constructor(name) {
        super(name)
        this.date = new Date();
        this.scheduleDate = this.date.setDate(this.date.getDate() + 2)
    }

    toString() {
        if (this.scheduleDate < new Date()) {
            console.log("This event is past due");
            return
        }
        console.log("This event is scheduled on: " + new Date(this.scheduleDate).toLocaleDateString())
    }
}
const task1 = new Task("learn javascript design patterns");
const task2 = new Task("learn flutter");
const ev = new EventTask("learn javascript design patterns");

task1.toString();
task2.toString();
task1.complete();
task1.toString();
ev.toString();
