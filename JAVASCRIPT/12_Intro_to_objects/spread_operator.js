// spread operator

// / ------------------------------------------------------------------------
const arr1 = [1,2,3];
const arr2 = [4,5,6];

// const newarr = [...arr1];
// const newarr = [...arr1,...arr2];
// const newarr = [...arr1,arr2];
// whole array object added as thired element
// with ...it is spread and then added to element of new arr
// const newarr = [...arr1,...arr2,83,43,21];
// console.log(newarr);

// const newarr = ["abc"];
// const newarr = [..."abc"];
// console.log(newarr);/
 
// spreading string and ading each element
// on seperate inddex
// in case of number they are iterable
// we have string Iterable,array Itrable
// we have atring iterable ,array iterable
// const nmewarr = [...1223444322566543];// ---> it is not
// console.log(newarr);
// const newarr = [..."12443221222243321"];
// console.log(newarr);
// we can convert it imto string and do it


// ------------------------------------------------------------------------

// spread operator in object 
// in object only one key can exist they are unique
// value will override in key if added
// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",    
//     key1 : "value3"
// }

// console.log(obj1);

// -----------------------------------------------------

// cloning in objects
// const obj1 = {
//      key1 : "value1",
//     key2 : "value2",    
    
// }

// const obj2 = {
//      key3 : "value3",
//     key4 : "value4",    
    
// }

// // const newobj = {...obj1}
// const newobj = {...obj1,...obj2}
// console.log(newobj);

// ------------------------------------------------------------------------

// even when we clone objects in new objects have same key
// but there are two cases accordin
// to they way there are added and cloned in sequence 
const obj1 = { key1 : "value1",
                key2 : "value2",     
            

}

const obj2 = {
    key1 : "addjqhrgthbr",
    key3 : "value3",
   key4 :   "value4",
}

// const newobj = {...obj1};
// const newobj = {...obj1,...obj2};
// console.log(newobj);

// case1 :
// here the key of obj2 will override the key of obj1
// as it is addad aferwards 

// const newobj ={...obj2,...obj1};
// console.log(newobj);

// case2:
// here the key of obj1 will override the key of obj2
// as it is added afterwards

// ---------------------------------------------------
// also we can add new key value pairs

// const newobj ={...obj1,...obj2,key23:"abcd"};
// console.log(newobj);


// ------------------------------------------------------------------------
// using spread Iterable is string in object

//  .// we spread a string and will be saved as key value pair 
// console.log(newobj);

// --------------------------------------------------------

// spreading array items with key value pairs
const newobj ={ ...["item1","item2"]};
console.log(newobj);
// here index will be key and value will be element at that index
