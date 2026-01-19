import ElementClick from "./ElementClick";

export default function Form(){
    const handleClick = (event) => {
        console.log("click btn triggered", event);
        console.log("click btn triggered",event.target);
        //  event.target.textContent = "You clicked Button";
    };

    const handleClick2 = (firstName,lastName) => {
        console.log("You clicked me 2" ,firstName , lastName);
    }; 

    const handleElementClick = () => {
        console.log("YOu click ElementClick component");
    };

    // Wrapper function
    // function wrapper(){
    //   handleClick2("Sakshi","Mudgul");
    // }

    return (
        <div className="form">
            <h1>form Section - Events Learning : </h1>
            {/* <button onClick= {handleClick}>Click me</button>
            <br> <br>
            <button
            onClick={(e) => {
                event.target.textContent = "you clicked Button 2";
                handleClick2("Sakshi","Mudgul");
                }}
                >
                Click Me
                </button> 
                   */}

           <ElementClick onClick= {handleElementClick}/>
        </div>
    );
}