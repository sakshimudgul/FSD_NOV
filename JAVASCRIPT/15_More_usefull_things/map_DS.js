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



// ############################################################################

// Working of map:

// stores key , value pairs:

const users = new Map
users.set('firstName','Sakshi');
users.set('age','21');
console.log(users);

// ## ## 1. Objects can only have string or symbole as key

// ## ## 1. in maps you can only have any thing as key
// like array,number, string .

users.set(1,'Sanket');
console.log(users);

// In Object we use to access data:

console.log(person.firstName);//call by bot
console.log(person["firstName"]);//call by bracket

// How to acces key value pair from map


console.log(users.firstName);//undefined
console.log(users["firstName"]);//undefined

// Not applicable in map

//In map we have get method 

console.log(users.get('firstName'));
console.log(users.get('age'));
console.log(users.get('1'));

// I want to print all keys

console.log(users.keys());

// I want to print all values
console.log(users.values());

// for of loop

for(let key of users.keys){
    console.log(key,typeof key);
}

*/

// -------------------------------------------------------------------------

// In map key can be object literal , array , nummber ,string , symbole ,any thimg
// In object for in loop was applicable not for of loop.
// here for loop is directly applicable

const users = new Map();
users.set('firstName' ,'Sakshi');
users.set('age','21');
users.set(2,'Siddhi');
users.set(1,'Sanket');

for(let key of users){
    console.log(Array.isArray(key),typeof key,key);
    
}

users.set(1,'Sanket');
for(let [ key,value] of users){//destructing array which key gives above
    console.log(key,value);

}

// can pass array also :

const customer1 = {
    id : 1,
    first_name : "Chetan"
}

const customer2 = {
    id : 2,
    first_name : "Sakshi"
}

// Object mapped with object 
const extraInfo = new Map();
extraInfo.set(customer1,{age:21,gender:'Male'});
extraInfo.set(customer2,{age:21,gender:'Female'});
console.log(extraInfo);
console.log(customer1.id);
console.log(extraInfo.get(customer1).gender);
console.log(extraInfo.get(customer2).gender);
console.log(extraInfo.get(customer2).age);
console.log(extraInfo.get(customer1).age);


// ####################################333333  Real Life Examples ####################################