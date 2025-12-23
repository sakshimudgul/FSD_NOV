// Block scope vs function scope


// let and const are block scoped
// var is funnction scoped

{
    // here let is block scopeed
    let firstChar = "afafafafafafa";
    //similar incase of const 
    const name_var = "adadada" ;
}

// in case of let: variable
// console.log(firstChar);
// uncaught reference errer:firstChar is not defined
// cannot access firstChar as it is blockscoped
// and deceleared as let
// similarly
// in case of const : variable
console.log(name_var);
// uncaught referencr error : firstchar is not defined
// cannot access firstchar as it is block scoped
// and declared as const


// 0----------------------------------------------------------------

