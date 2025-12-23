// function reutring function

function myfunc(){
    // return "a";
    // return 54;
    // return [1,3,45,66,78,4];
    // return {name :"Sakshi"};
    // declaration function
    function hello(){
        return "hello world";
    }


    // function returning function
    return hello;
}

const ans = myfunc();
console.log(ans);
// calling the function returned function
// ans();
console.log(ans());

// higher order function

// callback
// or function returning func
// or doing both