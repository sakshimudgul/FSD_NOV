import React, { useState } from 'react';
import Greeting from './Components/Greeting';
import Posts from './Components/PropsPassing/Posts';
import Form from './Components/Events/Form';

function App(){
  const firstName = "Sakshi";
  const lastName = "Mudgul";
  const users = ["user1" ,"user2","user3"];

  const Followers = [
    { id : 1, name:"Sanika" , username:"Sanika123"},
    { id : 2, name:"Sachin" , username:"Sachin123"},
    { id : 3, name:"Savi" , username:"Savi123"},
    { id : 4, name:"Akash" , username:"Akash123"},
    
  ];
  return (
    <>
    <Greeting firstName={firstName} lastName={lastName}/>
    <Greeting firstName={firstName} lastName="Sharama"/>
    <Greeting firstName="Rohit" lastName="Sharama"/>
    <Greeting>
      <h1>Hello There</h1>
      <p>Any thing inside this is children  prop</p>
    </Greeting>
    <Posts Followers = {Followers}/>
    <Form/>
    </>
  );
}


export default App;
