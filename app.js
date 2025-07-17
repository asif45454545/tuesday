// <====== Chapter 20 – for loops nested =======>
// <====== Question:No-1 ======>
let firstNames = ["Lil", "Big"];
let lastNames = ["Zzz", "Boom"];

for (let i=0; i<firstNames.length; i++){
    for (let j=0; j<lastNames.length; j++){
        console.log(firstNames[i]+" "+lastNames[j]);
    }
}
// <====== Question:No-2 ======>
for (let i=0; i<3; i++){
    for (let j=0; j<2; j++){
        console.log(i,j);
    }
}
// <====== Question:No-3 ======>
let a = ["Muhammad","Abu BAkar","Umar","USman","Ali"]

for (let i=0; i<a.length; i++){
    for (let j=0; j<a.length; j++){
        console.log(a[i],a[j]);
    }
}
// <====== Chapter 21 – Changing case =======>
// <====== Question:No-1 ======>
let user = prompt("Enter any text");
let lowerCase = user.toLowerCase();
console.log("Lowercase:", lowerCase);

// <====== Question:No-2 ======>
let cityA = "KARACHI"
let cityB = prompt("Enter your city");
cityB = cityB.toUpperCase()
if (cityA === cityB) {
  console.log("City matched: Welcome!");
} else {
  console.log("City not recognized.");
}
// <====== Question:No-3 ======>
//Changing the case (like making all letters small or capital) is important because people write things differently. One person may write karachi, another may write Karachi, or KARACHI. But the computer sees them as different. So, we change all letters to small or capital before checking. This way, it works for everyone.

// <====== Chapter 22 – Strings: =======>
// <====== Question:No-1 ======>
let text = "JavaScriptRocks";
let firstFive = text.slice(0, 5);
console.log("First 5 characters:", firstFive);

// <====== Question:No-2 ======>
let userString = prompt("Enter any string:");
let lastChar = userString[userString.length - 1];
console.log("Last character:", lastChar);

// <====== Question:No-3 ======>
let fullName = prompt("Enter your full name:");
console.log("Length of your name:", fullName.length);

// <====== Chapter 23 – Strings: finding segments ======>
// <====== Question:No-1 ======>
let sentence = "The lazy dog sleeps.";
let position = sentence.indexOf("dog");
console.log("Number of dog Position:", position);

// <====== Question:No-2 ======>
let greeting = prompt("Write something:");
if (greeting.indexOf("hello") !== -1) {
  console.log("Hello found!");
} else {
  console.log("Hello not found.");
}
// <====== Question:No-3 ======>
// if not found?
// indexOf returns -1 if the word is not in the string.

// <====== Chapter 24 – Strings: finding a character at a location ======>
// <====== Question:No-1 ======>
let word = "JavaScript";
console.log("4 Character:", word.charAt(4));

// <====== Question:No-2 ======>
let str = prompt("Enter a string:");
let pos = prompt("Enter a position number:");
console.log("Character at that position:", str.charAt(pos));

// <====== Question:No-3 ======>
// Out of bounds test
// If index is too big, it returns an empty string.

// <====== Chapter 25 – Strings: replacing characters ======>
// <====== Question:No-1 ======>
let bad = "This is a bad example.";
let good = bad.replace("bad", "good");
console.log(good);

// <====== Question:No-2 ======>
let jsSentence = "JS is fun. JS is powerful.";
let fullJS = jsSentence.replace(/JS/g, "JavaScript");
console.log(fullJS);

// <====== Question:No-3 ======>
let template = "Hello, NAME";
let custom = template.replace("NAME", "Asif");
console.log(custom);

// <====== Chapter 26 – Rounding numbers ======>
// <====== Question:No-1 ======>
console.log("Math.round(2.6):", Math.round(2.6))
console.log("Math.floor(2.6):", Math.floor(2.6))
console.log("Math.ceil(2.6):", Math.ceil(2.6))

// <====== Question:No-2 ======>
let num = parseFloat(prompt("Enter a number:"))
console.log("Rounded:", Math.round(num))

// <====== Question:No-3 ======>
console.log("Math.floor(-2.9):", Math.floor(-2.9))
console.log("Math.ceil(-2.9):", Math.ceil(-2.9))

// <====== Chapter 27 – Generating random numbers ======>
// <====== Question:No-1 ======>
let dice = Math.floor(Math.random() * 6) + 1
console.log("Dice roll:", dice)

// <====== Question:No-2 ======>
let coin = Math.random() < 0.5 ? "Heads" : "Tails"
console.log("Coin toss:", coin);

// <====== Question:No-3 ======>
let password = Math.floor(Math.random() * 9000) + 1000;
console.log("Password:", password);

// <====== Chapter 28 – Converting strings to integers and decimals ======>
// <====== Question:No-1 ======>
let floatVal = parseFloat("45.67");
console.log("Float:", floatVal);

// <====== Question:No-2 ======>
let pxVal = parseInt("123px");
console.log("Parsed int:", pxVal);

// <====== Question:No-3 ======>
let failParse = parseInt("abc");
console.log("Parsing 'abc':", failParse);

// <====== Chapter 29 – Converting strings to numbers, numbers to strings ======>
// <====== Question:No-1 ======>
let numVal = 100
let strVal = numVal.toString()
console.log("String type:", typeof strVal);

// <====== Question:No-2 ======>
let yearStr = "2025";
let yearNum = Number(yearStr) + 10;
console.log("New number:", yearNum)

// <====== Question:No-3 ======>
console.log(parseInt("123abc"))
console.log(Number("123abc"))

// <====== Chapter 30 – Controlling the length of decimals ======>
// <====== Question:No-1 ======>
let p = 123.45678;
console.log(p.toFixed(2));

// <====== Question:No-2 ======>
let dec = Number("12.999").toFixed(1);
console.log(dec);

// <====== Question:No-3 ======>
let userDecimal = parseFloat(prompt("Enter a decimal number:"));
console.log("Rounded to 3 places:", userDecimal.toFixed(3));

// <====== Chapter 31 – Getting the current date and time ======>
// <====== Question:No-1 ======>
let now = new Date()
console.log("Current date and time:", now)

// <====== Question:No-2 ======>
let currentYear = now.getFullYear()
console.log("Year:", currentYear)

// <====== Question:No-3 ======>
let hours = now.getHours()
let greeting1 = hours < 12 ? "Good Morning" : "Good Evening"
console.log(greeting1)

// <====== Chapter 32 – Extracting parts of the date and time ======>
//
let today = new Date()

console.log("Day:", today.getDate())
console.log("Month:", today.getMonth() + 1)
console.log("Year:", today.getFullYear());

console.log("Hour:", today.getHours())
console.log("Minute:", today.getMinutes())

let timeNow = today.getHours() + ":" + today.getMinutes()
console.log("Digital clock:", timeNow)