// Nested distructing 
const users = [
    {
        userid : 1,
        user_name : "Sakshi",
        gender : "Female"
    },
    {
        userid : 2,
        user_name : "Chetan",
        gender : "Male"
    },
    {
        userid : 3,
        user_name : "Sai",
        gender : "Male"
    },
]

const[,{user_name : username,userid,gender},
    {user_name : user3,gender : user_gender , userid : user}
] =users;
console.log(username);
console.log(userid);
console.log(gender);
console.log(user);
console.log(user_gender);
console.log(user3);


// Here we distructured array
// where we have objects as value in it;
// const[user1,user2,user3]=users;
// console.log(user1); 
// console.log(user2); 
// console.log(user3); 

// Now object also have key value pairs in it
// how can we destructure it 
// const[{user_name},,{gender}] = users;
// console.log(user_name);
// console.log(gender);

// Assignment variable as well
// const[{user_name : user1_username,userid},,{gender:user3_gender}]=users;
// console.log(user3_username);
// console.log(userid);

