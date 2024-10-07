// Dates

let myDate = new Date();
console.log(myDate);                    // Data of Date()
console.log(myDate.toString());         // convert all data in string (Easy to Read)
console.log(myDate.toDateString());     // convert only Date in String
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());   // convert in easy to read local date and time
console.log(typeof(myDate));            // type is object;


// let myCreatedDate = new Date(2024, 9, 7);      // YYYY, MM, DD (Months are starting from 0)
// let myCreatedDate = new Date(2024, 9, 7, 5, 3);   // YYYY, MM, DD, TT, mm, ss
// let myCreatedDate = new Date("2023-10-07");         // YYYY/MM/DD
let myCreatedDate = new Date("07-10-2024");         // DD/MM/YYYY
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
    
})