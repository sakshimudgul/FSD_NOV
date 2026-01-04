// ########################## Event behind the scenes ########################

console.log("~!!!!!!! script start");

const allBtns = document.querySelectorAll(".my-buttons button");
console.log(allBtns);


/*
for (let btn of allBtns){
    btn.addEventListener("click",(e)=>{
        console.log(e.target);
    });
};

 */

/* 
allBtns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        console.log(e.target);
    });
});


*/


allBtns.forEach((btn)=>{

    btn.addEventListener("click",(e)=>{
        let sum = 0;
        for(let i = 0; i < 10000000000; i++){
            num += i;
        }
        console.log(e.currentTarget.textContent,num);
    });
});

let outerVar = 0;
for(let i = 0; i < 1000000000000;i++){
    outerVar+=i;

}

console.log("value of outer variable :", outerVar);
console.log("~!!!!!!! Script End");