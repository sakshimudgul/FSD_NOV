// ###########333333333333333333  reduce methods ###################


// reduce methods 
// Takes callback function as input 


const numbers = [1,2,3,4,5,10];

// Aim : sum of all the numbers in array

const total = numbers.reduce((accumulator,currentvalue) => {
    return accumulator + currentvalue ;

} ,0);
 
console.log(total);

// accumulator , current value , return 
//   1         ,       2           3
//   3         ,       3           6
//   6         ,       4           10
//   10        ,       5           15
//   15        ,       10          25

// -----------------------------------------------------------

// real world example
const userCart =[
     {product_Id : 1,product_Name : "mobile", price : 12000},
    {product_Id : 2,product_Name : "TV", price : 22000},
    {product_Id : 3,product_Name : "Laptop", price : 35000},
    {product_Id : 4,product_Name : "charger", price : 1000},
]

// we also pass initial value in reduce

const cartTotal = userCart.reduce((totalPrice,currentProduct) => {
    return totalPrice + currentProduct.price;
},0);
// initial value = 0
// set 0 here in intial value

console.log(cartTotal);


// totalPrice      currentProduct Price       return
//   0                 12000                   12000
//  12000              22000                   24000
//  24000              35000                   59000
//  59000              1000                    70000