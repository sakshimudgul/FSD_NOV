import React,{ useState, useEffect } from "react";
import Counter from "./Components/Counter";
import StateArray from "./Components/StateArray";
import StateObject from "./Components/StateObject";

function App () {
  console.log("component rendered");

  /*
  // ?In React we cannot use normal variables to change UI.
  let firstName = "Sakshi";

  const handleChange = (e) => {
    console.log("Clicked!", firstName);
    firstName = "siddesh";
    };
  */ 

    // state ---> data that can change and cause the UI to re-render.
    // state --> data 
    //  !when state changes UI re-render and state changes.
    // don't declare state inside JSX itself-you declare it in the component using hooks ,and then use it inside JSX/
    // useState Hook
    // useState(defaultValue);--->
    // return array of 2 things --->
    // [state value , function to update state value.]
     
    const returnedVal = useState("trailvalue");
    console.log(returnedVal);

   const [firstName , setFirstName] = useState("Savi");
   const handleChange = (e) => {
    if (firstName ==="Savi") setFirstName("Sakshi");
    else setFirstName("Savi");
   };
    

  //  when state changes here our component re-render and UI afterwards on handle change.

  return (
    <div>
      <h1>{firstName}</h1>
      <button onClick={handleChange}>change Name</button>
      <br />
      <br />
      <br /><br />
      <Counter/>
      <br />
      <br />
      <br />
      <StateArray/>
    </div>
  );




  };

  export default App;




  