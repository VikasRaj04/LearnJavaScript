
const user = {
    username: "vikas",
    price: 999,

     // A function inside user object
    welcomeMessage: function(){                        
        console.log(`${this.username}, Welcome to Website`);        // this keyword is using same context
        console.log(this);
    }
}

// user.welcomeMessage();                           // function called
// user.username = "sam";                           // username change
// user.welcomeMessage();                           // now this context is sam;

console.log(this);                                  // in Node it will empty object and in Dom it is window



function chai(){
    let username = 'Rahul';
    // console.log(this.username)               //not accesible in function give undefined;
    // console.log(this);                       // have many values
}

chai();


// const chai2 = function(){                    // function with a variable
//     let username = "raj";
//     console.log(this.username)
// }

// chai2();





const code = () => {                            // arrow function defination
    let username = "vikas";
    // console.log(this);
}

code();



// const addTwo = (num1, num2) => {
//     return num1 + num2;                                 // Explecit Return
// }

// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) =>  num1 + num2;             // Implecit Return
// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) =>  (num1 + num2)            // we can use paranthesis


const addTwo = (num1, num2) =>  ({username: "Vikas"})       // print object in arrow function 
console.log(addTwo(3, 4));





// const myArray = [3, 4, 5, 6, 4]
// myArray.forEach()













// this object ke andar use hota hai. function ke andar this keyword direct use nahi hota value undefined hogi.