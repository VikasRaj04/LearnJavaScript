const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB Calls, Cryptography, network
    setTimeout(() => {
        console.log("Async task is complete");
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise Consumed");
});


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 2000);
}).then(function () {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise 3");
        resolve({ userName: "Vikas", email: "vikas@example.com" });
    }, 3000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise 4");
        let error = true;
        if (!error) {
            resolve({ userName: "user123", password: "123" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 4000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.userName;
}).then((userName) => {
    console.log(userName);
}).catch(function (error) {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise 5");
        let error = true;
        if (!error) {
            resolve({ userName: "javascript", password: "123" });
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 5000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }


// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

