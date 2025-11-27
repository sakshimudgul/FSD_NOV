// ############################ Useful string Method ###################################


// #1. Trim Method

/*
The trim() method in java string is a buils-in 
function than eliminate leadimg ang trailing space
*/

// ------------------------------------------------------------

let first_name ="  Sakshi               ";

// space are also cont in string.length

console.log(first_name.length); /// 23
first_name.trim();
console.log(first_name.length); /// 23

// No change
// as string are illuminated the output will be new string
// in string constant pool
// We need to make new variable to assign that value or it will
// Garbage collected later

// ---------------------------------------------------------------
//  storing is completely new variable

let newstring = first_name.trim();
console.log(newstring);


console.log(newstring.length); /// 6
console.log(first_name.length);///// 23

// --------------------------------------------------------------
// Storing in old variable itself and modifing it

first_name = first_name.trim();
console.log(newstring);

console.log(newstring.length);//// 6
console.log(first_name.length);/// 6