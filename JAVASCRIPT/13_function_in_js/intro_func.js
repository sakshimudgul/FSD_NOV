// ################################# Function in javascript ###############################


//  ################# Basic Function ##########################
// All below are function declaration
/* 
// printing data
// Not convenient to print this way

console.log("This is console text") ;
console.log("This is console text") ;
console.log("This is console text") ;
console.log("This is console text") ;
console.log("This is console text") ;
console.log("This is console text") ;
console.log("This is console text") ;  

// so we make the function and just call its function
// delecration function

function printText(){
    console.log("This is console text");
}

// calling function /Invoked function /run function

printText();
printText();            
printText();
printText();
printText();
printText();
printText();
*/

//###################33333333333333333333 

// function addition(){
//     return 5+2;
// }
// const result = addition();
// console.log(result);

// #################################################33333333333333

// function addition(num1,num2){
//     return num1+num2;
// }
// const result = addition (3,6);
// console.log(result);

// undefined + undefined = NAN

function addition(a,b,c){
    return a+b+c;
}
// const sumofThree = addition (3,5);  ----->a+b+undefined=NaN
// console.log(sumofThree);
const sumofThree = addition (3,5,9); //------> 3+5+9 =17
console.log(sumofThree);

// ------------------------------------------------------------------

// odd or even function

function isEven(num){
    if(num % 2 == 0){
        return true;
    }
   return false;
}

console.log(isEven(4));
console.log(isEven(47));

// ------------------------------------------------------------------

function firstChar(str){
    return str;
}
console.log(firstChar("Sakshi"));


// ------------------------------------------------------------
// create function
// input : array , target(number)
// output : indx of target present in array
// linear search

function linearSearch(arr,target){

    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

const arr = [1,2,3,4,5,6,7,8,9,10];
const result = linearSearch(arr,8);
console.log(result);