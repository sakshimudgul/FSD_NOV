// ################### clone array in javascript #################################
// how to clone array
// how to concatenate to arrays

// 1.slice method
// 2.concat
// 3 .spread operator 

 /*let array_1 = ["item1","item2"];
 let array_2 = array_1;
// let array_2 =["item1","item2"];
array_1.push("item3");

console.log(array_1==array_2);
console.log(array_1);
console.log(array_2);
*/

// Cloning with slice

// Fastest cloning method

/* let array_1 = ["item1","item2"];
//  let array_2 = array_1;
 let array_2 = array_1.slice(0);

 array_1.push("item3");

 console.log(array_1 == array_2);
 console.log(array_1);
 console.log(array_2);
 */

//  Cloning with conact

 /*  let array_1 =["item1","item2"];
// let array_2 = array_1;
let array_2 = [].concat([array_1]);

array_1.push("item_3");

console.log(array_1 = array_2);
console.log(array_1);
 console.log(array_2);
 */

//  cloning with spread operator

// new way cloning ==> spread operator

// mostly used

 let array_1 = ["item1","item2"];
let array_2 = [...array_1];
array_1.push("item3");
console.log(array_1 == array_2);
console.log(array_1);
console.log(array_2);



/*  let array_1 =["item1","item2"];
let array_2 = array_1.slice(0).concat["item3","item4"];

array_1.push("item3");
console.log(array_1== array_2);
console.log(array_1);
console.log(array_2);

*/

/*
let array_1=["item1","item2"];
let array_2 = [].concat(array_1,["item3","item4"]);

array_1.push("item3");
console.log(array_1 == array_2);
console.log(array_1);
console.log(array_2);

*/

/*   let array_1 =["item1","item2"];
let oneMore = ["item3","item4"];
let array_2 = [...array_1,...oneMore,"item5"];

array_1.push("item3");
console.log(array_1 == array_2);
console.log(array_1);
console.log(array_2);

*/