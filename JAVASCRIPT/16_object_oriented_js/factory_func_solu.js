/*

-Factory functions & discuss some memory related problems
-First solution to that problem
-why that solution's isn't that great


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
        return `${this.first_name} ${this.last_name} is ${this.age} years old`;

    },

    user.is18 = function (){
       return this.age>=18;
    }

    return user;
}

const user1 = createUser("Sakshi","Mudgul","sakshi@gmail.com",21,"Sinnar");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);

*/

//--------------------------------------------------------------------------------------------

// - Why that solution isn't that great we will discuss here

/* 

function createUser(first_name,last_name,email,age,address){

    const user = {};
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.age = age;
    user.address = address;

    user.about = function(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old.`;

    },

    user.is18 = function(){
        return this.age>=18;
    }

    return user;
}

const user1 = createUser("Sakshi","Mudgul","sakshi@gmail.com",21,"Sinnar");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about); 

const user2 = createUser("savi","patil","savi@gmail.com",17,"Nashik");
const user3 = createUser("ovi","Jadhav","ovi@gmail.com",19,"Mumbai");

console.log(user2);
console.log(user3);

// so problem with above solution lets see
// now we make user1 , user2 , user3 All this user are using create user function
//Thata function has two method
// so as many times we call that create user function
// lets say :

// For user1 : createUser function creates : two methods about and is18.
// For user2 : createUser function creates : two methods about and is18.
// For user3 : createUser function creates : two methods about and is18.


// so for each user there are two methods created which takes space in memory
// As many users created more memory wwasted
// So here what we can do is as method work same for All.
// We remove those methods and make user method object

*/

const userMethods = {
    // user method objects
    // methods about
    // key ; value
    // about : method

    about : function(){
        return  `${this.first_name} ${this.last_name} is ${this.age} years old.`;

    },

    // method is18
    // key : value
    // is18 : method

    is18 : function(){
        return this.age>=18; 
       }
}

function createUser(first_name,last_name,email,age,address){

    const user = {};
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.age = age;
    user.address = address;

    user.about = function(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old.`;

    },

    user.is18 = function(){
        return this.age>=18;
    }

    return user;
}

const user1 = createUser("Sakshi","Mudgul","sakshi@gmail.com",21,"Sinnar");
// console.log(user1);
// const is18 = user1.is18();
// console.log(is18);
// const about = user1.about();
// console.log(about); 

const user2 = createUser("savi","patil","savi@gmail.com",17,"Nashik");
const user3 = createUser("ovi","Jadhav","ovi@gmail.com",19,"Mumbai");

// console.log(user2);
// const is18 = user2.is18();
// console.log(is18);
// const about = user2.about();
// console.log(about);

console.log(user3);
const is18 = user3.is18();
console.log(is18);
const about = user3.about();
console.log(about);







