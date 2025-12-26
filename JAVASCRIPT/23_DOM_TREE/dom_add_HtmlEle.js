// Add new HTML element to web page with js:

// innerHTML to add html element:

// const todolist = document.querySelector(".todo-list");
// console.log(todolist);
// console.log(todolist.innerHTML);


// // MAKE CHANGES IN IT :
// todolist.innerHTML = "<li> /new todo with Existing </li>";

// // To add new element with existing ones;

// todolist.innerHTML += " <li> adding new Todo with existing </li>";
// todolist.innerHTML += "<li>adding one more</li>";

/*
there is performance issues in case of innereHtml:
1.there was previous todo before adding new
whenever you add new one with this method
it render previous one as well so may cause performance.

use only in case of changing inner data of html like
data manipulation and editing dont use for adding.

so what is solutionfor adding new elements:
1.document.createElement()
2.append
3.prepend
4.remove

*/

const newTodoItem = document.createElement("li");
const newTodoItemText = document.createTextNode("Teach Students");
newTodoItem.append(newtodoItemText);

const tidolist = document.querySelector(".todo-list");