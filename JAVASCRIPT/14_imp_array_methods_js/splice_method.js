// #############################  splice method ############################

/* 
What is splice method i java ?
The splice() method is a built-in method for javascript array
objects. It lets you change the content of your array by removing
or replacing existing elements with new one. This  method modifies  
the original arrray and returns elements the removed elements as a
array .

*/

// change original array
// start, delete , insert

// const array = ['item1','item2','item3','item4','item5'];

// ########################## delete using splice ###################

// input : ['item1','item2','item3','item4','item5'];

// start fron first index, delete(how many elements) - 2

// array.splice(1,2);
// console.log(array);

// output : ['item1','item4','item5'];

// two elements are delete from index 1.
// It also returns deleted elements 

// const deletedElements = array.splice(1,2);
// console.log(array);
// console.log(deletedElements);


// ################### insert using splice ##########################

// inpuut : ['item1', 'item2', 'item3', 'item4', 'item5']

// start from 1st ,delete 0 elements ,add from 1st index
// array.splice(1,0,'newitem');
// console.log(array);

// output : ['item1', 'newitem', 'item2', 'item3', 'item4', 'item5']

// ##############3 insert and delete simultaneosly ##############

const array = ['item1','item2','item3','item4','item5'];

const deletedElements = array.splice(1,2,"insertitem1","insertitem2");
console.log(array);
console.log(deletedElements);