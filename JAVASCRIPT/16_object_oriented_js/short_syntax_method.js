// short syntax methods

// method function inside object

const user1 = {
    first_name : "Sakshi",
    age : 21,

    about (){
        console.log(this);

        console.log(this.first_name,this.age);
    }
}

user1.about();