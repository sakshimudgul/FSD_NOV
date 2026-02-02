// ##################################### What is prototype  ?? #############################

function printFunction(){
    console.log("hello World!!");
}

printFunction();

// Javascript function ====> Function + Object

console.log(printFunction.name);

// In js function treated as object
// You can add your own properties

printFunction.myownProperty="Unique_value";
// console.log(printFunction,myownProperty); 

// name property -----------------------> tells function name:

// /Function provides more useful properties.

// when we create function we can create empty  object

printFunction.prototype;  // {}
// we can add key value pair in it
// we get emoty object through prototype property.

console.log(printFunction.prototype);

// ############################## only function provide prototype property  #####################

console.log(printFunction.prototype); ///shows the empty object created

if(printFunction.prototype){
    console.log("prototype is present .");
}
else{
    console.log("prototype is not present .");
}

// otuput : prototype is present .

// --------------------------------------------------------------

const hello = {
    name : "Sakshi",
    age : 21,
}

console.log(hello.prototype);///undefined

if(hello.prototype){
    console.log("prototype is present .")
}
else{
    console.log("prototype is not present .")
}

// otuput : prototype is not present .

// ---------------------------------------------------------------------

function hiii(){
    console.log("HEllo World!!!!!!!!!!!!!")
}


hiii.prototype.abcproperty = "abc";
hiii.prototype.xyzproperty = "xyz";
hiii.prototype.sing = ()=>{
    console.log("lalalalalala");
}

hiii.prototype.sing();
console.log(hiii.prototype.xyzproperty);
console.log(hiii.prototype.abcproperty);


/*
   n JavaScript, every function and object has a property named prototype by 
   default. For example, function Person () { this.name = 'John', this. age = 23
 } const person = new Person(); // checking the prototype value console.



*/

/*

  All JavaScript objects inherit properties and methods from a prototype:



*/
/*
  JavaScript is a prototype based language, so, whenever we create a function 
  using JavaScript, JavaScript engine adds a prototype property inside a function,
   Prototype property is basically an object (also known as Prototype object), 
   where we can attach methods and properties in a prototype object, which 
   enables all the other objects to inherit these methods and properties.
  

   In above image, you can see Person has a prototype property and that prototype
  property has a constructor object which again points to the Person constructor
    function.

     We can understand this by an Image:

*/

/*https://www.geeksforgeeks.org/prototype-in-javascript/ */