//   ######################################## Click events on mmultiple buttons #####################################

console.log("Hello world !");


/* 
const firstbtn = document.querySelector("#one");
firstbtn.addEventListener("click",function(){
    console.log("you Click me !!");
})


*/

/* 
const firstbtn = document.querySelectorAll("button");
console.log(allbtns);

for(let btn of allbtns){
    btn.addaeventListener("click",function(){
        console.log("you Click Me!!");
    });
}

 */
/* 
const allbtns = document.querySelectorAll("button");
console.log(allbtns);

for(let btn of allbtns){
    btn.addEventListener("Click",function(){
        console.log(this);
        console.dir(this);
        console.log(this.textContent);
    });
}

// Incase of arrow function this point to window object.

*/


/*
const allbtns = document.querySelectorAll("button");

for(let i = 0; i< allbtns.length;i++){
    allbtns[i].addEventListener("click",function(){
        console.log(this);
        console.dir(this);
        console.log(this.textContent);
    });
}

*/

const allbtns = document.querySelectorAll("button");

allbtns.forEach(function(btn){
    btn.addEventListener("click",function(){

    console.log(this);
    console.dir(this);
    console.log(this.textContent);
 });

});