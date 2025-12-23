// // ############## Basic of function ####################################33333

// All below are function decleration

// printing data 
// Not convinent to print htis way
/*
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");

// so we can make functon and just call it functon 
// declaration of function

function printText(){
    console.log("This is Console text");
}

printText();
printText();
printText();
printText();
printText();
*/

// ############################################################################

function addition(a,b){
    return a+b;
}

const res = addition(3,7);
console.log(res);

// undefined + undefined = NaN

function addition(num1,num2,num3){
    return num1+num2+num3;
}
const result = addition(12,45,66);
console.log(result);

// const result = addition(45,66);------>45+66+undefined = NaN
// console.log(result);

// -----------------------------------------------------------------
// odd or even

function isEven( num ){
      if( num % 2 === 0){
        return  true;
      }
    return false;
}

console.log(isEven(5));

// ----------------------------------------------------------

function firstChar( str ){
     
        return  str[7]; 
   
}

console.log(firstChar("ajsfwafvhs"));

// ------------------------------------------------------------

// create function 
// input: array ,target (number)
// output : index of target present in array
// linearsearch


function linearSearch(arr,target){

    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -i;
}

const arr = [1,2,3,4,5,6,7,8,9,10];
const resu = linearSearch(arr,5);
console.log(resu);