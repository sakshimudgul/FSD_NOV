// #################  object oriented javaascript / prototypal in js ############################

// methods 

/*

What is methods in javascript with exapmle ?

A javascript method is an action done an  object , and it is a property that holds
a function defination for example , for suppose you have anfunction that has firstname
lastname , regno , and a methods with the name of fullname that returns the first na,e
and the last name of a person i-e the full name of a person .

*/

// Function inside object

/*
 
javasccript methods : A javascript method is a property of an object that contains
a function definations .Methods are functions stored as object properties.
object methosd can be accessed with the following syntax:

syntax :

Object = {
methodName : function(){
    //   content
    }
};

Object.methodName()


*/

/*
// Function and method :

a function doesn't need any object and is independent, while the method
is a function , which is linked with any object.
We can directly call the function with its name, while the  method is
called by the object's name.
Function is used to pass or return the data , while the method
operates the data in class.

*/

// perrson object:
// this ketwords:

/*

"this" keyword refers to an object that is executing a current piece of code.
It referce the object that is  executing the current function.
If the function begin reffered is a regular function ,"this"
reference the global object.
*/

/* 
const person = {
    first_name : "Sakshi",
    age : 21,
    gender : 'Female',


    about : function(){
        console.log('person name is ${this.first_name} and age is ${this.age}');
    }

}

person.about();

*/

// -------------------------------------------------------------------------------------------

function personInfo(){
    console.log(`person name is ${this.first_name} and age is ${this.age}`);


}

const person1 = {
    first_name : "Sakshi",
    age : 21,
    gender : 'Female',

    about : personInfo
}

const person2 = {
    first_name : "Arti",
    age : 24,
    gender : 'Female',

    about : personInfo
}

const person3 = {
    first_name : "Ovi",
    age : 20,
    gender : 'Female',

    about : personInfo
}

personInfo();  //undefined

person1.about();
person2.about();
person3.about();
