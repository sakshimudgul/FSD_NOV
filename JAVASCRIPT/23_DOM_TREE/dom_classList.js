// ###############3 class List #################


/**
 // class list , --> property
 1.Add Method
 2.REmove Method
 3.Contains Methos
 4.Toggle Method

 */

 /*
 When want to get idea how many classes we have givees in
 css to certain section

 -Todo project


 */

 
 const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);
console.log(sectionTodo.classList);


// to know how many classes the following section has.

// Assign/Add class with help of js :

sectionTodo.classList.add('bg-dark');
console.log(sectionTodo.classList);

// remove class with help of js :
sectionTodo.classList.remove('bg-dark');
console.log(sectionTodo.classList);

/*
toggle Method :
so it class already exist it will remove it.
class doesnot exist it will add it in css
 */

sectionTodo.classList.toggle('bg-dark');
sectionTodo.classList.toggle('bg-dark');

// -----------------------------------------------------------------

// lets work with header class a bit

const header = document.querySelector(".header");
console.log(header.classlist);
header.classList.add("bg-dark");
console.log(header.classList);