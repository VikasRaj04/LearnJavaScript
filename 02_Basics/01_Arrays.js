// Array

const myArr = [0, 1, 2, 3, 4, 5];                   // Array Declaration 01
const myHeros = ["Shaktiman", "Naagraj"];           // Array Declaration 02
const myArr2 = new Array(1,2, 3, 4, 5, 6);          // Array Declaration 03

// console.log(myArr[1]);                           // Print Element using index of array

// Array Methods

myArr.push(6);                                      // add this element at the end of the array
myArr.push(7);
// console.log(myArr);

myArr.pop()                                         // remove last element of the array
// console.log(myArr);

myArr.unshift(9)                                    // add this element at the first begining of the array
// console.log(myArr);

myArr.shift();                                      // remove first element of the array
// console.log(myArr);


// console.log(myArr.includes(9));                  // check this element is includes in the array or not
// console.log(myArr.indexOf(3));                   // find the index of this element

const newArr = myArr.join();                        // join() method will return array in string format
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// Slice and Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);                     // slice method in this case 1 indexed element will print, 2nd index element will print but third will not print;

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3);                    // it also includes 1-3 index. but also can manupulate the array and removes that element from original array;
console.log("C ", myArr);
console.log(myn2);



// 