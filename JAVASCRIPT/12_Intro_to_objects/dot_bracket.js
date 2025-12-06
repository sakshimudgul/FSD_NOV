// Difference betweem Dot and Bracket Notation

// 1. Difference case1 
// (fetching / Accesiing sata through certaiin type of key)

// Here person hobby key has space in between 
//  we cannot store the key without adding string litrals
/*
const person ={
    name : "Sakshi",
    age : 21,
    "person hobbie" : ["games","chess","drawing"]

}
    */


//   IN case of accessing this type of key here
//   we need bracket notation and not dot 
//    as not notation will give error due to spacein between

// console.log(person.person hobbie); //invakid error
// for option is brackett notation 

// console.log(person["person hobbie"]);

// 2.Difference case2
// (adding data)

// created one variable

const key = "email";
const person = {
    name : "Sakshi",
    age : 21,
    "person hobbie" : ["games","chess","drawing"]
}

// not notation (adding data with key variable)

//  person.key ="abcd2323@gmail.com";

//  here will adding data with dot notation
// the key varibale it self is considered key here and
// notnthe data iinside the key

// bracket notation (adding data with key variable)

person["key"] = "abcd2323@gmail.com";
console.log(person);

// here when we give key variable it fetches its value 
// value is assigned as key and to it email data in person object.

