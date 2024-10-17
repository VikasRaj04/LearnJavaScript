// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// truthy values

// "0", 'false', " ", [], {}, function(){}


const userEmail = [];

if(userEmail){
    console.log("got user email");
}else{
    console.log("Don't have user email")
}


if(userEmail.length === 0){
    console.log("Array is Empty")
}

const EmptyObject = {}

if(Object.keys(EmptyObject).length === 0){
    console.log("Object is Empty");
}


// Nullish Coalescing Operator (??): Null undefined;

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20

console.log(val1);


//  Ternory Operator

// condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");