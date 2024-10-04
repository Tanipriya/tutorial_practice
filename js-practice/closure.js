// counter using closure
function createCounter(){
    var counter = 0;
    return {
        increment: function(){
            counter++;
        },
        print: function(){
            console.log(counter);
        }
    }
}

var counter1 = createCounter();
counter1.increment();
counter1.increment();
counter1.print(); //2

var counter2 = createCounter();
counter2.increment();
counter2.print(); //1

// nested functions
var globalVar = 'Global Var'; // global var
(function outerfunction(outerArg){
    var outerVar = 'Outer Var'; //outer scope enclosing function
    (function innerfunction(innerArg){
        var innerVar = 'inner Var'; //local scope
        console.log('globalVar: '+ globalVar);
        console.log('outerArg: '+ outerArg);
        console.log('outerVar: '+ outerVar);
        console.log('innerArg: '+ innerArg);
        console.log('innerVar: '+ innerVar);
    })('inner Arg')
})('Outer Arg');