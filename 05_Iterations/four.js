const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by apple'
}

// for in loop is for  objects

for (const key in myObject) {               
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}



const programming = ["js", "rb", "py", "java", "cpp"]

// In simple array for in loop will print index number 

for (const key in programming) {
    // console.log(programming[key]);
}





const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
map.set('IN', 'India');


// for in loop is not working on Map() objects

for (const key in map) {
    console.log(key)
}