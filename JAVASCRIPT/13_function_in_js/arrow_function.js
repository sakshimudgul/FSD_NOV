// ############################## Function in javascript##################################

/*
Arrow function {()=>} is a concise way of writing js
function in shotervway  .arrow function where introduced 
 in the ES6 version. they make our code more structured and readable\\

*/

// @@@@@@@@@@@\\\\\\\\\\ Basic of function @@@@@@@@@@@@@@@@@@@@@@
// All below are arrow function 

// printing data 
// not convinent to print this way 
/*

console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");

// so we can make function and just call its function
// declaration of arrow function:
const printText =() =>{
    console.log("This is console text");
}

printText();
printText();
printText();
printText();
*/

// ##########################################################

// function expression 
// we initialize const variable to function
// so additon here expresses  function

// const addition = ()=>{
//     return 2+4;
// }
// const result = addition();
// console.log(result);

// ##################################################################
const addition = (a,b)=>{
    return a+b;
}

const res = addition(4,5);
console.log(res);

const additionofThree = (num1,num2,num3)=>{
        return num1 + num2+num3
    
     }
    
    // const sumofThree = additionofThree(10,20); // 10+20+undefined = NAN
     const sumofThree = additionofThree(10,20,30); // 10+20+30 = 60
     console.log(sumofThree);

// ----------------------------------------------------------
// odd or even

// const isEven = (num)=>{
//     if(num % 2 === 0){
//         return true;
//     }
//     return false;
// }

// console.log(isEven(3));


// -----------------------------------------------------------
// only one parameter we can remove bracket of num
// also we can just return without writing return

// const isEven = num =>  num % 2 === 0;

function isEven(num){
    return num % 2 === 0;
}

console.log(isEven(3));

// -------------------------------------------------------------

const firstChar = (str)=>{
    return str[0];
}

console.log(firstChar("skhfgsbgfdshgr"));

// ---------------------------------------------------

// create function 
// input: array , target (number)
// output : index of target present in array
// linear search

const linearSearch = (arr, target)=>{

    for(i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

const arr = [1,2,3,4,5,6,7,8,9,10];
const result = linearSearch(arr,9);
console.log(result);

//   // Above All are function expression :
  // anynomous function --> is assigned const variable
  // to call the function .
  