// ##################################3333 Typeof operator ###############################

/*
What is typeof in JavaScript?
Typeof in JavaScript is an operator used for type checking 
and returns the data type of the operand passed to it.
*/ 

// Data types

// # Primitive Data Types

// string "abcd"
// number 2,3,4,5.6
// booleans
// undefined
// null
// BigInt
// Symbol
let age = 21;
let   name = "sakshi";

// console.log(typeof age); // number
// console.log(typeof name); // string

// console.log(typeof age); // number
// // afterb converting number to string
// console.log(typeof(age + "")); // string

//  age = age + ""
// console.log(typeof age); // string

// ####################################### Convert string to number ###################################


let mystr = +"3";

console.log(typeof mystr);

// // -------------------------------------------------------------
// // other way :

let age1 = 18 ;
age1 =Number(age1);
console.log(typeof age1);
