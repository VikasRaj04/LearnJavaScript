function sayMyName() {                  // Function 
    console.log("V");
    console.log("I");
    console.log("K");
    console.log("A");
    console.log("S");
}

sayMyName                               // Functions Reference
// sayMyName();                            // Functions Execute

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);                 
// }

function addTwoNumbers(number1, number2){               // function with parameters
    // let result = number1 + number2;                  // store in one variable
    // return result;                                   // return keyword and return result;
    return number1 + number2;                           // short way to write
    console.log("Vikas");                               // not executable code after return
}

addTwoNumbers(3, 4);                                    // function arguments Number
addTwoNumbers(3, "4");                                  // Function argu. Number and string wrong data
addTwoNumbers(3, "a");                                  // wrong data if argu.

const result = addTwoNumbers(3, 5);                     // store return fuction in result variables
// console.log("Result: ", result);                        // print result variable    



function loginUserMessage(username = "Sam"){                // Default arugment is Sam
    if(!username){
        console.log("Please Enter Username")
        return
    }
    return `${username} just Logged in`;


}

// console.log(loginUserMessage("Vikas"));
// console.log(loginUserMessage());



function calculateCartPrice(val1, val2, ...num){            // function with rest operator. it will catch all the values in one parameter
    return num;
}

console.log(calculateCartPrice(200, 400, 500, 2000));


let user = {
    username: "raj",
    price: 299
}

function handleObject(anyObject){                           // function for an object handling
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({                  // we can also create or direct pass the object
    username: "sam",
    price: 100
});

const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray){               // function for array 
    return getArray[1];
}

console.log(returnSecondValue(myNewArray))