class Task {
    constructor(name){
        this.name= name;
        this.completed = false;
    }

    complete(){
        this.completed = !this.completed
        console.log("task changed to " + this.completed)
    }

    print(){
        if(!this.completed){
            console.log("To do: " + this.name);
            
        } else {
            console.log("Completed: " + this.name)
        }
    }
}

const task1 = new Task("learn Node")
task1.print();
task1.complete()
task1.print();