/*

There is performancce Isseuess in case of innerhtmml :
1. There was previous todo before adding new
whenever you add new one with this method 
it render previous ome as well so may cause performance.

Use only in case of changing inner data of html like 
Data manipulation and editing dont use for adding.

so what is solution for adding new elements:
1. document .createElement() --> method
2.appened method
3.prepared method
4.remove method 
5.before method 
6.after method


*/


//  createElement method new li created.
 
// csae 1 :this is long way:
// with help ofcreateElement meethod new li created. 

/*
const newTodoItem = document.createElement("li");
console.log(newTodoItem);

// here new TextNode created added data and append with li.
const newTodoItemText = document.createTextNode("Teach students");
newTodoItem.before(newTodoItemText);
console.log(newTodoItem);

// so now li new element is created we need to add it to
// Existing ul list
// fetching the ul todoList:
const todoList = document.querySelector(".todo-list");
todoList.append(newTodoItem);
console.log(newTodoItem); 

 */

/* 
// case 2: there isno need to create new textnode
// we have short solution for it.
const newTodoItem = document.createElement(".todo-list");
todoList.append(newTodoItem);
console.log(newTodoItem);

// Here we can use append as well as appendchild
//append is latest where as appenddchild is older version
// append doesnot work on inteernet explorer

// Append :- Adds news element at least
// prepend :- Adds new element at start.


*/

/*
// case 3 :- In case you want to remove any element
// remove Existing element:

// selecting what to remove :
const todo1 = document.querySelector(".todo-list-li");
todo1.remove();

*/



// --------------------------------------------------------

//Before
/*

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students";
const todoList = document.querySelector(".todo-list");
todoList.before(newTodoItem);
*/



//after :

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students";
const todoList = document.querySelector(".todo-list");
todoList.after(newTodoItem);