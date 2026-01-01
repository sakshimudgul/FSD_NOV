//How to get Dimension of element

//heihgt width

const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientRect();
// const info = sectionTodo.getBoundingClientRect().top;
// const info = sectionTodo.getBoundingClientRect().width;
// const info = sectionTodo.getBoundingClientRect().bottom;
const info = sectionTodo.getBoundingClientRect().left;

console.log(info);
// getBoundingClientRect() method