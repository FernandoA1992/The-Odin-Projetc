const fruits = ["Banana", "Orange", "Apple", "Mango"];

//let newString = fruits.toString(); // If a use typeof I get this var is a String.

//toString()
document.getElementById("demo").innerHTML = fruits.toString();
//join()
document.getElementById("demo2").innerHTML = fruits.join(" * "); // you can specify a separator.
//pop()
fruits.pop()
document.getElementById("demo3").innerHTML = fruits;

//push()
function addKiwi() {
    fruits.push("Kiwi");
    document.getElementById("demo4").innerHTML= fruits;
} // Creating a event to be triggered when the button is clicked.
document.getElementById("demo4").innerHTML =  fruits;

//shift()
document.getElementById("demo5").innerHTML = fruits;
fruits.shift();
document.getElementById("demo6").innerHTML = fruits;


//unshift()
document.getElementById("demo7").innerHTML = fruits;

function addLemon() {
  fruits.unshift("Lemon");
  document.getElementById("demo7").innerHTML = fruits;
}

//delete arrayName[n];

const frutas = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo8").innerHTML = `The  first fruit is ${frutas[0]}`;

//delete frutas[0];
document.getElementById("demo9").innerHTML = `The  first fruit is ${frutas[0]}`;

//splice(); to add new elements to an array.

document.getElementById("demo10").innerHTML = `Original Array is:<br> ${frutas}`;

function addArray() {
    frutas.splice(2,0,"Lemon","Kiwi"); // second parameter is 0 meaning none element will be deleted.
document.getElementById("demo11").innerHTML = `New Array is:<br> ${frutas}`;
}

//splice(n,m, "", ""); the second parameters tells me how many elements I will delete, the firs, where I should start adding new elemeents if applicable.

document.getElementById("demo12").innerHTML = `${frutas}`;

function deleteArray() {
    frutas.splice(0,1); // I am not adding new elements, but deleting the first one.
document.getElementById("demo12").innerHTML = frutas;
}

// concat() example merging 2 arrays.

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
document.getElementById("demo13").innerHTML = myChildren;

// concat() example merging 3 arrays.

const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin", "Morgan"];
const myChildrens = array1.concat(array2,array3);
document.getElementById("demo14").innerHTML = myChildrens;

// concat() adding a new element to the array.

const myChildren2 = array2.concat("Peter"); // this will add the parameter peter at the end of the array
document.getElementById("demo15").innerHTML = myChildren2;

// using slice() to get a new array.

const frutas1 = ["Banana", "Orange", "Apple", "Mango"];
const citrus = frutas1.slice(1);
document.getElementById("demo17").innerHTML = citrus; // by some reason this code is not working, but it looks like fine.

//When the slice() method is given two arguments, it selects array elements from the start argument,
// and up to (but not included) the end argument:

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits2.slice(1,3);  // returns Orange and Lemon
document.getElementById("demo18").innerHTML = fruits2 + "<br><br>" + citrus2;

//All JavaScript objects have a toString() method.

// The results below are the same

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo20").innerHTML = fruits3.toString();
document.getElementById("demo21").innerHTML = fruits;
