import React , { useState } from "react";

const StateObject = () => {
    const [person, setPerson] = useState({
        id: 1,
        firstName: "sakshi",
        lastName: "Mudgul",
        email: "sakshi@gmail.com",
        phone: "9356610217",
        age: 21,

    });

    const increaseAge = (e) => {
        console.log("age updated!");
        setPerson((prevState) => {
            return { ...prevState, age: prevState.age + 1};

        });
    };

    return (
        <div>
            <h1>Update State in objects</h1>
            <p>firstName : {person.firstName}</p>
            <p>lastName : {person.lastName}</p>
            <p>email : {person.email}</p>
            <p>phone : {person.phone}</p>
            <p>age : {person.age}</p>
            <div>
                <button onClick={increaseAge}>Increase Age</button>
            </div>
        </div>

    );
};

export default StateObject;