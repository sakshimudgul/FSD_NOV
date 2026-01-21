import React, {useState , useRef} from "react";

// useRef
/**
 * Learnings :
 * const username = useRef("Sakshi");
 * useRef @returns object {current : "Sakshi"}
 * mutation with useRef ---- components doesnot re-render
 * In useRef ---> string, number,[],{} can be stored.
 * also html elements can be stored.
 
 */

// example of useRef 
// difference between useRef and useState.
// handle from inputs using useRef.
// [state.setState]= useState('');
// previously we made all controlled components.
// we can make uncontrolled event or components using useRef.

function ExampleuseRef2() {
    console.log("Component Rendered useRef 2");
    // html elements can be stored.
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleClick = () => {
        console.log(usernameRef.current);
        const usernameInput = usernameRef.current;
        const passwordInput = passwordRef.current;
        console.log(usernameInput.value);
        console.log(passwordInput.value);
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    // state vs useRef

    // state --> controlled
    //  useRef -> UnControlled ->
    // --- we need to di in js.
    // --- in useRef --> string,number,[],{} can be stored.
    // also html elements can be stored.
    // -Doesnot re-render.


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id="username" ref={usernameRef} />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" ref={passwordRef} />
            <br />
            <button onClick={handleClick}>Submit</button>
        </form>
    );


}

export default ExampleuseRef2;