import { functions } from "lodash-es";
import { createLanguageServiceSourceFile, classicNameResolver } from "typescript";

var user = new Object(); // "object constructor" syntax

var user = {}; //"object literal" syntax

var user = {
    name: 'Amit',
    age: 30
}
console.log(user); // {name: "Amit", age: 30}
//to access object property
console.log(user.name);  // Amit
console.log(user['age']); // 30

//add a new property to use
user.dob = '20 Apr';
console.log(user);

//delete a property
delete user.age;
//delete user['age']

function createUser(name, age){

    return {
        name: name,
        age: age
    }
}

var user1 = createUser('amit', 30); 
var user2 = createUser('nellima', 25); 

console.log(user1); //{name: "amit", age: 30}
console.log(user2); //{name: "nellima", age: 25}


//in property in object
var user = { name: "John", age: 30 };

console.log( "age" in user ); // true, user.age exists
console.log( "blabla" in user ); // false, user.blabla doesn't exist



var user = {
    name: "amit",
    age: 30,
    isAdmin: true
  };
  
  for (var key in user) {
    // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( user[key] ); // John, 30, true
  }


  tusesday - Object & dattatypes

  wednesday - advanced functions & promise & closures 

  thrushday - prototype & classes 

  friday & staurday - dom manuplation


  //copy or clone

  let user = {
      name: 'amit',
      age: 30
  };
  console.log(user);

  let duplicate = {};
  for(let prop in user){
      duplicate[prop] = user[prop];
  }
 
  console.log(duplicate);

  //clone using Object.assign
  let user = {
    name: "John",
    age: 30
  };
  
  let clone = Object.assign({}, user);


  //method
  let user = {
      name: 'amit',
      sayHi: function(){
          console.log('hi')
      }
  }

  user.sayBye = function(){
      console.log('bye')
  }
  console.log(user.sayHi());
  console.log(user.sayBye());


  //this
  let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      console.log(this.name);
      console.log(this.age);
      console.log(this.dob);
    }
  
  };
  
  user.sayHi(); // John

  //arrow function not have this
  let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };
  
  user.sayHi(); // Ilya


  //constructor function
  function User(name, age){
      this.name = name;
      this.age = age;
  }

  user1 = new User('nellima', 25);
  user2 = new User('amit', 30);
  console.log(user1);
  console.log(user2);

