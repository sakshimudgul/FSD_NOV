// Call , Apply , Bind

/*c:\Users\Sakshi\Downloads\JavaScript\JavaScript\20_Func_exe_context

call() Method : The call() method calls the function directly and sets this to the
first argument passed to the call method and if any other sequences of arguments
preceding the first argument are passed to the call method then they are passed as
an argument to the function.

syntax:
call(objectInstance)
call(objectInstance, arg1, argN)



// Example :

let nameObj = {
    name : "Sakshi",
}

let printName = {
    name : "Shrusti",
    sayHi : function(age) {
        console.log(this.name + "age is" + age);
    }
}

printName.sayHi.call(nameObj,21);

// output: Sakshiage is 21




function helllo (){
    console.log("Hello World !!");

}

helllo.call();

const user1 ={
    first_name : "Sakshi",
    age : 21,
    about : function(hobby,favMusicians){
        console.log(this.first_name,this.age,hobby,favMusicians);
    }
}

const user2 ={
    first_name : "Siddesh",
    age: 43,
     
}

user1.about();
// user2.about();

user1.about.call(user2);
// call we add what will this represent
// which object reference will the this keyword of about function take
// Here user2 is passed

user1.about.call(); //Wwill be undefined 
// we need to pass what should be object reference

// passing argument from call method
user1.about.call(user1,"guitar","moazart");


*/

// //------------------------------------------------------------

// so instead of above pattern we can do is

function about (hobby,favMusicians){
    console.log(this.first_name,this.age,hobby,favMusicians);
}

const user3={
     first_name: "Sakshi",
     age: 22,
}

const user4 ={
    first_name :"Chetan",
    age: 24,
}

about.call(user3);
about.call(user4);

// call(objectOnstance)
// so with respect to user3 object here
// this keyword of about function willl be handled
// hobby and favmusicians is undefined here as no arguments were passed
// in call method

about.call(user4,"guitar","bach");

// call(objectInstance)
// so with respect to user4 object here
// this keyword of about function will be handled
// hobby and favMusiciand is guitar and bach resp. here as
// two args where passed