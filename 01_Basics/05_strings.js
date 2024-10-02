const name = "Vikas-raj-thakur";            // String Simple
const repoCount = 50;                       // Number

// console.log(name + repoCount + " value");

console.log(`My Name is  ${name} and My Repo Count is ${repoCount}`);   // Modern Way to write string

const gameName = new String("VkT Coder");       // New String in Variable using Js Object & Constructor

console.log(gameName[0]);                       // Key Pair of  String Object
console.log(gameName.__proto__);                // Prototype of string

console.log(gameName.length);                   // Length of string
console.log(gameName.toUpperCase());            // Convert Uppercase
console.log(gameName.charAt(2));                // at this index which character is placed in String
console.log(gameName.indexOf('T'));             // This Character is Placed at which  index

const newString = gameName.substring(0, 5);     // convert in another subString;
console.log("Sub String: ", newString);

const anotherString = gameName.slice(5, 6)     // Slice String (extract text return new String)
console.log(anotherString);

const newStringOne = "     Vikas      ";
console.log(newStringOne)
console.log(newStringOne.trim())               // trim the string's white spaced 

const url = "https://vikas.com/vikas%20raj";
console.log(url.replace('%20', '-'))           // search this{%20} value and replace with this{-} value

console.log(url.includes('vikas'));            // search this {vikas} keyword is includes in string;

console.log(name.split("-"))                   // split with (-) string and return an array;
console.log(name.bold("vikas"))                // convert string in bold (<b></b>) tex or tag.

console.log(name.anchor("Link"))               // wrap this string in an anchor <a> tag with name "Link";
console.log(name.big())                        // insert string in <big> tag
console.log(name.blink())                      // in <blink> tag
console.log(name.concat(" Hello"))             // Concat this string

console.log(name.endsWith("r"))                // It will checks the string is ending with that character
console.log(name.fixed())                      // It will return string in <tt> tag

console.log(name.fontcolor("red"))       // returns <font color="red">Vikas-raj-thakur</font> (text color)
console.log(name.fontsize(34))          // increases the size of font -> 34;
console.log(name.italics())             // returns italic text
console.log(name.lastIndexOf("r"))      // returns index value of specified charcter
console.log(name.link("vikas.com"))     // it will return a <a> tag with href attribute and string text;

console.log(name.match("Vikas"))         // checks this is matched or not
console.log(name.normalize())           // it will return normal simple string


console.log(name.repeat(4))             // it will repeat the same string at passed value times
console.log(name.replaceAll("a", "Z"))  // it will all replace with that argument (single will one replace)

console.log(name.search("raj"))         // returns first characters index number;