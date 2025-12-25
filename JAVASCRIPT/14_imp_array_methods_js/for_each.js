// Important array methods

// for each /
// map
// filter
// reduce



// -------------------------------- For each --------------------------
/*
const numbers = [4,2,5,8];
function myfunct(number,index){
    console.log("index is",index);
    console.log(`${numbers}*2 = ${numbers*2}`);

    console.log(`index is ${index} and number is ${number}`);

}

multiplyby2(numbers[0],0);
multiplyby2(numbers[1],1);
multiplyby2(numbers[2],2);

for(let i=0;i<numbers.length;i++){
    myfunct(numbers[i],i);
}

numbers.forEach(myfunct);
*/

// --------------------------------------------------------------------------


// const numbers = [4,2,5,8];
// numbers.forEach(function(number,index){
//     console.log(`index is ${index} and numbers is ${number}`);
// })


// -----------------------------------------------------------------------------

const numbers = [4,2,6,8];
numbers.forEach(function(number,index){
    console.log(`${number} x 2 = ${number*2} and at index ${index}`);

})


const users = [
    {firstName : "Sakshi", age : 21},
    {firstName : "Chetan", age : 19},
    {firstName : "onkar", age : 25},
    {firstName : "sanika", age : 21},
    {firstName : "anvi", age : 22},
    {firstName : "manisha", age : 20},
    {firstName : "Nilhi", age : 22},
    {firstName : "sachi", age : 24},
    {firstName : "pratha", age : 23},

]
  
// more often seen
users.forEach(function(users){
    console.log(users.firstName);
});

// recent Es6 
for(let user of users){
    console.log(user.firstName);
}

const res = users.map((a,b,c) => {
    console.log(a);
    console.log(b);
    console.log(c);
    return a.firstName;
})

console.log(res);