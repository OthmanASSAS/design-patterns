const Task = function (name) {
    this.name = name;
    /*  this.print =  function(){
         console.log("I have to " + this.name)
     } */
}

// En utilisant le prototype, la methode print est héritée par toutes les instances et n'est pas recréée comme c'était le cas dans le 01_constructor_pattern

Task.prototype.print = function () {
    console.log("I have to " + this.name);
}

const task1 = new Task("learn Typescript")
const task2 = new Task("learn flutter")

task1.print();
task2.print();
task2.print();