// data type - 1. premetive; 2. non-premitive;

// #Premitive DataTypes
// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt;

// Js is Dynamical Language
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 12321321233n; //bigInt

// #Reference (Non Primitive)
// Array, Objects, Funtions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Vikas",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof (myObj));

// score, scoreValue = Number;
// isLoggedIn = Boolean;
// outsideTemp = object;
// userEmail = undefined;
// id, anotherId = symbol;
// bigNumber = bigint;
// heros array = object;
// myobje = object;
// myFunction = function;


// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "VktCoder";
let anotherName = myYoutubeName;
anotherName = "Chai aur Code";

console.log(myYoutubeName);
console.log(anotherName);

let user1 = {
    email: "vikas@gmail.com",
    upi: "user@ybl",
}

let user2 = user1;
user2.email = "user@gmail.com";

console.log(user1.email);
console.log(user2.email);