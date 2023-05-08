const TYPES = {
    event : "event",
    todo: "todo"
}

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

class TodoTask extends Task {
    constructor(name) {
        super(name)
        this.priorities = ["normal", "high"];
        this.priority = 0;
    }
    makeUrgent() {
        this.priority = !this.priority
    }
    toString() {
        if (this.priority) {
            console.log("High priority task: " + this.name);
            return
        }
        console.log("Task: " + this.name)
    }
}

class TaskFactory {
    createTask(type, name){
        switch (type) {
            case TYPES.event:
                return new EventTask(name)
            case TYPES.todo:
                return new TodoTask(name)
        }
    }
}

const task1 = new Task("learn javascript design patterns");
const task2 = new Task("learn flutter");
const ev = new EventTask("learn javascript design patterns");
const todo = new TodoTask("create new class JS")

task1.toString();
task2.toString();
task1.complete();
task1.toString();
ev.toString();
todo.toString();
todo.makeUrgent();
todo.toString();

// factory
console.log("=== factory ===")
const factory = new TaskFactory();
const evt1 = factory.createTask(TYPES.event, " event learn factory pattern");
evt1.toString()
const newTask = factory.createTask(TYPES.todo, "pay bills");
newTask.makeUrgent()
newTask.toString()