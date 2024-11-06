// let myName = "Vikas      ";
// let channel = "chai      ";

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"];


let heroPower = {
    thor: "hammer",
    spider: "sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spider}`);
    }
}

Object.prototype.vikas = function(){
    console.log(`Vikas is present in all objects`);
}

Array.prototype.heyVikas = function(){
    console.log(`Vikas says hello`);
}

// heroPower.vikas();
// myHeros.vikas(); 
// myHeros.heyVikas();
// heroPower.heyVikas();




// Inheritence

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;


// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUsername = "ChaiAurCode       ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength();


"Vikas".trueLength();
"iceTea".trueLength();