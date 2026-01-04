// This keyboard in events


/* 
const btn = document.querySelector(".btn-headline");
function clickMe(){
     console.log("you clicked me !!!!");
     console.log("value of this");
     console.log(this);
}

btn.addEventListener("click",clickMe);

*/
// value of this is button itself in case of 
// function declaration

const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
    console.log("you clicked me !!!");
    console.log("value of this");
    console.log(this);
});


// value of this is button itself in case of 
// callback function declaration

// const btn = document.querySelector(".btn-headline");

btn.addEventListener("click", ()=>{
    console.log("you clicked me!!!");
    console.log("value of this");
    console.log(this);
});

// value of this is button itself in case of 
// callback function declarartion
