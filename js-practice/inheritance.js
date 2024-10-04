//create a vehicle class
var Vehicle = function(){

};

//add a method to vehicle class
Vehicle.prototype.run = function(){
    console.log('Vehicle runs')
};

// create a Car class
var Car = function(){

};

//inheritance Car inherits from Vehicle
Car.prototype = Object.create(Vehicle.prototype);

//Create a instance of Car
let car1 = new Car();
console.log(car1);

// accessing parent class method run
car1.run();

///////////////////////////////////////////////////////////////

//Create a Person constructor
var Person = function(name){
    this.name = name;
}

// add methods to Person class
Person.prototype.walk = function(){
    console.log('I can walk');
}

Person.prototype.talk = function(){
    console.log('Hi, my name is '+ this.name);
}

// Create a student constructor
var Student = function(name, branch){
    Person.call(this,name);
    this.branch = branch
}

//inheritance student inherits from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

//add talk method to student
Student.prototype.talk = function(){
    console.log('I am '+ this.name + ' I study '+ this.branch )
}

var person1 = new Person('Amit');
console.log(person1); // Person {name: "Amit"}
console.log(person1.talk()); // Hi, my name is Amit
console.log(person1.walk()) // I can walk

var student1 = new Student('Ram', 'CS');
var student2 = new Student  ('Mike', 'ECE');

console.log(student1); //Student {name: "Ram", branch: "CS"}
console.log(student2); // Student {name: "Mike", branch: "ECE"}
console.log(student1.talk()); // I am Ram I study CS
console.log(student2.talk()); // I am Mike I study ECE
console.log(student1.walk()); // I can walk
for(let key in student1){
   let isOwnProp = student1.hasOwnProperty(key);
   console.log(key + ':' + isOwnProp);
}