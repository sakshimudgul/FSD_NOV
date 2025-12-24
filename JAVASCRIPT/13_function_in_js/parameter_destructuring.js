// ######################## Parameter Destructuring ###########################################

// so where we use prameters destructing more often :

//  1. with object 
//  2. In react


// how to destructure parameter passeed to function 
/*
const person ={
    firstname : "Sakshi",
    gender : "Female",
}

function printpersonDetails(obj){

    console.log(obj.firstname);  // Sakshi
    console.log(obj.gender);    // Female
    console.log(obj.age);        //500
}

printpersonDetails(person);
*/

/*
const person ={
    firstname : "Sakshi",
    gender : "Female",
    age :500
}

function printpersonDetails({firstname,gender,age}){

    console.log(firstname);
    console.log(gender);
    console.log(age);
}

printpersonDetails(person);
*/


///nothing was trying some thing
const person = {
    firstname :"SAkshi",
    gender :"Female" ,
    age :25,

}

function printpersonDetails(person){
    for(let data of person ){
        console.log(data);
    }
}

printpersonDetails(...person);

/*

What is parameter destructing in javascript ?
destructuring in javascript is used to unpack or segregate
values from arrays or properties from objects litrrals into 
distinct variables ,thus it allows us to access only the values 
required

*/ 