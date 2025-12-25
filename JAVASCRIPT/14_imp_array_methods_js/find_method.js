// find Method

/*  
Find() methods returns the value of the first element
that passes a test . the find() method executes a function
for each array element . the find() method returns undefined
if no elements are found . the find() method does not execute
the function for empty element.

*/

/*
const myArray = ["hello","dog","cat","lion"];

function islength(string){
    return string.length===3
}

const ans = myArray.find(islength);
// returns first occurence of condition 
// which call back function gave if it satisfy
// element is returned

console.log(ans);

*/


// real world example


const users = [
    {userId : 1,firsrName :"Sakshi", age : 22},
    {userId : 2,firsrName :"Om", age : 19},
    {userId : 3,firsrName :"Avni", age : 13},
    {userId : 4,firsrName :"Daya", age : 25},
    {userId : 5,firsrName :"yash", age : 18},
    {userId : 6,firsrName :"chetan", age : 20},
    {userId : 7,firsrName :"savi", age : 26},
    {userId :8,firsrName :"Pranav", age : 25},
]

const userfound = users.find((user) =>{
    return user.userId ===3;
    

});

console.log(userfound);