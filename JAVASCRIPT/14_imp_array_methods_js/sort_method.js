// Sort method

// sorting mehtod
// According to ASCII values

// a to z = 97 to 22
// A to Z = 65 to 90
// 0 to 9 = 48 to 57

/* 
the Sort() sorts the element of an array.
The sort() overwrites the original array.
the sort() sorts the elements as strings in alphabetical
and acsending order.

*/

// sort method mutates original array
// for each , Map ,filter did't change orirginal array
// returna new array


// // 5,9,1200,400,3000
// 5,9,400,1200,3000 (expected output)

// const numbers =["5","9","1200","400","3000"];
// ["5","9","1200","400","3000"]  // IUnput

// ["1200","3000","400","5","9"];  // OUTPUT



// numbers.sort();
// console.log(numbers);


// sorting userName

const UserName = ["Sakshi","Radhika","Kalyani","Kaveri","Pranav"];
UserName.sort();
console.log(UserName);

// then how to get expected output
// sort Mthod can also take callback function

const numbers = [ 5,9,1200,400,3000];
numbers.sort((a,b) => {
    return a-b;
})

console.log(numbers);


// 1200 , 400
// a ,b
// a - b
// 1200 - 400 = positive 
// i.e > 0 (greater than  0)
// --> then  b,a
// 400 , 1200

// a-b --> negative ---> a,b
// 5,9 ---> -4
// a ,b 
// 5,9


// real world example
// Price low to high or high to low

const products = [
    {product_Id : 1,product_Name : "mobile", price : 12000},
    {product_Id : 2,product_Name : "TV", price : 22000},
    {product_Id : 3,product_Name : "Laptop", price : 35000},
    {product_Id : 4,product_Name : "charger", price : 1000},
    {product_Id : 5,product_Name : "ipad", price : 15000},

]

// low to high

const lowToHigh = products.slice(0).sort((a,b) => {
    return a.price - b.price;
})

console.log(lowToHigh);


// high to low

const HighToLow = products.slice(0).sort((a,b) => {
    return b.price - a.price;
})

console.log(HighToLow);
