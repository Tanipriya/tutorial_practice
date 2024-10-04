//check its an array or not
var is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
        return false;   
      };
  console.log(is_array('w3resource')); //false
  console.log(is_array([1, 2, 4, 0])); // true

  // get count of items in array
  function getCount(){
  var a = [1,2,3,2,1];
      var obj = {};
      for(var i of a){
          if(obj[i]==undefined){
              obj[i] =1
          }else{
              obj[i]++;
          }
      }
  
  return obj;
}
console.log(getCount());

//get count
function foo(arr) 
{
    
var a = [];
  
  for ( var i = 0; i < arr.length; i++ ) 
{
	let index =a.map(function(e) { 
             return e.item; 
	 }).indexOf(arr[i]); 
     if ( index==-1 ) {
	a.push({item: arr[i], count:1})
 } else {
        a[index]["count"]++;
 }
  
 }
	return a ;
}

console.log(foo([5,3,2,4,2,3,5,1]));

//qucik sort
function quickSort(originalArr) {
    if (originalArr.length <= 1) {
       return originalArr;
       } else {
             var leftArr = [];              
             var rightArr = [];
             var newArr = [];
             var pivot = originalArr.pop();      //  Take a pivot value
             var length = originalArr.length;
             for (var i = 0; i < length; i++) {
                if (originalArr[i] <= pivot) {    // using pivot value start comparing
                   leftArr.push(originalArr[i]);      
             } else {
                     rightArr.push(originalArr[i]);
           }
         }
       return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr)); // array will be                                                                            //returned untill sorting occurs
    }
 }
 var myArray = [9, 0, 2, 7, -2, 6, 1 ];
 console.log(myArray);
 var sortedArray = quickSort(myArray);
 console.log(sortedArray);
// myArray: [9, 0, 2, 7, -2, 6, 1]
// sortedArray: [-2, 0, 1, 2, 6, 7, 9]

/////////////////////////////////////

//merge sort

function merge_sort(left_part,right_part) 
{
	var i = 0;
	var j = 0;
	var results = [];

	while (i < left_part.length || j < right_part.length) {
		if (i === left_part.length) {
			// j is the only index left_part
			results.push(right_part[j]);
			j++;
		} 
      else if (j === right_part.length || left_part[i] <= right_part[j]) {
			results.push(left_part[i]);
			i++;
		} else {
			results.push(right_part[j]);
			j++;
		}
	}
	return results;
}
console.log(merge_sort([1,3,4], [3,7,9]));

////////////////////////////////////////////////

//binary search

function binary_search(items, value){
    let fisrt_index = 0;
    let last_index = items.length -1;
    let middle_index = (fisrt_index+last_index)/2;

    while(items[middle_index]!=value && fisrt_index<last_index){
        if(value< items[middle_index]){
            last_index = middle_index -1;
        }else{
            fisrt_index = middle_index+1;
        }
        middle_index = (fisrt_index+last_index)/2;
    }
    return items[middle_index]!=value ? -1 : middle_index
}

console.log(binary_search([1,2,3,4,5,6,7],3));

///////////////////////////////
//palindrome
var str = 'ABA'
console.log(str===str.split(' ').reverse().join())

function palindrome(str){
    for(let i=0; i< str.length/2; i++){
        if(str[i]!==str[str.length-1-i]){
            return false
        }
    }
    return true;
}
console.log(palindrome('ABCBA')); //truue
console.log(palindrome('AXSDGHDWA')); //false

/////////////////////////////////////
//fibonaci

function fibonaci(n){
    var fib = [];
    fib[0] =0;
    fib[1] =1;
    for(let i=2; i<n;i++){
        fib[i] = fib[i-2]+ fib[i-1];
    }
    return fib;
}
console.log(fibonaci(10)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

///////////////////////////////////////
//nth fibonaci no.
function nfibonaci(n){
    return n<1 ? 0:
            n<2 ? 1:
            nfibonaci(n-2)+ nfibonaci(n-1)
}
console.log(nfibonaci(0)); //0
console.log(nfibonaci(1)); //1
console.log(nfibonaci(5)); //5
console.log(nfibonaci(10)); //55

//////////////////////////////////////////////
//insertion sort
function insertion_sort(arr){
    for(let i=1; i<arr.length;){
        if(arr[i]< arr[i-1]){
            t = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] =t ;
            i--;
        }else{
            i++;
        }
    }
    return arr;
}

console.log(insertion_sort([3,1,5,6,4,2,7]));

////////////////////////////////////////////
//bubble sort
function bubble_sort(arr){
    for(let i=0; i<arr.length;i++){
        for(let j=0; j< arr.length-1-i;j++){
            if(arr[j]> arr[j+1]){
                t = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] =t;

            }
        }
    }
    return arr;
}
console.log(bubble_sort([3,1,5,6,4,2,7]));


//////////////////////////
//merge 2 arrays
arr1 =[1,2,3,4,5];
arr2 = [8,3,5,1,7,6,2,4];
console.log(arr1.concat(arr2));

////////////////////////////////////
//remove duplicate
function uniqueArray(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            console.log('i: '+ i + ' j:'+ j)
            if(arr[i]==arr[j]){
                arr.splice(j--, 1)
            }
        }
    }
    return arr;
}
console.log(uniqueArray([1,2,3,1,4,2,5,4,2,4,1]));

function newUinqueArray(a){
    var arr = [];
    for(let i=0; i< a.length; i++){
        if(arr.indexOf(a[i])==-1){
            arr.push(a[i]);
        }
    }
    return arr;
}
console.log(newUinqueArray([1,2,3,2,1,4,2,5,1,4,2]));

/////////////////////////////////////////////////////
//merge 2 sorted arrays
function merge(a,b){
    let i =0 , j=0, k=0;
    let result = [];
    while(i< a.length && j <b.length){
        if(a[i]< b[j]){
            result[k] = a[i];
            i++;
            k++
        }else{
            result[k] = b[j];
            j++;
            k++
        }
    }
    while(i< a.length ){
        result[k] = a[i];
            i++;
            k++
    }
    while(j< b.length ){
        result[k] = b[j];
            j++;
            k++
    }
    return result
}

console.log( merge([1,2,4,5,6,8], [2,4,5,9,10,12]))

/////////////////////////////////////
//most frequent items in an arary
function most_frequent(a){
    let mf=1;
    let m =0;
    let item;
    for (let i=0; i< a.length;i++){
        for(let j= i; j< a.length; j++){
            if(a[i]==a[j]){
                m++;
            }
            if(mf<m){
                mf=m;
                item = a[i];
            }
        }
        m=0;
    }
    return {'item': item, 'count': mf}
}
console.log(most_frequent([1,2,3,2,1,4,5,1,2,3,5,1,2,3]))

//get no. of occurance
var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) 
{
 if ( acc[curr] == undefined) {
    acc[curr] = 1;
 } else {
    acc[curr] += 1;
 }
	return acc;
}, {}
);

console.log(a);
// {2: 5, 4: 1, 5: 3, 9: 1}

//map
var arr = [{name: 'amit', age: 30}, {'name': 'preeti', age: 25}];
arr.map((e) =>{
    return e.name;
})
console.log(arr);

//closest
var counts = [4, 9, 15, 6, 2],
  goal = 5;

var closest = counts.reduce(function(prev, curr) {
  return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
});

console.log(closest);

//
var closedToZero = 0;
var data = [2,5,2,1,8,9,4];
for ( let i = 1; i < data.length; i++ )
{
    if ( Math.abs(data[i]) < Math.abs(data[closedToZero]) ) closedToZero = i;
}
zero_closest = data[closedToZero];
console.log('index: '+closedToZero+ ' val: '+ zero_closest);
// index: 3 val: 1

//lowest
var arr = [2,5,2,1,6,3];
var newArr =arr.sort();
var lowest = arr[0];
console.log(lowest);

//
var n = input[0];
   var diff = input[2];
   for(let i=2; i<=n*2; i=i+2){
      let val = input[i];
      if(diff > val){
          diff = val
      }
   }

   ///////////////////////////
 //  https://codeforces.com/blog/entry/69610
  // https://stackoverflow.com/questions/41475755/how-do-i-use-readline-in-node-js-to-get-all-input-lines-into-an-array
process.stdin.resume();
process.stdin.setEncoding("utf-8");

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
 
  let n = lines[0];
  let items = lines[1].trim().split(' ');
  let diff = items[0];
  for(let i=0; i<=items.length;i++){
      let val = parseInt(items[i]);
       if(diff > val){
          diff = val
      }
  }
   console.log(diff);
});

////////////////
var items = [199,120,118,99,210];
  var diff = items[0];
  for(var item of items){
       if(diff > parseInt(item))
          diff = parseInt(item);   
  }
   console.log(diff);