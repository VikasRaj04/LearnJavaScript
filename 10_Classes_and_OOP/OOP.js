const user = {
    username: "Vikas",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got User Details from database")
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)



function User(username, loginCount, isSignedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isSignedIn = isSignedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this;
}

const userOne = new User("Vikas", 13, true);
const userTwo = new User("ChaiAurCode", 22, false);

// console.log(userOne.constructor);
console.log(userOne);
console.log(userTwo);
console.log(typeof userOne);


