//ES6 array methods

//Array.from
var name = Array.from('Amit More');
console.log(name);
//output: A,m,i,t, ,M,o,r,e

//Array.of
var arr = Array.of(20)
console.log(arr);
//Output: 20

var arr = Array.of(20, 30, 40, 50)
console.log(arr);
//Output: [20, 30, 40, 50]

//Array.prototype.find()
var arr = [5,12,18,25,30];
var result = arr.find(x=>x>15);   
console.log(result);
//output 18: It returns the first value in array which matches the condition not like filter returning all other

//Array.prototype.findIndex()
var arr = [5,12,18,25,30];
var result = arr.findIndex(x=>x>20);   
console.log(result);
//output: 3 It returns the first index of the matching condition

//Array.prototype.entries()
var colors = ['red', 'blue', 'green'];
var show = colors.entries();
console.log(...show)
//output: [0, "red"] (2) [1, "blue"] (2) [2, "green"]
//it shows key value like pair index: value

//Array.prototype.keys()
var colors = ['red', 'blue', 'green'];
var show = colors.keys();
console.log(...show)
//output 0 1 2 it shows key values in array here indexes

//Array.prototype.values()
var colors = ['red', 'blue', 'green'];
var show = colors.values();
console.log(...show)
//output red blue green it shows  values in array 

//ES1 methods

//concat: This method returns a new array object which contains two or more merged arrays.
var arr1 = [1,2,3];
var arr2 = [20,30,40];
var result=arr1.concat(arr2);
console.log(result); //[1, 2, 3, 20, 30, 40]

//join: This method joins the array elements as a string.
var arr1 = ['a', 'm', 'i', 't']
var result = arr1.join('');
console.log(result);// amit

//pop: This method is used to remove and return the last element of an array.
var arr1 = [100,200,300]
var result = arr1.pop();
console.log(result); //300
console.log(arr1) //[100, 200]

//push: The push() adds one or more elements at the end of an array.
var arr1 = [100,200,300]
 arr1.push(400);
console.log(arr1); //[100, 200, 300, 400]

//reverse: This method reverses the elements of the given array.
var arr1 = [100,200,300]
var result = arr1.reverse();
console.log(result); //[300, 200, 100]

//shift: This method is used to remove and return the first element of an array.
var arr1= [1,2,3,4,5];
arr1.shift();
console.log(arr1); //[2, 3, 4, 5]

//unsift: The unshift() adds one or more elements at the starting of the given array.
var arr1= [1,2,3,4,5]
arr1.unshift('a', 'b');
console.log(arr1); //["a", "b", 1, 2, 3, 4, 5]

//slice: This method returns a new array that contains a copy of the part of the given array.
var arr1 = [1,2,3,4,5];
var result = arr1.slice(0,2);
console.log(result); //[1, 2]

//splice: This method adds/removes the elements to/from the given array.
var arr1 = [1,2,3,4,5];
var result = arr1.splice(1,3,'10', '20');
console.log(result);

//sort: This method returns the element of the given array in sorted order.
var arr1= [2,5,3,1,4]
var result = arr1.sort();
console.log(result); //[1, 2, 3, 4, 5]

//toString: This method returns the strings with all array elements separated by commas.
var arr1 = [1,2,3,4,5];
var result = arr1.toString();
console.log(result); //1,2,3,4,5


//ES5 methods

//every: This method is used to determine whether all the elements of an array satisfy the provided function conditions.

//filter: This method returns the new array, which contains the elements that pass the provided function conditions.
var arr = [10,5,20,30,25];
var result = arr.filter(x=>{return x>=20})
console.log(result); // [20, 30, 25]

//forEach: 	This method invokes the provided function once for each element of an array.
var total =0;
var arr= [1,2,3,4];
arr.forEach((element)=>{
     total+= element;
});
console.log(total); //10

//isArray: This method determines whether an object is an array or not. It returns true if the object is an array and returns false if not.
var arr = [1,2,3];
var str = 'Hello';
console.log(Array.isArray(arr)) //true
console.log(Array.isArray(str)) //false

//indexOf: 	It searches the specified element in the given array and returns the index of the first match.
var arr = [1,2,3,4,5];
console.log(arr.indexOf(3)); //2

// lastIndexOf(): It searches the specified element in the given array and returns the index of the last match.

var arr = [1,2,3,1,4,1,5,2,3];
console.log(arr.lastIndexOf(1)) //5

//map: It calls the specified function for every array element and returns the new array
var arr = [1,2,3,4,5];
var result = arr.map(x=>{
    return x*10;
})
console.log(result); // [10, 20, 30, 40, 50]

//reduce: This method reduces the array to a single value.
var arr = [1,2,3,4,5];
var result = arr.reduce((sum, cur)=>{
return sum+= cur;
}, 0)
console.log(result); //15

//Get count of items in array
var arr = [1,2,3,1,4,2,5,3,6,4,1,2];
var result =  arr.reduce((acc, cur)=>{
if(typeof acc[cur] == 'undefined'){
    acc[cur] =1
}else{
    acc[cur]++;
}
return acc
}, {});

//spread opretors
var colors = ['red', 'blue', 'green'];
let newColors = [...colors, 'yellow', 'orange'];
console.log(newColors); //["red", "blue", "green", "yellow", "orange"]

//clone or copy an array using spread opertor
var arr = [1,2,3,4,5];
var cloneArr = [...arr];
console.log(cloneArr); //[1, 2, 3, 4, 5]

//clone or copy an array using slice
var arr = [1,2,3];
var newArr = arr.slice(0);
console.log(newArr); //  [1, 2, 3]

//Array destructuring
var arr = ["Hello", "World"]  
// destructuring assignment  
var [first, second] = arr;  
  
console.log(first); // Hello  
console.log(second); // World  


var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
  
// destructuring assignment  
var [a,b,...args] = colors;  
console.log(a); //Violet  
console.log(b);   // Indigo
console.log(args);  //["Blue", "Green", "Yellow", "Orange", "Red"]