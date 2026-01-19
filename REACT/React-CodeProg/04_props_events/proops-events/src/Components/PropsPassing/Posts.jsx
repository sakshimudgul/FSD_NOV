import React from 'react';
import Post from "./Post";


const Posts = (props) => {
    console.log(props);
  return (
    <>
    <h1> Posts</h1>
    <div>
        { props.Fpllowers
        ? props.Follewers.map((prop) => <Post {...prop} key={prop.id}/>)
         : ""}

         {/* for static cases we can pass index as key not for dynamic data
          issue is that id data is dynamic and wemanipulate
          let*/}
          {/*{props.Followerse
               ? props.Followers.map((prop,index)=><Post {...prop} key = {index}/>)
               : ""} */}
    </div>
    </>
  );
};

export default Posts;