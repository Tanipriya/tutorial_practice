function show(...args) {  
    let sum = 0;  
    for (let i of args) {  
        sum += i;  
    }  
    console.log("Sum = "+sum);  
  }  
    
  show(10, 20, 30);  // Sum = 60

  function test(a, b, ...args){
      let mul =a*b;
      for(let i of args){
          mul = mul*i;
      }
      return mul;
  }

  test(1,2,3,4,5); // 120
  test(1,2); // 2
  test(1,2,3); //6

  //fat arrow function 
  var show = (a,b,c) => {  
    console.log(a + " " + b + " " + c );  
}  
show(100,200,300);  //100 200 300