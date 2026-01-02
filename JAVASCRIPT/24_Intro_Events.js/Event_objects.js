// ############################# Event Object ##############################

/*


const firstbtn = document.querySelector("#one");

// Adding click event with addaeventListner method
// It takes Event and functions are argument

firstbtn.addEventListener("click",function(){
    console.log(this);
})

*/

// on click ----> after event ---> here function declaration this is return button only

// --- in case of arrow function this value changes to one more scope

//jab  bhi mai kisi bhi element pe event listner add hoga
// js engine ---> line by line code execution occurs
//browser ----> js Engime + Extra features
// browser ---> js Engine + webApi

// When browser gets to know that user performed event of click event, then browser
// js Engine + Extra features will do two things:
// 1)Callback function will be given to js engine
// 2) Callback function will be given with information of event which happened at time of
// function execution
// above information of event ---> will be i form of object
console.log("here")
const firstbtn = document.getElementById("one");
const secbtn = document.querySelector("#two");
console.log("here")

// Adding click event with addEventListener method
// It taked event and function are argument
console.log("here",firstbtn)

firstbtn.addEventListener("click",function(e){
    console.log("here")

    console.log(e); 
});

// the return event object consist many properties Amongthe two areimp ones:
// target property ---> return which element triggered the event .---> button #one here
// currentTargrt property --> returns which element EventListeners was attached null here

// firstbtn.addEventListener("click",function(e){
//     console.log(e.target);
// });

firstbtn.addEventListener("click",function(e){
    console.log(this,e);
})

secbtn.addEventListener("click",(e)=>{
    console.log(e.target);
});