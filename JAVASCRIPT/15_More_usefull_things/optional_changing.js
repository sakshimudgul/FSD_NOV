//  ### OPtional Changing 

/*
     What is optional changing in javascript ?
    Optional chaining (?.) The optional chaining ( ?. ) operator accesses an object's
 property or calls a function. If the object accessed or function called using this
  operator is undefined or null , the expression short circuits and evaluates to 
  undefined instead of throwing an error.

 */

     /*
      It is good to use optional changing in javascript ?
      We can use Javascript Optional Chaining in case of function calls as well.
 This is useful in cases when some method of an API that we are using is unavailable. 
 Instead of throwing an error, Javascript will return undefined if Optional Chaining 
 is used.
     */

//  const user = { 
//     firstName : "Sakshi",
//     address : {houseNumber : "12345"}
//  }

//  console.log(user.firstName);
//   console.log(user.address);

// //   address is object
// console.log(user.address.houseNumber);
// // getting inside object value


//______________________________________________________________________________________________

const users = {
    first_name : "Savi",
    // lets comment below pair ans see output
    // address : {houseNumber : "23456"}
}

console.log(users?.first_name);
// console.log(users?.address);//undefined
// adddress is object

console.log(users?.address?.houseNumber);

// Error : cannot read properties of undefined
// we don't want this error we are ok with undefined
 
