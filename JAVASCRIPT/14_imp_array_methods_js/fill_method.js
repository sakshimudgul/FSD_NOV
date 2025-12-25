// ##########################33333 Fill Method #################################

/* 
fill() method fills specified elemnts in an array with a value.
The fill() method overwrite the original array. Start
and end posotion can be specified . If not , all elements will be
filled.


*/

// Overwrites origiinal array
const myArray = new Array(10).fill(0);
console.log(myArray);

// ---------------------------------------------------------
const numbers = [1,2,3,4,5,76,6,78,9,9,8];

numbers.fill(0,3,7);
// value , start, end
// 0 will be filled , start from 3rd index, End before 7th index
// [1,2,3,0,0,0,0,0,78,9,9,8]  //output

console.log(numbers);