var primeArr = [];
var compoisteArr = [];
var normalArr = [];
function main(str){
    for(let i=0; i<str.length;i++){
        var n = str.charCodeAt(i);
        if(isPrime(n)){
            primeArr.push(n);
        }else if(isComposite(n)){
            compoisteArr.push(n);
        }else{
            normalArr.push(n);
        }
    }  
    console.log(normalArr); 
    primeArr= primeArr.sort();
    compoisteArr= compoisteArr.reverse();
    normalArr= normalArr.sort();
    var finalArr = [...primeArr, ...compoisteArr, ...normalArr];
    var sortedOutput = [];
    
    for(var item of finalArr){
       let value = String.fromCharCode(item);
       sortedOutput.push(value);
    }
    console.log(sortedOutput.join(""));
}

function isPrime(n){
    var flag =true;
    n = parseInt(n) 
            for(i = 2; i <= n - 1; i++) {
                if (n % i == 0) { 
                    flag = false; 
                    break; 
                } 
            }
                  
           return flag;
}

function isComposite(n){
    if (n%2 == 0 || n%3 == 0) {
        return true;
    }
   else{
    for (let i=5; i*i<=n; i=i+6) {
        if (n%i == 0 || n%(i+2) == 0) 
        return true;
    }
   }
   return false;
}

main('My name is Amit More, I am 30 yaers old');