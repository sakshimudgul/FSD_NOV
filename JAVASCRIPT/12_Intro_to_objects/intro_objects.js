/// ######################### Introduction to objects ####################################

// Array are good but not sufficient for real world data.


// 1.Object is reference type
// stored in similar to array in heap and stack  pointer.
// pointing,all reference type act in same way.

// 2.objects are stored in key value pairs
// 3.object dont have index

// ------------------------------------------------------------------------

// How to create objects

// objects create for person

const person = {
    name : "Sakshi",
    age : 21,
    hobbie : ["chess","games","sketches"]
}

console.log(typeof person);
// ----------------------------------------------------------

// how to access data from objects (Dot Notation)
console.log(person.name);
console.log(person.age);
console.log(person.hobbie);
console.log(person);

// Accessing with the help of key other way (Bracket Notation)

console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbie"]);

// ---------------------------------------------------------------------

// How to add key value pair to object (Dot notation)

person.gender = "Female";
console.log(person);


// Adding with the help of (bracket notation)
person["city"]="Nashik";
console.log(person);

// ------------------------------------------------------------------------