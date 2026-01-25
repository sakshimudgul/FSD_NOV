// ############################## Iterable ########################

// string and array are iterable
// on which we can use loops are basically iterables

/*
What are iterable data types in javascript?
javascript iterables 

The data structures that have the symbole.Iterator() method are
called iterables.for example,Arrays ,Strings ,sets etc 

*/

/*
  What are iterables in javascript ??
  The iterables protocol allows javascript objects to define or
  customize their iteration behavior , such as what values are looped
  over in a for...of construct.some built-in types are  built-in
  iterables with a default iterations behaviour , such as array or map
  ,while other type (such as object) are not.

*/

// ### On strings we can apply for of loop as they are iterables.
// ### Array is also Iterable

const first_name ="Sakshi";
for (let Sa of first_name){
    console.log(Sa);
}