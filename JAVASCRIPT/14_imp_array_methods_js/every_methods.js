// ############################ Every Methods ##########################

/*

The every() methods is an iterative method . It calls a provided
callbackfn function once for each element in an array ,utill the 
callbackfu returns a falsy value. If such an element is found ,
every() immediately returns false  and stops iterating through the
array.

*/

const numbers = [2,4,6,8,10];

const ans = numbers.every((numbers) => {
    return numbers % 2 === 0;
});


// callback function ----> true/false is returned (boolean)
// every method ----> true/false (boolean).


console.log(ans);

// ----------------------------------------------------------

// Real world example of every

const userCart = [
    {product : 1, product_Name : "Mobile", price : 12000},
    {product : 2, product_Name : "TV", price : 22000},
    {product : 3, product_Name : "Laptop", price : 14500},
    {product : 4, product_Name : "charger", price : 1000},
    {product : 5, product_Name : "Tab", price : 2400},
    {product : 6, product_Name : "Mouse", price : 800},
]

const giveDiscount = userCart.every((product) => {
    return product.price<35000;
})

console.log(giveDiscount);