// change styles of elements :

/*



const mainHeading = document.querySelector("#main-heading");
const divElements = document.querySelector("div"); //will return the first div
console.log(divElements);

// Now we want specific heading 2 inside div with class headline lets say:
const heading2 = document.querySelector("div.headline h2");
console.log(heading2);
// console.log(heading2.style);
// looking inside style objects with many style properties to make changes 
heading2.style.color="#fff";
// Incase of changing background-color style of certain element
// we cannot use - in js'

// heading2.style.backgroundcolor="purple"; // -->throws error 
// so what we do is use camelcase

heading2.style.backgroundColor="purple";
heading2.style.border ="5px solid black";
heading2.style.padding ="50px";

*/

console.dir(window.document.head.style);
// Access a style
// the style object can be accessed from the head section of the document,
// or the specific HTML element(s)