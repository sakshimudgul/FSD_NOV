/*

// get multiple elements using getElementbyClassname

const navItems = document.getElementsByClassName("nav-item");
//with getElementByClassName we get HTMLCOLLECTION
console.log(navItems);
// we get HTMLCollection as output
//Array like object (means we can do indexing , but wont array methods,
// we can iterate on it)

console.log(navItems[0]);
console.log(navItems[3]);

// it is object
console.log(typeof navItems[2]);
// But not array
console.log(Array.isArray(navItems));


*/
/* 

// get multiple items using querySelectorAll

const navItems = document.querySelectorAll(".Nav-item");
// with querySelectorAll we get nodeList
console.log(navItems);
//Array like object (means we can do indexing , but wont array methods,
// we can iterate on it)

console.log(navItems[0]);
console.log(navItems[3]);


*/

//## ########################################################################
 ///     Iterate Elements - using getElementsByClass  / getElementbyTagName
 // #################################################################################




//  get multiple elements using getElementClassname /  getElementbyTagname
// HTMLcollection\\

// const navItems = document.getElementsByClassName("nav-items");

// HTMLCollection :
// Array like object
// Indexing use -----> can Iterate --->using loop or index
// length property

// console.log(navItems.length);

// 1.simple for loop
// 2.for  of loop
//  3. for each ----> cannot use this method to iterate through HTMLCollection

// Iterate through nav items 
// for(let i = 0; i < navItems.length;i++){
//     console.log(navItems[i]);
// }


// so we have to solve below problem we have getElementByTagName.

// for(let i = 0;i < navItems.length;i++){
//     const navItems = navItems[i];
//     navItems.style.backgroundColor ="#fff"; //changed
//     navItems.style.color ="black";// No change as text is inside li a i.e anchor tag
// }


/* 
// 2 .for of loop

for (let anchorTag of anchorTags){
    anchorTag.style.color ="purple";
    anchorTag.style.backgroundColor ="#fff";
    anchorTag.style.fontWeight ="bold";
}

*/


/* 
// 3.for each ----> cannot use this method to iterate through HTMLCOLLECTION

anchorTags.forEach((anchorTag)=>{
    anchorTag.style.color ="purple";
    anchorTag.style.backgroundColor ="#fff";
    anchorTag.style.fontWeight ="bold";
});


*/

//-------------------------------------------------------------------------------
// But we resolve problem
// By changing HTMLCollection -----------------> To Array

// const navItems = document.getElementsByClassName("nac-item");
// // As we going to change HTMLCollection we are using let instesd of const

// let anchorTags = document.getElementsByClassName("a");

// anchorTags = Array.from(anchorTags);
// console.log(Array.isArray(anchorTags));//True
// // /By changing HTMLCOLLECTIONS -----> to Array
// // we can use for Each method now  and all the array method
// anchorTags.forEach((anchorTag)=>{
//     anchorTag.style.color ="purple";
//     anchorTag.style.backgroundColor ="#fff";
//     anchorTag.style.fontWeight ="bold";
// });


// ########################################################################3
//                    Iterate Elements - using queerySelectorAll
// ########################################################################3333

/*


let anchorTags = document.querySelectorAll("a");

console.log(anchorTags);
// querySelectorAll returns Nodelist

// Incase of nodeList ----> All 3 works;
// 1. simple for loop
// 2. for of loop
// 3. for each

// 1. simple for loop

for(let i = 0;i< anchorTags.length;i++){
    const anchorTag = anchorTag[i];
    anchorTag.style.color="green"; //No changes as text is inside li a i.e anchor tag
    anchorTag.style.fontWeight="bold";
}

*/

/*
 
// 2.for of loop

for(let anchorTag of anchorTagss){
    anchorTag.style.color ="purple";
    anchorTag.style.backgroundColor ="#fff";
    anchorTag.style.fontWeight ="bold";
}

*/


/*


// 3.for each method ----> can be used in case of Nodelist

anchorTags.forEach((anchorTag)=>{
    anchorTag.style.color ="purple";
    anchorTag.style.backgroundolor ="#fff";
    anchorTag.style.fontWeight ="bold";

});

*/


/*

// converting NodeList in Array

anchorTag = Array.from(anchorTags); // convert NodeList --->
console.log(Array.isArray(anchorTags)); // true


 */