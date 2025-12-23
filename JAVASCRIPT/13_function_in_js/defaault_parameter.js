// Default parameter

function addtwo(a,b){
    return a+b;
}

// const ans = addtwo(23,56);
// console.log(ans);  //  ---> 79

// const ans = addtwo(8);
// console.log(ans);   //-----> NaN

// Befere ES6( how we are handled undefinedd variables )
function addtwo(a,b){
    if(typeof b === "undefined"){
        b=0;
    }
    return a+b;
}

// const ans = addtwo(4);
// console.log(ans);  //  4

//ES6 (how we handled undefined variables)
// default parameters ----> In ES6

function addtwo(a,b=0){
    return a+b;

}

// const ans = addtwo(7);
// console.log(ans); //--- 7


const ans = addtwo(7,9);
console.log(ans); //--- 16





