// Hodsting in javascript

/* 
conclusion here :
the function declaration is hooisted

*/

// JavaScript Hoisting refers to the process whereby
//  the interpreter appears to move the declaration of functions, 
// variables, classes, or imports to the top of 
// their scope, prior to execution of the code.

// Accessing function before initilization  :

// hello();

// // in case of function declaration hosting is working 
// function hello(){
//     console.log("Hello World! ")
// } 


// In case of function expression hostinig is working 
// In all case : var , let , const 
// const hello = function(){
//     console.log("hello world");
// }

// Error is thrown : initilization is after calling 

// here function is called before it is been initilized
// and declared


// Another case :
// Accessing var, let ,and const before initilization  :

// console.log(hello); //undefined
// var hello = "hello world";
// console.log(hello);

// console.log(hello); //error: accesss before initilization
// let hello = "hello world";
// console.log(hello);

// console.log(hello); // errer: access beforer initilization
// const hello = "hello world";
// console.log(hello);