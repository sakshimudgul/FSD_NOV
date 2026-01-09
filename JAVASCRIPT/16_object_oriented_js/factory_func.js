
/*

- Factory functions & discuss some memory related problems
- First solution to that problem
- Why that solution isn't that great

*/

/* 

const user1 = {
    first_name  : 'Sakshi',
    last_name : 'Mudgul',
    email : "sakshi@gmail.com",
    age :21 ,
    address : "Sinnar",

    about : function(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old.`;

    },

    is18 : function(){
        return this.age>=18;
    }
}

const user2 = {
    first_name  : 'Diksha',
    last_name : 'Algat',
    email : "dikshai@gmail.com",
    age :22 ,
    address : "Nashik",

    about : function(){
        return `${this.first_name}  ${this.last_Name} is ${this.age} years old.`;

    },

    is18 : function(){
        return this.age>=18;
    }
}


const user3 = {
    first_name  : 'Omkar',
    last_name : 'Mudgul',
    email : "omkar@gmail.com",
    age :14 ,
    address : "Mumbai",

    about : function(){
        return `${this.first_name}  ${this.last_Name} is ${this.age} years old.`;

    },

    is18 : function(){
        return this.age>=18;
    }
}

// To make many more user similarly is difficult so we will make one function
// So lets make one function which takes all data name address email and return object

const aboutUser = user1.about();
console.log(aboutUser);

// Memory issue is here

*/

// #############################################################333333333

// function ( that function create New object)
// Add key value pair
// Return objects

//  - First solution to that problem


function createUser(first_name,last_name,email,age,address){
    const user = {};
    user.first_name = first_name ,
    user.last_name = last_name,
    user.email = email,
    user.age = age;
    user.address = address,

    user.about =function(){
        return `${this.first_name} ${this.last_name} is ${this.age} years old.`;
    },

    user.is18 = function(){
        return this.age>=18;
    }

    return user;
}

const user1 = createUser("Sakshi","Mudgul","sakshi@gmail.com",21,"sinnar");
// console.log(user1);
// const is18 = user1.is18();
// console.log(is18);
// const about = user1.about();
// console.log(about);


const user2 = createUser("Sakshi","Mudgul","sakshi@gmail.com",21,"sinnar");
console.log(user2);
const is18 = user2.is18();
console.log(is18);
const about = user2.about();
console.log(about);
