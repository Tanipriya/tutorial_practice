// to check input is string or not
function isString(value){
    if(Object.prototype.toString.call(value) === '[object String]'){
        return true;
    }else{
       return false;
    }
}

console.log(isString('My name is amit')); //true
console.log(isString([1,2,3,4])); // false

// to check string is blank or not
function isStringBlank(value){
    if(value.length==0){
        return true;
    }else{
        return false;
    }
}

console.log(isStringBlank('')); // true
console.log(isStringBlank('Hello, how are you?')); // false

//split string to array
function stringToArray(value){
    return value.trim().split(" "); // trim to remove white spaces from start and end of string
}

console.log(stringToArray("Narendra Rao More")) //  ["Narendra", "Rao", "More"]

//truncate string
function truncateString(value, length){
    if(value.length >1){
        return value.slice(0, length);
    }
}
console.log(truncateString('Amit More', 4));

//get Abbrivate name
function abbrivateName(value){
 var split_name = value.trim().split(" ");
 if(split_name.length>1){
     return split_name[0]+" "+ split_name[1].charAt(0)+".";
 }else{
     return split_name[0];
 }
}
console.log(abbrivateName("Amit More")); // Amit M.

//parmeterize the string

function parmeterize(value){
    value.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
}

console.log(parmeterize("My name is Amit More"));

//capitalize first latter of string
function capitalize(value){
    return value.charAt(0).toUpperCase()+ value.slice(1);
}

console.log(capitalize("how are you?"));

//caplitalize each word of string
function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize_Words('My name is Amit more'));

//swap the case of string
function swapcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase('AaBbc'));