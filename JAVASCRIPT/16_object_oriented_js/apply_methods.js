/*

Apply() method : The apply() method calls the function directly and sets this  to
the first argument passed to the apply method and if any other arguments provided
as an array are passed to the call method then they are passed as an argument to
the function.

syntax:
apply(objectInstance)
apply(objectInstance, argsArray)

In the apply method, we pass arguments in the form of an array this is
only here
primary difference between call and apply.
*/

let nameObj = {
   name :"sakshi"
}

let printName = {
    name :"steve",
    sayHi :function(...age){
        console.log(this.name + "age is " + age);
    }
}

printName.sayHi.apply(nameObj,[22]);




// Apply ----> Similar to call
// Internally apply uses call
// Diiference is just thst we pass arguments as an array

function about (hobby,favMusicians){
    console.log(this.first_name,this.age,hobby,favMusicians);

}

const user3 ={
    first_name : "Sakshi",
    age : 23,
}

const user4 ={
    first_name : "Shrusti",
    age : 22,
}

about.apply(user4,["guitar","bach"]);
about.apply(user3,["guitar","Senorita"]);
