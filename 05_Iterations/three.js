// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5];


// In simple array for of loop is prints only values directly


for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
    console.log(greet);
}


// Maps

const map = new Map();                          // new constructor and Map() object
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
// map.set('IN', 'India');                          // Duplicate Values are not allowed. Only unique Values

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}


const myObj = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value)                             // for of Loop is not working on Object
// }


