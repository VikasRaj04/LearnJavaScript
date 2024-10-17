// if

// const isUserLoggedIn = true;
const temprature = 41;

if(temprature === 41){
    console.log("less than 50");
}
else{
    console.log("Greater than 50")
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 200;

if(score > 100){
    const power = "fly";
    console.log(`User power: ${power}`);
}

// console.log(`User Power ${power}`)




const balance = 1000;

// if(balance > 500) console.log("test"), console.log("Test2");


if(balance < 500){
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750")
}else if(balance < 900){
    console.log("less than 900")
}else{
    console.log("less than  1200")
}




const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(isUserLoggedIn && debitCard){
    console.log("allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In")
}      