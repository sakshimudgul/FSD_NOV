// ##################333  Bind method ######################

/*

Before implementing bind(), apply(), and call() polyfills,let us known
What is a polyfill in javascript :

Polyfill: Polyfills are the implementation of the features that are 
given by our browsers, but may not be present in previous version of it.

1. Bind() Method : The bind() method creates new function and when that
new function is called it set this keyword to the first argument
which is passed to the bind method, and if other sequence of arguments preceding
the first argument are passed to the bind method then they are passed as argument
to the new function
 
When new function is called.

bind(thisArg)
bind(thisarg,arg1,arg2)




let nameObj = {
    name :"Sakshi",
    sayHi : function(){
        // here "this " points to nameObj
        console.log(this.name);
    }
}



let HiFun =  printName.sayHi.bind(nameObj);
HiFun();


*/

function about (hobby,favMusicians){
    console.log(this.first_name,this.age,hobby,favMusicians);

}

const user1 = {
    first_name : "Sakshi",
    age : 23,
}

const user2 = {
    first_name : "Yatin",
    age : 21,
}

const user3 = {
    first_name : "Shivani",
    age : 24,
}

about.bind(user1,"guitar",'bach');
// Doesn't return any output
// It returns a function as output

const func = about.bind(user3,"guitar","bach");
console.log(func);
func();
