// "use strict";

console.log("Hello World!");

// ############# Introduction to variables #######################

// declare a variable 
var firsrName;

// 1.  variable can store some information 
firstName="Sakshi";

//  2.We can use that information later
console.log(firstName);

// 3.We can change that information ASM WELL
firstName="Ankita";
console.log(firstName);

// javascript is case sensitive

// use strict mode to avoid the errors and case sensetive error
// issues

// ###################### Rules for naming variables ##################################

//  # 1. You cannot start with numbers

// example
//  var 1value=10; -----> invalid
//      var value1=10;  -----> valid     
// console.log(value1);
// console.log(value1/2);  -----> division
    // console.log(value1*2);   ----> multiplication
//  console.log(value1+2);   -----> addition
//  console.log(value1-2);   -----> subtraction    
    // console.log(value1 ** 2);   10^2 ---> 10 power 2 ->
    // console.log(value1 ** 0.5 );    // m10 root 2 

//  # 2. you can use only underscore  _ or doller $ symbole
// from special symbole only this are validddd

// firstName_="abc";
// _firstName ="abc";
//  $firstName="xyz";
//  firstName$="acs";

// Instead we can do is that :
// var first_name = "Sakshi"; ---->Snake case writing
// var firstName = "Sakshi";  // ---> Camel case writing

// ##################333 js naming convention for variables #############3333333333333

// Naming convention :
// -start with small letter and use camel case
