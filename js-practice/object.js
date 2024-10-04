// Hoisting

var a=10
function test(){
    console.log(a); //undefined
    var a=20;
    console.log(a); //20
}
test();

function test2(){
    console.log(a);
    console.log(b); // runtime error Cannot access 'b' before initialization
    var a=50;
    let b=100;
    console.log(a);
    console.log(b);
}
test2();

"use strict";
//Objects
var emp = {name: "Amit", age: 30};

//add property to emp object
emp.hobbies = ['Cooking', 'Learning new technologies', 'Travelling'];
console.log(emp); // {name: "Amit", age: 30, hobbies: ['Cooking', 'Learning new technologies', 'Travelling']}

// delete property from emp object
delete emp.age;
console.log(emp) // {name: "Amit", hobbies:['Cooking', 'Learning new technologies', 'Travelling']}

//prevent extension: restict to add new property
Object.preventExtensions(emp);
emp.email = "more@gmail.com"; 
//it would not be added, but no error in non strict mode,
// in strcit mode error will be displayed :Uncaught TypeError: Cannot add property email, object is not extensible
console.log(emp); // {name: "Amit", hobbies:['Cooking', 'Learning new technologies', 'Travelling']}

//Seal: restrict to add or remove a property
Object.seal(emp);
delete emp.name;
//it would not be deleted, but no error in non strict mode
//in strict mode: Cannot delete property 'name' of #<Object>
console.log(emp); //{name: "Amit", hobbies:['Cooking', 'Learning new technologies', 'Travelling']}

var emp = {name: "Amit", age: 30};
// freeze: to restrict add, modify and remove
Object.freeze(emp);
emp.name = 'Amit More';
//it would not be modified, but no error in non strict mode
//in strict mode: Cannot assign to read only property 'name' of object '#<Object>'
console.log(emp)

