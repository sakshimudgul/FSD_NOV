// how to iterate in objects

const person = {
    name : "Sakshi",
    age : 21,
    "person hobbies" : ["chees","games","sketches"]
}

// ------------------------------------------------------------
// Two ways to iterate through objects  ::

// ### 1. for in loop
// ### 2. onjects.keys

// // Not able to fetch with dot notation
// for (let key in person){
//    console.log(person.key);
// }

// ------------------------------------------------------------

// withnthe help of bracket notation
// for(let key in person){
//     console.log(person[key]);
// }

// with the help of bracket notation key : value pairs

for(let key in person){
    console.log(key," : ",person[key]);
}

for(let key in person){
    console.log(`${key} : ${person[key]}` );
}
// ---------------------------------------------------------------

// Objects.keys(person);

console.log(Object.keys(person));
// Gives array of keys
console.log(Object.values(person));
// //checking that object.keys and object.values
// do they return arrays as values

const val = Array.isArray(Object.values(person));
console.log(val);

// ------------------------------------------------------------------------

for(let key of Object.keys(person)) {
    console.log(key);
}

for(let value of Object.values(person)) {
    console.log(value);
}
