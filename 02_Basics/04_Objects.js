// const tinderUser = new Object()              // Create Object with Constructor (Singleton)

const tinderUser = {}                           // this is not singleton object

tinderUser.id = "124abd";                       // insert values in Object (id)
tinderUser.name = "Sammy";                      // name
tinderUser.isLoggedIn = false;                  // an boolean value;

// console.log(tinderUser);                     // printing obj

const regularUser = {                           // creating nested object
    email: "some@gmail.com",
    fullName: {                                 // nesting here
        userFullName: {
            firstName: "Vikas",
            lastName: "Raj"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);    // way of accessing the nested objects values

const obj1 = {1: "a", 2: "b"}           // obj1
const obj2 = {3: "c", 4: "d"}           // obj2
const obj4 = {5: "e", 6: "f"}           // obj3

// const obj3 = {obj1, obj2}            // it will return both objects in one array as object form
// const obj3 = Object.assign({}, obj1, obj2, obj4)             // it will merge all the objects in one emty {} object
const obj3 = {...obj1, ...obj2}         // it is also same used for merging more than one objects using spread operator;
console.log(obj3);

const user = [              // sometimes we get the objects in array form for looping
    {
        id: "123",
        email: "a@gmail.com"
    },
    {
        id: "112",
        email: "ab@gmail.com"
    },
    {
        id: "12332",
        email: "abc@gmail.com"
    },
    {
        id: "12323",
        email: "adas@gmail.com"
    }
]

console.log(user[1].email);                         // access the 1 index of arrays objects email key
console.log(tinderUser)                     
console.log(Object.keys(tinderUser))                // if we wants to access all the keys of an objects
console.log(Object.values(tinderUser))              // if we wants to access all the values of an object
console.log(Object.entries(tinderUser))             // it returns all the key values in single single array (wrapped in one big container array)

console.log(tinderUser.hasOwnProperty('isLoggedIn'))        // it checks that is  this key has or not in this objects;




console.log("\n\n")

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor} = course;                      // object destructring
console.log(courseInstructor)   

const {courseInstructor: instructor} = course;          // we can also rename keys in object destructuring
console.log(instructor)




// JSON Format API Data => JavaScript Object Notation


// {
//     "name": "vikas",
//     "course": "js in hindi",
//     "price" : "999"
// }


[
    {},
    {},
    {}
]


// random user me
// json object format