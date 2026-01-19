import React from 'react';

export default function Greeting({
    firstName,
    lastName,
    users,
    fullName = "Sakshi Mudgul",
    children,

})  {
    //console.log(props);
    // !props : Destructure
    // const {firstName, lastName} = props;
    // console.log(firstName , lastName);

    // !props are Immutable ! Read - Only ! It affects parent components and make function Impure.
    // props.firstName ="abc "; //Type Error // Cannot assign property to read only.

    return (
        <div>
            <h1>Greeting!! Hello {firstName}{lastName}

            </h1> 

        {/*{users ?(
         <div>
           Yes
        {users.map((users) => (
          <div>{users}</div>
          ))}
          </div>
       ) : (
        <div>No</div>
       )} */}

       {/*Default props */}
       <div>{fullName}</div>

        {/* children props */}
       <div>{children}</div>
        </div>
    );
}

// export default function Greeting(props){
// const{firstName , lastName} = props;
// return(
// <div>
// <h1>
// Greeting!! Hello {firstName} {lastName}
// </h1>
//</div>
// );
// };