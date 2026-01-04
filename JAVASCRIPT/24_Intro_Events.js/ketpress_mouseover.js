// KeyPress Event

/*
What is keypress event in javascript?
The jeypress event is fired when a key that produces a character value is pressed down
Examples of keys that produce a character value are alphabeticl, numeric,and punctuation keys.


what is the keyprees attribute in javascript?

This attribbute fires when a user presses a key on the keyboard.
this event attribute cannot be used for all keys(e.g ALT,CTLR,SHIFT,ESC) IN all browsers.

*/

const body = document.body;

body.addEventListener("keypress",(e)=>{
    console.log(e.key);
})

// Mouse over Event

/*
 What is the difference between mouseover and mouseleave?
 mouseleave a pointing device is moved off  the element that has the listenre attsched.
 mouseover a pointing device is moved onto the element that has the listener attached
 or onto one of its children. mouseout a pointing device is moved off the element that
 has the listener attached or off one of its children.

 The mouseover event fires when the users moves the mouse onto an element.
 unfortumately these events bubblre up . fires when  the user moves the mouseover
 the element you registered the on or one its desendants.
*/

const mainButton = document.querySelector(".btn-headline");
// console.log(mainButton);

mainButton.addEventListener("mouseover",(e)=>{
     console.log("mouse event occured !!");s
})

mainButton.addEventListener("mouseleave",(e)=>{

    console.log("mouseleave event occured !!");
})
