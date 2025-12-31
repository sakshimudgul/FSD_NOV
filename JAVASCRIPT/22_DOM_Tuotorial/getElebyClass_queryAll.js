/*

// get multiple element using getElementbyClassname

const navItems = document.getElementsByClassName("nav-items");
// with getElementsByClassname we get HTML collection

console.log(navItems);
// we get HTMLCollection as output
// array like object (means we can do indexing.but wont get array methods,
// We can iterate on it).
console.log(navItems[0]);
console.log(navItems[5]);
// It is a onject

console.log(typeof navItems[2]);
// but nit array
console.log(Array.isArray( navItems));


*/

// get mmultiple elements items using querySelectorAll

const navItems = document.querySelectorAll(".nav-item");
// with querySelectorAll we get nodelist
console.log(navItems);

// Array like objects(means we can do indexing, but wont get array methods,
// we can iterate on it)
console.log(navItems[0]);
console.log(navItems[5]);