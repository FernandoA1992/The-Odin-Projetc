//* PAY CLOSE ATTENTION HOW TO FUNCTIONS ARE DECLARED //

//FUNCTION DECLARATION

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {
  function welcome() {
    alert("Hello!");
  }

} else {
  function welcome() {
    alert("Greetings!");
  }
}
// ...use it later
welcome(); // Error: welcome is not defined


//FUNCTION DECLARATION

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {
  welcome = function() {
    alert("Hello!");
  };
} else {
  welcome = function() {
    alert("Greetings!");
  };
}
welcome(); // ok now

// using a question mark operator ?:


let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now


let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome();

// ARROW FUNCTION

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3

let sayHi = () => alert("Hello!");

let sayHi = function() {
    alert("Hello!");
};

function sayHi() {
    alert("Hello!");
}


let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  alert( sum(1, 2) ); // 3

sayHi();


//PRACTICA
//PREGUNTAR CUAL ES TU EDAD, ASIGNAR A UNA VARIABLE AGE
// SI ES MENOR A 18 DECIR DE LO CONTRARIO, GREETINGS.
// CREAR O ASIGNAR FUNCION A WELCOME 
// DEMOSTRAR USANDO LOS DOS METODOS.

//1. Function Declaration.

let age = prompt("How old are you?", 18);

if (age < 18) {
    function welcome() {
        alert("Hello!");
    }
 } else {
    function welcome() {
        alert("Greeting");
    }
 }

 //2. Function Expression

let age = prompt("How old are you?", 18);

let welcome;

 if (age < 18) {
    welcome = function() {
        alert("Hello!");
    };

 } else {
   welcome = function() {
        alert("Greeting!");
   };
 }

 welcome();

 //2.1 Using contracted method using ? 

 let age = prompt("How old are you?", 18);

 let welcome = (age < 18) ? 
 function () {alert("Hello!"); }:
 function() {alert("Greeting!"); };

 welcome()
   

//*Replace Function Expressions with arrow functions in the code below:*//

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
      "Do you agree?",
    () => alert("You agreed!"),
    () => alert("You canceled the execution."),
  );