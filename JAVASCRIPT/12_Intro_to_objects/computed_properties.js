// computed Properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

//  const obj={
//      "objkey1" : "myvalue1",
//      "objkey2" :  "myvalue2",
//      }

// Here we want to fetch the values of key1 and kay2
// for it need to we use computed properties
// just like value 1 ND VALUE2 feteches its variable data
// we want it for keys so just add bracket notation
// const obj = {
//     key1 : value1,
//     key2 :value2,
// }

// other way

const obj = { };

obj[key1] = value1,
obj[key2] = value2

console.log(obj);