// ################################# call back function ################################

 
//  function myfunc(a){
//     console.log(a);
//     console.log("hello world");
// }

// myfunc();
// myfunc("abc");
// myfunc([1,2,3]);
// myfunc({name:"abc",age:24});
 

// ------------------------------------------------------------
 /*
 function myfunc2(){
    console.log("inside my function 2 .");
 }

 function myfunc(callback){
    // here er have passed function
    console.log(a);
    // calling the passing parameter function;
    callback();
 }

//  passing function as argument inside function 
myfunc(myfunc2);
 */

/* 
// Above is example of callback function
// ####################33 caaall back function ###################
a javascript callback is function is to be executed 
after another function has finished execution .
A more formal defination would be -
any function that is passed as an argument to another
function so that it can be executed in that other function 
is called as a callback function.
*/

//------------------------------------------------------

function myfunc2(name){
    console.log("inside my function 2");
    console.log(`my name is  ${name}`);
}

function myfunc(callback){
    // in call back function
    // code execution is done first
    console.log("hello there code is been executed ");
    // after execution of above function
    //call back function is executed
    // which is passed as an arugement
    callback("Sakshi");
}

// passing function as argument inside function

myfunc(myfunc2);




// function myfunc2(name){
    
//     console.log("inside my function 2.");
//     console.log(`my name is ${name}`);

// }

// function myfunc(callback){
//     // In Call back Function
//     // Code execution is done first
//     console.log("hello there code is been executed");

//     // After execution of above function
//     // call back function is executed
//     // which is passed as an argument
//     callback("Yatin");
// }
// // Passing function as argument inside function
// myfunc(myfunc2);
