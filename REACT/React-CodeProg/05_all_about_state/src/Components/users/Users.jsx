import React from "react";
import { v4 as uuid } from "uuid";
import "./User.css";
import User from "./User";

function Users({ users, increaseAge , deleteUser }) {
   console.log("Users rendred");

   return (
    <div>
        <ul>
            {users
            ? users.map((user) => (
               <User
                 {...user}
                 key={user.id}
                 increaseAge={increaseAge}
                 deleteUser={deleteUser}
               /> 
            ))

            :""}

            
        </ul>
    </div>
   );
};

export default Users;