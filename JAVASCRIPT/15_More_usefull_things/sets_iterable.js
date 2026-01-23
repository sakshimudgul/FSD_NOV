/*
    What are array like objects in javascript ?
    An-array like is an object . Has indexed access to the elements.
    ans a non -negative length property to know the number of elements
    in it. These are only similarities it has with an array.
    Does't have any of the array methods like push,pop,join,map etc

*/

// ------ Sets (It is Iterable . ) -----------

// 1.Stores data (in Linear order).

// const numbers = new Set([0,1,2,3,4,5,6,7,8]);
// console.log(numbers);

// 2. sets also have its own methods

// 3. No index-based access

// const numbers = new Set([9,8,7,6,5,4,3,2,1]);
// console.log(numbers[1]); //undefined
// // As there is no indexed based access .So point 4.

// 4 . order is not guranted.

// const numbers = new Set([1,2,3,3,6,6,7]);
// console.log(numbers);

// 5. unique items only (No dulplicates allowed.)
// const numbers = new Set([1,2,3,3,6,6,7]);
// console.log(numbers);
// Duplicate are ignored one element added only once.

// -- -------------------------------------------------------------------------------------------


/*

// Most common practicle with sets

// we keep set empty while declaration.



const numbers = new Set();

// adding values
numbers.add(1);
numbers.add(2);
numbers.add(2);// No duplicate are allowed
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(7);

console.log(numbers);


// can also add  different datatypes in same set

const array = ['item1','item2','item3','item4'];
numbers.add(array); //No duplicate
console.log(numbers);
numbers.add(['item1','item2']);// here duplicate is added
console.log(numbers);
// because bracket notation represents new space in memory.
// and each time new array is added .


// ------------------Methods in Sets-------------------

if(numbers.has(1)){
    console.log("1 is present");
}
else{
    console.log("1 is not present");
}


*/

//------------------------------------------------------------------
// ## Set are Iterables ##############

// we can use for of loops
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(7);

console.log(numbers);

for (let num of numbers){
    console.log(num);
}

// when to use sets 
// when you know you have unique values
// and not to be repeated
// for example user Id , any Id

const myarr = [1,2,3,4,5,6,7,8,9];
const uniqueElements = new Set(myarr);
console.log(uniqueElements);

console.log(uniqueElements.length);//undefined
console.log(myarr);

let length = 0;
for(let num of uniqueElements){
    length++;
}

console.log(length);