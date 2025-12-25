// ######################### some method ############################
/* 
what does some() do in javascript?
The some() method of array instance testes whetherat least   one
element in array passes the test implemented by the provided function
It returns true if ,in the array , it finds an element 
for which the provided function rerurns true; otherwise it returns false
It does"ntmodify the array

*/

const numbers = [3,6,4,9];

const ans = numbers.some((numbers) => {
    return numbers % 2 === 0;
});

console.log(ans);

// -------------------------------------------------------

// real world example

const userCart = [
     {product : 1, product_Name : "Mobile", price : 12000},
    {product : 2, product_Name : "TV", price : 22000},
    {product : 3, product_Name : "Laptop", price : 14500},
    {product : 4, product_Name : "charger", price : 1000},
    {product : 5, product_Name : "Tab", price : 2400},
    {product : 6, product_Name : "Mouse", price : 800},

]

const giveDiscount = userCart.some((product)=> {
    return product.price<30000;
} );

console.log(giveDiscount);