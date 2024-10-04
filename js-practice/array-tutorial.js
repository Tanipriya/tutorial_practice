//create an empty array
var arr = [];
arr = [1,2,3,4];
for(var i=0; i<arr.length;i++){
    console.log(arr[i]);
}

//add a new elemnt at end of array -push
arr = [1,2,3,4];
arr.push(5);
console.log(arr) //[1, 2, 3, 4, 5]

//remove last elemt from array - pop
arr = [1,2,3,4];
arr.pop();
console.log(arr) //[1, 2, 3]