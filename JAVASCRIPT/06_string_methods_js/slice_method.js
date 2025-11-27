// ################333333 Slice method ############################

// start index
// end index

let str = "theworldisgreat";

let newstr = str.slice(0.5);  //theworldisgreat
// 0 1 2 3 4 index values be returned 
// will iterate from 0<5 and slice from str to newstr
console.log(newstr); //theworldisgreat

let newstr2 = str.slice(4);
console.log(newstr2); // orldisgreat
// here from 4th index to end of string will be returned and sliced
// will iterate from 4th to last index