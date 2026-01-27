let newarray =[];
console.log(newarray);
console.log(newarray.pop());
console.log(newarray);

// add first unshift
// remove first shift
// add last push
// remove last pop
// concat method to add 2 arrays

/*
newarray.unshift("apple","banana");
console.log(newarray);


newarray.unshift("mango");
console.log(newarray);

let shiftelement = newarray.shift();
console.log(newarray);

newarray.push("mango");
console.log(newarray);
let shiftelem = newarray.pop();
console.log(newarray);
*/

const charArr = ["A","B","C","D"];
const res = charArr.toString().replaceAll(",","");
console.log(res);

// slice Method
// doesnot modify original
const num = [1,2,3,4,5,6,7];

// exclusive value taken <2
const res1 = num.slice(2);
// exclusive valuetaken <4
const res2 = num.slice(0,4);

// exclusive value taken <2
console.log(res1);
// exclusive value taken <4

console.log(res2);

// splice method
// modifies original array
// (start,deletecont,anythingtoadd)
console.log(num);

num.splice(3, 0 , "Abc");
console.log(num);

num.splice(3, 2, "Krk");
console.log(num);

// join method
const charrArr = ["A","B","C","D","E"];
const result = charArr.toString().replaceAll(",","/");
console.log(result);
// replacement of above scenorio using join
let charStr = charArr.join("/");
console.log(charStr , typeof charStr);

// includes method
// indexof methhod --->search from begining
// lastIndexOf Method ----> Search from last

let newarr = ["A",1,2,3,4,5,"S",77];
 console.log(newarr.includes("A"));
 console.log(newarr.includes(3));
 console.log(newarr.indexOf("S"));
 console.log(newarr.lastIndexOf("S"));

//  for each 
// Doesnot work on object
// doesnot work on object
newarr.forEach((e,index) => {
    console.log(e,index);
});

// for each
// doesnot return array
// only perform operation on array

// const newarr1 = newarr1.map((e,index) => {
//     return e * 3;
// }) ;

// console.log(newarr1);
// map
// same as foreach
// returns new array

// =============================================================================================

let number = [1,2,3,4,5,6,7,8,9];
// filter method
// return new array as output acc to call condition

const evenArray = number.filter((value,idx) => {
    console.log(value,idx);
    return value % 2 == 0;
});

console.log(evenArray);

let newArrray = ["A",1,4,7,5,"S",89,{name:"Newton"}];
newarray.forEach((e,index) => {
    if(typeof e === "object"){
        console.log(e,index);
    }
});

// find method
const checkObject = newarray.findIndex((e) => e.name ==="Newton");
const checkObjectIndex = newarray.findIndex((e) => e.name === "Newton");
console.log(checkObject);
console.log(checkObjectIndex);

// some ----> It will check and return true if one matches in the array

const check = newarray.some((e) => e === "S");
console.log(check);

// every ---> It will check all elements in the array


let studentsMarks = [45,66,87,34,56,90];

const check2 = studentsMarks.every((e) => {
    return e > 50;
});

console.log(check2);

// reduce

let array =[4,3,2,6,5,8,9];
const newArray2 = array.reduce((accumulator,currentvalue) => {
       console.log("acc : ",accumulator);
       console.log("curr  : ",currentvalue);
       return accumulator + currentvalue;
},10);

console.log(newArray2);


// accumulator , current value , return 
// 10                4              14
// 14                3               17
// 17                 2              19
// 19                6                25
// 25                5                30
// 30               8                 38
// 38               9                 47



// -------------------------------------------------------

let x = 10.7;
console.log(parseInt(x));
let y = 10.525;
console.log(Math.floor(y));
console.log(Math.ceil(y));

let str = "newTune";
let str1 = "School";
console.log(str.length);
console.log(str.slice(0,2));
console.log(str.charAt(4));
console.log(str.charCodeAt(4));   //--- ASCII
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(2,5));
console.log(str.replace("n","m"));
console.log(str.replaceAll("o",""));
console.log(str.concat(str1));

str = " new   tune";
console.log(str.trim("//s"));
console.log(str.trimEnd());
console.log(str.trimStart());
str = "newton school";
console.log(str.split(" "));
str = "4";
console.log(str.padStart(5,"0"));
console.log(str.padEnd(5,"0"));



