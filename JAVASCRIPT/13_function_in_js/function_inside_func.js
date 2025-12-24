// ########################### function inside function #############################

const app = () => {
    // declaring function inside function
    const myfunction = () => {
        console.log("Inside myfunction");
    }

    // declaring function inside function
    const addition = (a,b) => {
        return a+b;

    }

    // declaring function inside function
    const multiply = (num1,num2) => num1*num2;

    // action of main function:
    console.log("inside app");
    // calling inside function 
    myfunction();
    // calling inside function
    console.log(addition(3,6));
    console.log(multiply(4,7));
}

app();  //main function is called