// Objects inside Array

// Very Useful in Real world Applications

const users = [
    {
    userid : 1,
    user_name: "Yatin",
    gender : "male"},
    {
    userid : 2,
    user_name: "siddesh",
    gender : "male"},
    {
    userid : 3,
    user_name: "shivani",
    gender : "female"},

]

console.log(users);

// Iterating it :

for(let user of users){
   
    console.log(user.user_name);
    console.log(user.userid);
     console.log(user.gender);
     console.log(user);
}

// Feature   ,         for...in,                   for...of
// Main Target,     Objects,                  Arrays / Iterables
// What you get,    The Key (string),          The Value (any type)
// Array Behavior,  "Returns indices (0, 1, 2)",  "Returns items (""a"", ""b"", ""c"")"
// Prototypes,      Includes inherited properties,  Ignores them