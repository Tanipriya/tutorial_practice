//create a person class

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    // add method to the class
    
    showDetails(){
        var secret = '88787834';
        console.log('My name is '+ this.name + ' I am '+ this.age + ' years old.' + 'Secret no  is '+ secret )
    }
}

//inistaing the person class to create an object from it
var person1 = new Person('Jay', 40);
var person2 = new Person('Appy', 4);


console.log(person1); //Person {name: "Jay", age: 40}
console.log(person2); // Person {name: "Appy", age: 4}

//Accessing class methods
console.log(person1.showDetails());  // My name is Jay I am 40 years old.Secret no  is 88787834

//static methods: The static keyword is used for making the static functions in the class. 
// Static functions are referenced only by using the class name.

class Test {
    static show(){
        console.log('Its a static method')
    }
}

var test1 = new Test();

test1.show(); // error: test1.show is not a function
Test.show(); //'Its a static method'

// inheritance

"use strict";
class Person{
    constructor(name){
        this.name = name;
    }
}

class Student extends Person{
    show(){
        console.log('The student name is '+ this.name)
    }
}

var student1 = new Student('Ram');
console.log(student1.show()); // The student name is Ram

//multilevel inheritance

class Animal {
    eat(){
        console.log('I am eating...')
    }
}

class Dog extends Animal {
    bark(){
        console.log('I can bark')
    }
}

class Puppy extends Dog {
    weep(){
        console.log('I am weeping....')
    }
}

puppy1 = new Puppy();
puppy1.weep(); // own method
puppy1.bark(); // inherited method from parent
puppy1.eat(); // inheriate from grand parent

//I am weeping....
// I can bark
// I am eating...

// method overriding
//It is a feature that allows a child class to provide a specific implementation of 
// a method which has been already provided by one of its parent class.
 class Parent{
     show(){
         console.log('I am parent show...')
     }
 }

 class Child extends Parent{
     show(){
         console.log('I am child show...')
     }
 }

 child1 = new Child();
 child1.show();
 //I am child show...

 //super keyword

 class Parent{
     show(){
        console.log('parent show...')
     }
 }

 class Child extends Parent {
     show(){
        super.show();
        console.log('child show...')
     }
 }

 var child2 = new Child();
 child2.show();
 //parent show...
// child show...