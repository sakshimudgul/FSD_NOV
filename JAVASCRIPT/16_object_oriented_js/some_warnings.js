// Don't do this mistakes :

const user1 = {
    first_name : "Sakshi",
    age : 21,

    about : function (){

        console.log(this);

        console.log(this.first_name,this.age);
    }
}

// user1.about(); // Sakshi 21
// here this of about is positioning to object instance of user1

const myfunc = user1.about;
myfunc();

// we assigned about function to myfunc

/*

What is actually happening is :
const myfunc = function(){
      
      console.log(this);
      console.log(this_name,this.age);
      }

      So its in global and here this pointing to global window object
      hence when we call myfunc();
      it gives undefined undefined
      Because there os on  other object instance for reference to yhis keyword
*/

// to solve this problem we need to bind the function with object
// so lets


const myfunc1 = user1.about.bind(user1);
myfunc1();

// problem solved: