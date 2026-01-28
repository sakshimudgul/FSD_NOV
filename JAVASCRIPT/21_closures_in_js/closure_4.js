function func(){
    let counter=0 ;
    return function(){
        if (counter<1){
            counter++;
            console.log("Hii function is been called");
        }
        else{
            console.log("hii you have exceed call limit");
        }
    }
}

const myfunc = func();
myfunc();
myfunc();
myfunc();


const myFunc2 = func();
myFunc2();
myFunc2();
myFunc2();