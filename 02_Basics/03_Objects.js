// singleton                    // type 1
// Object.create                // one method to create objects

// object literals              // type 2

const mySym = Symbol("key1");   // declare a simbol

const JsUser = {                // this is object
    name: "Vikas",
    "full name": "Vikas Raj",   // as a string key
    [mySym]: "mykey1",          // syntax of creating Symbol in object as a key
    age: 19,
    location: "ludhiana",
    email: "vikas8934@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)               // access method 1 of object keys
console.log(JsUser["email"]);           // access method 2 of object values keys
console.log(JsUser["full name"]);       // special case for string keys
// console.log(JsUser.mySym);           // print symbols or access symbol but wrong way 
// console.log(typeof JsUser.mySym);    // because its type is string but it is symbol
console.log(JsUser[mySym]);             // it is correct way of accessing the symbol of object


JsUser.email = "vikas@gmail.com";       // change the value of object keys;
// Object.freeze(JsUser);               // freez object so that no more changes will made
JsUser.email = "vikas794162@gmail.com";

console.log(JsUser);

JsUser.greeting = function() {          // creating a function using object
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {       // another function
    console.log(`Hello Js User, ${this.name}`);     // this means same object in which we are working
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())