var singleton = (function (){
    var instance =null;
    function crateInstance(){
    var object = new Object('I am object');
    return object;
    }
    return{
        getInstance: function(){
            console.log(instance)
        if(instance===null){
          instance =  crateInstance();
        }
        return instance;
    }
    };

})();

function run(){
var ins1 = singleton.getInstance();
var ins2 = singleton.getInstance();
console.log(ins1);
console.log(ins2);
console.log('Same Instance: '+ ins1===ins2);
}

run();