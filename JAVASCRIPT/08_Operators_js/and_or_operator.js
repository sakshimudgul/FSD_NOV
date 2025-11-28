// and or operator

let firstName = "Sakshi";
let age = 5;

if(firstName[0]==="S"){
    console.log("Name start with S");
}

// Conditions checked but separately
// if(firstname[0]=== "S"){
//     console.log("Name starts with S");
// }

// if(age>18){
//     console.log("you are above 18");
// }



// Conditions checked but Both at once


// Both a or b condition should be true 
// to get if condition
// or else will run




// Atleast a or b condition should be true 
// atleast 1 should be true to get if condition
// or else will run

if(firstName[0]=="S" && age>18){
    console.log("Name start with S and age is above 18");
}
else{
    console.log("not qualified");
}

// Atleast a or b condition should be true 
// atleast 1 should be true to get if condition
// or else will run

if(firstName[0]=="S" || age>18){
    console.log("Name start with S and age is above 18");
}
else{
    console.log("not qualified");
}
