//  some old methods to support poor Internet Explorer

// 1.AppendChild Method
// 2.insertBefore
// 3.replaceChild
// 4.removeChild


/* 
// 1.appendChild Method
const ul = document.querySelector(".todo-list");
// new element
const li =document.createElement("li");
li.textContent = "new todo";
ul.appendChild(li);


*/

/*

//2. insertBefore Method
const ul = document.querySelectorSelector(".todo-list");
// new element
const li = document.createElement("li");
const referenceNode = document.querySelector(".todo-list > li");
li.textContent ="new todo";

// syntax :
// tomake changes .insertbefore(what to do insert.before whom);

ul.insertBefore(li,referenceNode);
// 
*/



/*

// 3.replaceChild Method
const ul = document.querySelector(".todo-list");
// new element
const li = document.createElement("li");
li.textContent ="new todo";
const referenceNode = document.querySelector(".todo-list > li");

ul.replaceChild(li,referenceNode);

*/

/*

// 4. removeChild:

const ul = document.querySelector(".todo-list");
const li = document.querySelector(".first-todo");
ul.removeChild(li); 

*/