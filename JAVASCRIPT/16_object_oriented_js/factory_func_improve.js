/*

- Factory functions & discuss some memory releaed
- First solution to that problems
- Why that solution isn't that great


*/

// - First solution to that problem

/*
 

function createUser(first_name,last_name,email,age,address){
    const user = {};
    user.first_name = first_name,
    user.last_name = last_name,
    user.email = email,
    user.age = age,
    user.address = address, 

    user.about = function(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old .`;
    },

    user.is18 = function(){
        return this.age>=18;
        }

        return user;
}


const user1 = createUser("Sakshi","Mudgul","sakshim8652@gmail.com",21,"sinnar");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);

*/

// --------------------------------------------------------------------------------------------
// - Why that solution isn't that great we will discuss here


/*\

function createUser(first_name,last_name,email,age,address){
    const user = {};
    user.first_name = first_name,
    user.last_name = last_name,
    user.email = email,
    user.age = age,
    user.address = address, 

    user.about = function(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old .`;
    },

    user.is18 = function(){
        return this.age>=18;
        }

        return user;
}

const user1 = createUser("Sakshi","Mudgul","sakshim8652@gmail.com",21,"sinnar");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);

const user2 = createUser("Rohit","Pawar","rohit@gmail.com",21,"sinnar");
console.log(user2);

const user3 = createUser("Chetan","chetan2@gmail.com",21,"sinnar");
console.log(user3);

*/

// so problem with above solution lets see
// Now we make user1, user2 , user3 All this user are using create user function
// That function has two method
// so as many times we  all that create user function

// Let's say :
// for user1: createUser function creates : two methods about and is18
// for user2: createUser function creates : two methods about and is18
// for user3: createUser function creates : two methods about and is18

// So for each users there are two methods created which takes space in memiry
// As many users created more memory wasted
// so here what we can do is as method as works same foe all.
// We remove those methods and make user method object.

const userMethod ={
    // user method Objects
    // Method about
    // key:value
    // about: method

    about : function(){
        return `${this.first_name} ${this.lst_name} is ${this.age} years old .`;
    },
    // Methodis18
    // key:value
    // is18 : method

    is18 : function(){
        return this.age>=18;
    },

    sing : function(){
        return 'abc efg hijk lmno pq rs t u v w ';
    }
} 


function createUser(first_name,last_name,email,age,address){

    const user = { };
        user.first_name = first_name,
        user.last_name = last_name,
        user.email = email,
        user.age = age,
        user.address = address,
        // reference given
        user.about = userMethod.about;
        user.is18 = userMethod.is18;
        user.sing = userMethod.sing;

return user;
        
} 

const user1 = createUser("Sakshi","Mudgul","sakshim8652@gmail.com",21,"sinnar");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about =user1.about();
console.log(about);

const user2= createUser("Siddesh","Pandey","c.siddesh@gmail.com",22,"home,building,pincode,state");
const user3= createUser("Alia","Bhatt","c.alia@gmail.com",21,"home,building,pincode,state");

// I want User to Have One More Sing Method


// Every time we make ne method in user methods we have to changes in create
// create user function as well and keep it updated


// ------------------------------------------------------------------

/*



const obj1 = {
    key1 : "value1",
    key2 : "value2",
}

const obj2 = {
    key3 : "value3",
    
}

console.log(obj1.key1); // value1
console.log(obj2.key3); // value3
console.log(obj2.key1); // undefined


// I dont want undefined here
// if obj2 dont have key1 it should go to obj1 and check it ithas key1
// if yes should return from here 
// Agar object 2 ko key 1 mile toh
// object2 khud jaye object 1 ke pass jaye aur key 1 waha hai toh 
// waha se de

*/

// ------------------------------------------------------------------

const obj1 = {
     key1 : "value1",
    key2 : "value2",
}

// object literals
// const obj2 = {};
// // there is one more way to create empty objects.
// obj2.key3 ="value3";

// there is more way to create empty objects.

const obj2 = Object.create(obj1);
obj2.key3 ="value3";
// obj2.key1 ="value4"   // when we comment this line it prints the key2 of obj1
// obj2.key2 = 'unique';

console.log(obj1.key1); // value1
console.log(obj2.key3); // value3
console.log(obj2.key1); //value1
console.log(obj2.key2); // unique
// if obj2.key2 = unique is commented
console.log(obj2.key2);

// solution using  Object.create();

// we have achived solution lets see how

// /when we create  empty object here with help of object here with help of Object.create();
// /const obj2 = Object.create(obj1);
//  and add obj1
// while calling console.log(obj2.key2);
// it is checking if obj2 has the key2 if yes it will return it with higest prority
// but if not it will go to // const obj2 = Object.create(obj1);
// obj1 mentioned and check if it has the key2 and return its value

console.log(obj2);

// _proto
// official Ecmascript documentation
// __proto__,[[prototype]]

// prototype is different

// ---------------------------------------------------------------------------

// What is happining ?
// obj2__proto__is obj1

// ****************************************************************************************

/*


- proto is also a way to share behaviour and data between multiple objects access
    using__proto__

- All the objects have proto property.
- proto gives access to the  prototype of the funnction using the object.

syntax: (object._proto__)

-It is used in the lookup chain to resolve methods , construction,etc
- It is the property of the instance of that class.

- It is also called dunder proto.
- It is rarely used in javascript.

-It  is introuced in ECMAScript 5.

- proto property that is set to an object when it is created using a new keyword.
All objects behaviour newly createdd have proto properties.

*/

console.log(obj2.__proto__); //proto properties
// onj2 prto is set to obj1
// so proto give acess to obj1