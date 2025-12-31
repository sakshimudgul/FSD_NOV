// Select Element using queryselector

/*
const mainHeading = document.querySelector("#main-heading");

mainHeading.style.color="red";
*/
const mainHeading = document.querySelector(".header");
console.log(header);

const navItems = document.querySelector(".nav-item");
console.log(navItems);
// we will get the first nav-item as output among other three


// so in case we want all the nav-items we can use querySelectorAll
const navItem = document.querySelectorAll(".nav-item");
console.log(navItems);
// returns all the nav-item in form of Nodelist

/*
Important

-The querySelector() method  returns the first element that matches a css selector.
-To return All mataches (not only the first ), use the querySelectorAll() instead.
- Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) in valid.
- The querySelectorAll( ) method returns a Nodelist.
- the QuerySelectorAll() method throws a SYNTAX_ERR exception if the selector(s) is invalid

*/

/*


We will study further in detail :

## The difference between an HTMLCollection and a nodeList #########

A nodeList and an HTMLCollection is very much the same thing.

Both are array like collection (lists) of nodes (elements) extracted fromm a
document The  nodes can be accessed by index numbers. The index
atarts 0.

Both have a length property that returns the number of elements in the list(collection)

AnHTMLCollection is a collection of document elements

A nodeList is a collection of document elements.

*/