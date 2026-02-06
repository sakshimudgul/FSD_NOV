const userMethods = {
    // user method objects
    // method about
    // key : value
    // about : method 
    about : function(){
        return  `${this.first_name} ${this.age} year's old.`;
    },
    // method is18
    // key : value
    // is18 : method
    is18 : function(){
        return this.age>=18;
    },

    sing : function(){
        return `abc efg hijk lmn opqrs tuvw xyz`;
    }
}

function createUser(first_name,last_name,email,age,address){

    const user = Object.create(createUser.prototype);
    user.first_name = first_name,
    user.last_name = last_name,
    user.email = email,
    user.age = age,
    user.address = address


    return user;
}

// ---> We already have prototype so lets add function  here instead of 
// creating new __proto__
// console.log(createUser.prototype);

createUser.prototype.about= function(){ 
    return `${this.first_name} ${this.last_name} ${this.age}
    years old.`;
}

createUser.prototype.is18=function(){
    return this.age>=18;
}

createUser.prototype.sing=function(){
        return 'abc def ghi jkl mnop qrst uvw xyz';
}

console.log(createUser.prototype);

// _proto_ is reference
// prototype is empty object where mwthods and properties can be added