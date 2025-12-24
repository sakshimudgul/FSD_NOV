// rest paarameters
/*
function myfunction(a,b,c){
    console.log(`a  is  ${a}`);
    console.log(`b  is  ${b}`);
    console.log(`c  is  ${c}`);
    
}

myfunction(1,2,3);
// printed available parameters
myfunction(1,3,4,4,5,67,534,77,3,3,22);
// here rest parameters are not printed 
// how to handled them
*/

// Handling above conditions with rest parameters

// used rest parameter to get rest parameters
// in form of array which was ignored before
/*
function myfunction(a,b,...c){
     console.log(`a  is  ${a}`);
    console.log(`b  is  ${b}`);
    console.log(`c  is  ${c}`);
}

myfunction(1,3,4);
myfunction(1,45,6,3,6,35,34,7,244,54,23,57);
*/
// Rest parameterrs are used

const addAll = (...numbers) => {

    let total = 0;

    for(let num of numbers){

        total = total + num ;
    }
     return total;
}

const ans = addAll(1,2,3,4,5,6,7,8,9,10);
console.log(ans);

/* 

The rest parametr syntax allows a function to accept an
identifies number of arguments as an array provoding a
way to represent variadic function in javascript .

*/