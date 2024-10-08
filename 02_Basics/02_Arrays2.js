const marvel_heros = ["thor", "Ironman", "Spiderman"];             // Array of Strings
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)                                     // Simply this pushes array as it is
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);                                // method to print pushed arrays element

let heros = marvel_heros.concat(dc_heros)                          // It will concatinate or add two arrays
console.log(heros);

const all_new_heros = [...marvel_heros, ...dc_heros]                // it called spread operator. it also concatinate or add multiple arrays in one array;

console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]       // rare case of array 

const real_another_array = another_array.flat(Infinity)             // how to solve this. flat() will automatically solve this type of array in one single simple array ;and we can pass the argu. like dept or infinity;

console.log(real_another_array)



console.log(Array.isArray("Vikas"));                                // it will checks that is it an array;
console.log(Array.from("Vikas"));                                   // from() will convert this string in an array;
console.log(Array.from({name: "vikas"}));   //interesting           // this is confused which array convert(of values or key pairs)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))                           // it will return array of multiple sets of variables and arrays or values; of() is from() another alternative;