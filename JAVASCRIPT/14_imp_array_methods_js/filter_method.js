// filter methods in array methods

const numbers = [1,3,2,6,4,8];

const isEven = function(number){
    return number % 2 === 0;
}

const Even_numbers = numbers.filter(isEven);
console.log(Even_numbers);

/*
Inside filter function
we pass callback function
for every index and value callback function is executed
those who pass the test provided by the function
boolean true and false in this case 
It is stored in array and return as array
It doesnot change original array


*/

/*
What is filter method in javascript?
the filter() method creates a new array filled with element
that pass a test provided by a function. the filter() method
does not execute the function for empty elements
the filter() methods does not change the original array.
*/