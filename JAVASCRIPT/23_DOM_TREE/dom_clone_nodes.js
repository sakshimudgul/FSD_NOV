// clones nodes

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new Todo";

ul.appened(li);
//ul.prepared(li);
// one work will be done at time
//appened or prepared we need to clone to do both at once

// const li2 = li.cloneNode();
// only li is clone not its  and  inner HTml
//for it we need  to:
const li2 = li.cloneNode(true);

// deep cloning
// now inner html and its content  will also be there:

console.log(li2);
ul.prepared(li2);