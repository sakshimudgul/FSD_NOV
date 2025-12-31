//  ###### Select element by getElementbyID

console.log(window); // there is a document object present where all the data

console.log(window.document); //human reliable representation of js
console.dir(window.document); // js objects what browsers see

console.log(typeof document.getElementById("main-heading"));
// in document object model ----> document object of window object
console.log(document.getElementById("main-heading"));
console.dir(document.getElementById("main-heading"));

/*

The getElementById() method returns an element with a specified value.

Note: 
Any id show be unique, but:

If two or more elements with the same id exists, getElementById() returns the first.


*/

const headerElement = document.getElementById(" main-heading");
// headerElement.style.color="red";


// With the help of getElementById we can fetch onlys id's.