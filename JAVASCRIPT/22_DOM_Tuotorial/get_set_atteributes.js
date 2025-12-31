//  ### get and set attributes


// inside nav lets say ui and inside li
// class href id all will be considered attributes.

// fetching the element anchor tag

// const link = document.querySelector("a");

// getAtteribute is method 
// here with help of getAttribute method on link element i.e anchor tag we fetched
// we are getting href attribute data
// console.log(link.getAttribute("type"));

// lets check the type of attribute in html file

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));

// we can also change the value of attribute.
// setAttribute:
const link = document.querySelector("a");
link.setAttribute("href","https://www.google.com");
console.log(link.getAttribute("href"));
console.log(link.getAttribute("href").slice(8));

/*

Important :
 
# The getAttribute() method return the value of an element's attribute.
# The getAttribute() method of the element interface returns the value of a specified
attribute of an element. If  the given attribute on the element . If the given attribute does not
exists , the value returned will
either be null or "" (the empty string); see Non-exsisting attributes for details.


# What is setAttribute ()?
-javascript setAttribute()
-The setAttribute() method is used to set or add an attribute to a paticular and 
provides a value to it if the attribute already exist, it only set or changes the value of
the attribute.


*/
