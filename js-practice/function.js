//named function
function hello(){
    console.log('Hello!!!!');
}

//call the function
hello();  //Hello!!!!
// we can call the named function anywhere in js either before or after function declaration

//function with params
function helloName(name){
    console.log('Hello ' + name)
}
helloName('Amit'); // Hello Amit

//////////////////////////////////////////////////////

//anonymous function
var add = function(num1, num2){
    return num1+ num2;
}
//call anonymus function
add(5,10); //15

//we can call anonymous function only after the declartion not before otherwise it will throw error 
//TypeError: add is not a function

/////////////////////////////////////////////////////////////////

//self invoking function
(function test(){
    console.log('Self invoking');
})(); //Self invoking
// function calling it self

//type of fucntion
console.log(typeof(test)); //function

//fat arrow function
() =>{
    console.log('fat arrow');
}
//fat arrow does not have its own this

function outer(){
    var outerName = 'outer name';
    console.log(this);
    function inner(){
        var inner = 'inner';
        console.log(outer);
        console.log(inner);
        console.log(this);
    }
}

outer();


var name = 'Amit'; // global variable
function show(){
let msg = 'hello'; // local vraiable 
console.log(msg + name);
}
show();

//default parameters
function mul (x, y=2){
    return x*y;
}

var multilpy1 = mul(10);
var multilpy2 = mul(20,5);
console.log(multilpy1); //20
console.log(multilpy2); //100

//undefine dparams
function show(parm){
    if(parm==undefined){
        console.log('No params passed')
    }else{
        console.log(parm);       
    }
}
show();
show('test');

//anonymous function

var sum = function(x,y){
    return x+y;
}

var sum1= sum(2,10);
console.log(sum1);

//fat arrow function

let mul = (x,y) =>{
    
}