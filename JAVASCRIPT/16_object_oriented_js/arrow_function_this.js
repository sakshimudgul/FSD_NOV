// ########################### Arrow function with this Keyword ###################

const user1 ={
    first_name : "sakshi",
    age : 22,
    about:()=>{
        console.log(this);
        console.log(this.first_name,this.age);
    }
}

user1.about(); // undefined 
user1.about.call(user1); // undefined

// Arrow function consider this keyword of one scope ahead

/*

use of "this" in arrow function methods
A regular function will always define its this value . tHIS heyword
is handled.
differently by arrow functions.since it lacks a context of itd own,
they are unable
to define its own. Anytime you call this , they take the value of this from the parent
scope.
As mentioned earlier, the arrow function does't have its own this value.
It uses the this value of the enclosing lexical scope.


*/