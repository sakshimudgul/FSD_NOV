// ####################### Lexical Scope ############################

/* 
Lexical scopping in javascript
javascript uses lexical scoping to resolve the variable 
names when a function created inside anither function.
It determines the functions parent scope by looking at 
where the function was created instead of where it was 
invoked.

*/

const myvar = "value1";

function myapp(){

    function myfunc(){
        const myvar = "value58";
        console.log("inside myfunc",myvar);
    }

    console.log(myvar);
    myfunc();
}

myapp();

/*

Lexical scope is the ability for a function scope to access
variable from the parent scope. we call the child function
to be lexically bound by that  of the parent function
the diagran below outlines the supposed hierachy that
the lexical scope maintains in javascript


*/

// https://www.educative.io/answers/lexical-scope-in-javascript

// const myvar = "value4";
function myApp(){

    const myvar = "value1";
    function myfunc(){
        const myvar = "values59";
        console.log("inside myfunc",myvar);
    }
    const myfunc2 = function(){}
    const myfunc3 = () =>{}
    console.log(myvar);
    myfunc();
}

myApp();