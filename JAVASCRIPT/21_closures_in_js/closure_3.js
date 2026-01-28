// function myfunction(power){
//     return function(number){
//         return number ** power;
//     }
// }

// const square = myfunction(2);
// const ans1 = square(3);
// console.log(ans1);

// const cube = myfunction(3);
// const ans2 = cube(4);
// console.log(ans2);


function myfunction(power){
    return function(number){
        return number ** power;
    }
}

const square = myfunction(5);
const ans1 = square(3);
console.log(ans1);

const cube = myfunction(8);
const ans2 = cube(4);
console.log(ans2);


/*

  JavaScript variables can belong to the local or global scope.

   Global variables can be made local (private) with closures.

  
   A closure is a function having access to the parent scope, 
   even after the parent function has closed.

*/