// creating a promise returning the sum after 1 sec delay
var sum = function(x,y){
    return new Promise(function(resolve, reject){
        setTimeout(function(){resolve(x+y)}, 1000)
    })
}

sum(10,20).then((data)=>{
    console.log('I am working asynchronously');
    console.log('Sum: '+data);
});

console.log('I am working synchronously');
//output
//I am working synchronously
//I am working asynchronously
// Sum: 30


// creating a promise rejecting  after some delay
var sum = function(x,y){
    return new Promise((resolve, reject) => {
       
        setTimeout(function(){resolve(x+y)}, 1000)
        setTimeout(function(){reject("Something went wrong")}, 500)
    })
}

sum(10,20).then((data)=>{
    console.log('I am working asynchronously');
    console.log('Sum: '+data);
}).catch((err) =>{
    console.log(err)
});

//Ouput 
//Something went wrong

///////////////////////////////////////////////////
//promise chaining

var promise = new Promise(function(resolve, reject) {
    resolve(1);
  });
  
  promise.then(function(val) {
    console.log(val); // 1
    return val + 2;
  }).then(function(val) {
    console.log(val); // 3
  });


///////////////////////////////////////////////////
//Angular http call using promise
export class AppComponent implements OnInit {

    api: string = "https://jsonplaceholder.typicode.com/posts";
    data = [];
  
    constructor(private http: HttpClient) { }
  
    ngOnInit() {
      this.getPosts();
    }
  
    getPosts() {
      const promise = new Promise((resolve, reject) => {
        const apiURL = this.api;
        this.http
          .get(apiURL)
          .toPromise()
          .then((res: any) => {
            // Success
            this.data = res.map((res: any) => {
              return new Post(
                res.userId,
                res.id,
                res.title,
                res.body
              );
            });
            resolve();
          },
            err => {
              // Error
              reject(err);
            }
          );
      });
      return promise;
    }
  
  }
  