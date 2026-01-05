//  1. Event Bubbling / Event propogation
//  2. Event capturing
//  3. Event Delegation

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// addEventListener (event, function ,capture="true")
// capturing event

child.addEventListener("click",()=>{
    console.log("capture !!!!! child !!!");
},true);


parent.addEventListener("click",()=>{
    console.log("capture !!!!! parent !!!");
},true);


grandparent.addEventListener("click",()=>{
    console.log("capture !!!!! grandparent !!!");
},true);

document.body.addEventListener("click",()=>{
    console.log("capture !!!! body !!!");
},true);

// addEventListener (event,function,capture="false")
// Event Bubbling / Event ProPOgation.

// ------------------------------------------------------------------

child.addEventListener("click",()=>{
    console.log("Bubble child !!!!");
})

parent.addEventListener("click",()=>{
    console.log("Bubble parent !!!!");
})
grandparent.addEventListener("click",()=>{
    console.log("Bubble grandparent !!!!");
})

document.body.addEventListener("click",()=>{
    console.log("Bubble body !!!!");
})

// ---- Event Delegation
grandparent.addEventListener("click",(e)=>{
    console.log(e.target);
})