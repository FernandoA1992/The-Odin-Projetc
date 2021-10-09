//demo

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";

document.getElementById("demo").innerHTML = cars;

cars.leght // it tells you number of elements in the Array.
cars.sort() // It sorts the array.

const person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("demo1").innerHTML = person.firstName;

const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo2").innerHTML = fruits[1]; // it will show the first array element
document.getElementById("demo3").innerHTML = fruits[fruits.length-1]; // shows the latest element.

// Looping arrays elements.

// The safest way to loop through an array, is using a for loop:

let fLen = fruits.length; // getting the numbers of elements in the array.

let text = "<ul>"; 

for (let i = 0; i < fLen ; i++) {
    text += "<li>" + fruits[i]  + "</li>";
}

text += "</ul>";

document.getElementById("demo4").innerHTML = text;

// You can also use the Array.forEach() function:

let textAlt2 = `<ul>`;
fruits.forEach(myFunction)
textAlt2 += `</ul>`;
document.getElementById("demo5").innerHTML = textAlt2;

function myFunction(value) {
    textAlt2 = `${textAlt2} <li> ${value} </li>`
}

// The easiest way to add a new element to an array is using the push() method:

document.getElementById("demo6").innerHTML = fruits;

function addLemon() {
    fruits.push("Lemon");  // method with Push
    //fruits[fruits.length] = "Lemon";  // Method with lenght
    document.getElementById("demo6").innerHTML = fruits;
}

// >Avoid using new Array(). Use [] instead.<

//const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];


///A common question is: How do I know if a variable is an array? 
// To solve this problem ECMAScript 5 defines a new method Array.isArray():
//The instanceof operator returns true if an object is created by a given constructor:

Array.isArray(fruits); // returns true

fruits instanceof Array;   // returns true
