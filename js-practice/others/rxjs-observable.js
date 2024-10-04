const observale$ = Observable.create((observer)=>{
    try{
    observer.next(1)
    observer.next(2)
    setInterval(function(){
        observer.next('Async 3')
        observer.complete()
    }, 1000)
    }catch{
        observer.error('error')
    }
})

this.subsrcription = observale$.subscribe((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
}, ()=>{
    console.log('Observale completed')
});

ngOnDestroy(){
    this.subsrcription.unsubscribe();
}