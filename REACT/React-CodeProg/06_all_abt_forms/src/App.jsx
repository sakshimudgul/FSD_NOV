import { useState } from 'react';
import './App.css';
import HandleMultipleInputs from "./Components/HandleMultipleInputs.jsx";

function App() {
  const [username , setUsername] =  useState("");
  const [password , setPassword] =   useState("");
  const [email , setEmail ] = useState("");


  // const handleInput = (e) => {
  //   console.log("handled", email.target.value);
  //   setUsername(() => {
  //     return email.target.value;
  //   });
  //  
  // };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Submitted");
  }

  // Radio buttons

  const [gender ,setGender] = useState("female");  
  
  return (

    <div className='App'>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username :</label>
          <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        </div>

        <div>
          <label htmlFor="password">Password :</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        </div>

        <div>
          <label htmlFor="email">Email :</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        </div> 

        <button type="submit">Submit</button>
      </form>

      UserName : {username}
      <br /><br />
      Password : {password}
      <br /><br />
      Email : {email}

      {/*<>Radio buttons </> */}

      <h2>Radio Buttons</h2>
      <label htmlFor="male">Male</label>
      <input type="radio"  checked={gender === "male" ? true : false}
      onChange={() => {
        setGender("male");
      }} />

      <br /><br />

      <label htmlFor="female">Female</label>
      <input type="radio"  checked={gender === "male" ? true : false}
      onChange={() => {
        setGender("female");
      }} />

      <br /><br />

      <label htmlFor="other">Other</label>
      <input type="radio"  checked={gender === "other" ? true : false}
      onChange={() => {
        setGender("other");
      }} />

      {/* Handle form input with single function */}
      <HandleMultipleInputs />


    </div>
  );




}

  

  
export default App;
