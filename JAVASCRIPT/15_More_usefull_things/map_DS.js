// ################# Maps ################################

// maps are Iterables.

// 1.Store data in ordered fashion 
// 2.Store key value pair (like Objects);
// 3. Duplicates keys are not allowed like objects.

// //---------------------------------------------------------------------

// Diifference betwween maos and objects.

// ### 1. Objects can only have string or symbole as key
// ### 1. In Maps you can use anything as key
// like array,number,string.

// ----------------------------------------------------------------
// onject Literal
// keys in objects literal are already in dtring or symbole.
// key ----> String.
// key -----> symbole.


/**
const person = {
    firstName : 'Sakshi',
    age : 21,
    1 : "one" //Assigned key as number
}

//this key 1 is converted to string  and stored as string we can 
// check type of key 
console.log(person['1']);//Calling as string
// output : one

// Iterate
for (let key in person){
    console.log(typeof key,key);
}

console.log(person.firstName); //call by dot
console.log(person["firstName"]);// call by bracket notation

 */

// ############################################################################

// Working of map:

// stores key , value pairs:

const users = new Map
users.set('firstName','Sakshi');
users.set('age','21');
console.log(users);

// ## ## 1. Objects can only have string or symbole as key

// ## ##
