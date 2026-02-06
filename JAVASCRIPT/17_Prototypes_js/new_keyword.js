// New keyword :

/*
  1. creates empty object // this = {}
  2. return this
  3 .  const user = Object.create(createUser.prototype); no need to apply this
  // this. automatically creates link of function and proto reference to prototype

*/

function createUser(first_name,age){
    this.first_name=first_name;
    this.age =age ;
}

createUser.prototype.about = function () {
    console.log(this.first_name,this.age);
}

